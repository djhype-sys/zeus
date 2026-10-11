/* ZEUS Orb — original implementation. No external runtime dependencies. */
(function () {
'use strict';
const STATES = ['idle','listening','thinking','working','speaking','error'];
const FORMS = ['sphere','halo','helix','constellation'];
const defaults = {idle:'sphere',listening:'halo',thinking:'helix',working:'constellation',speaking:'sphere',error:'halo'};
function rms(samples) { let sum=0; for(const v of samples) sum+=v*v; return Math.sqrt(sum/samples.length); }
class ZeusOrb {
 constructor(canvas, options={}) {
  this.canvas=canvas; this.ctx=canvas.getContext('2d'); this.state='idle'; this.forms={...defaults,...options.forms};
  this.count=Math.max(100,Math.min(6000,options.particles || (matchMedia('(max-width: 600px)').matches?1200:2400)));
  this.points=Array.from({length:this.count},(_,i)=>{const y=1-2*(i+.5)/this.count,a=i*2.3999632297,r=Math.sqrt(1-y*y);return {x:Math.cos(a)*r,y,z:Math.sin(a)*r,a,i};});
  this.positions=this.points.map(p=>({...p})); this.level=0; this.bands=[0,0,0]; this.time=0; this.last=0; this.destroyed=false; this.audioSources=new WeakMap();
  this.motion=matchMedia('(prefers-reduced-motion: reduce)'); this.motionChange=()=>this.draw(); this.motion.addEventListener('change',this.motionChange);
  this.resize=()=>{const b=canvas.getBoundingClientRect(); this.width=Math.max(1,b.width);this.height=Math.max(1,b.height);const d=Math.min(devicePixelRatio||1,2);canvas.width=this.width*d;canvas.height=this.height*d;this.ctx.setTransform(d,0,0,d,0,0);this.draw();};
  this.observer=new ResizeObserver(this.resize);this.observer.observe(canvas);
  this.visibility=()=>{this.last=0; if(document.hidden)cancelAnimationFrame(this.frame);else this.tick(performance.now());};document.addEventListener('visibilitychange',this.visibility);
  this.setState('idle'); this.resize();this.tick(performance.now());
 }
 setState(state) {if(!STATES.includes(state))throw new Error('Unknown orb state: '+state);this.state=state;this.canvas.setAttribute('aria-label','ZEUS '+state);this.canvas.dataset.state=state;this.draw();}
 setForm(state,form) {if(!STATES.includes(state)||!FORMS.includes(form))throw new Error('Unknown state or formation');this.forms[state]=form;this.draw();}
 async audioContext() {if(!this.audio){const C=window.AudioContext||window.webkitAudioContext;if(!C)throw new Error('Audio analysis is unavailable');this.audio=new C();this.analyser=this.audio.createAnalyser();this.analyser.fftSize=512;this.samples=new Float32Array(this.analyser.fftSize);this.bins=new Uint8Array(this.analyser.frequencyBinCount);}await this.audio.resume();return this.audio;}
 async connectAudio(element) {
  const generation=(this.generation||0)+1;this.generation=generation;
  await this.audioContext();if(this.destroyed||this.generation!==generation)return;
  this.disconnectInput();let source=this.audioSources.get(element);if(!source){source=this.audio.createMediaElementSource(element);this.audioSources.set(element,source);source.connect(this.audio.destination);}source.connect(this.analyser);this.source=source;this.element=element;
  this.onPlay=()=>this.setState('speaking');this.onPause=()=>this.setState('idle');this.onError=()=>this.setState('error');
  element.addEventListener('play',this.onPlay);element.addEventListener('pause',this.onPause);element.addEventListener('ended',this.onPause);element.addEventListener('error',this.onError);
  if(!element.paused)this.setState('speaking');
 }
 async listen() {
  const generation=(this.generation||0)+1;this.generation=generation;this.requesting=true;
  await this.audioContext();if(this.destroyed||this.generation!==generation)return;
  let stream;try{stream=await navigator.mediaDevices.getUserMedia({audio:{echoCancellation:true,noiseSuppression:true}});}catch(error){if(this.destroyed||this.generation!==generation)return;this.requesting=false;throw error;}
  if(this.destroyed||this.generation!==generation){stream.getTracks().forEach(t=>t.stop());return;}
  this.requesting=false;
  this.disconnectInput();this.stream=stream;this.source=this.audio.createMediaStreamSource(stream);this.source.connect(this.analyser);this.setState('listening');
  this.streamEnded=()=>{if(this.stream===stream)this.stop();};stream.getTracks().forEach(t=>t.addEventListener('ended',this.streamEnded));
 }
 disconnectInput() {
  if(this.source&&this.analyser)try{this.source.disconnect(this.analyser);}catch{}
  if(this.stream)this.stream.getTracks().forEach(t=>{t.removeEventListener('ended',this.streamEnded);t.stop();});this.stream=null;this.source=null;
  if(this.element){this.element.removeEventListener('play',this.onPlay);this.element.removeEventListener('pause',this.onPause);this.element.removeEventListener('ended',this.onPause);this.element.removeEventListener('error',this.onError);}this.element=null;this.level=0;this.bands=[0,0,0];
 }
 stop() {this.generation=(this.generation||0)+1;this.requesting=false;if(this.element)this.element.pause();this.disconnectInput();this.setState('idle');}
 target(p,t) {
  const form=this.forms[this.state],a=p.a,theta=(p.i/this.count)*Math.PI*2;
  if(form==='halo'){const ring=p.i%4,r=.66+ring*.12;return {x:Math.cos(a)*r,y:Math.sin(a)*r,z:Math.sin(theta*4)*.15};}
  if(form==='helix'){const a2=p.y*8+t*.5+(p.i%3)*Math.PI*2/3;return {x:Math.cos(a2)*.65,y:p.y*.9,z:Math.sin(a2)*.65};}
  if(form==='constellation'){const band=p.i%3;if(band===0)return {x:Math.cos(a)*.96,y:Math.sin(a)*.96,z:0};if(band===1)return {x:0,y:Math.cos(a)*.96,z:Math.sin(a)*.96};return {x:Math.sin(a)*.96,y:0,z:Math.cos(a)*.96};}
  const energy=this.motion.matches?0:this.level,band=this.bands[p.i%3]||0;
  const ripple=Math.sin(p.y*9+t*5+p.a*.1)*energy*(.18+band*.16);return {x:p.x*(1+ripple),y:p.y*(1+ripple),z:p.z*(1+ripple)};
 }
 tick(now) {
  if(this.destroyed||document.hidden)return;const dt=Math.min(.05,(now-(this.last||now))/1000);this.last=now;
  if(this.source&&this.analyser&&['speaking','listening'].includes(this.state)){this.analyser.getFloatTimeDomainData(this.samples);const target=Math.max(0,Math.min(1,(rms(this.samples)-.008)*5));this.level+=(target-this.level)*(1-Math.exp(-dt*(target>this.level?22:7)));this.analyser.getByteFrequencyData(this.bins);
   const ranges=[[80,400],[400,2000],[2000,8000]],hz=this.audio.sampleRate/this.analyser.fftSize;
   this.bands=ranges.map(([lo,hi])=>{let sum=0,n=0;for(let i=Math.max(1,Math.floor(lo/hz));i<Math.min(this.bins.length,Math.ceil(hi/hz));i++){sum+=this.bins[i]/255;n++;}return n?sum/n:0;});
  }else {this.level*=Math.exp(-dt*9);this.bands=this.bands.map(v=>v*Math.exp(-dt*9));}
  this.canvas.dataset.audioLevel=this.level.toFixed(3);if(!this.motion.matches)this.time+=dt;
  this.draw(dt);this.frame=requestAnimationFrame(t=>this.tick(t));
 }
 draw(dt=.016) {
  if(!this.ctx)return;const c=this.ctx,w=this.width,h=this.height;if(!w||!h)return;c.clearRect(0,0,w,h);
  const reduced=this.motion.matches,energy=reduced?0:this.level,t=this.time,speed={idle:.12,listening:.2,thinking:.65,working:.85,speaking:.22,error:.08}[this.state];
  const rotation=t*speed,radius=Math.min(w,h)*.33*(1+energy*.15),cx=w/2,cy=h/2;
  const glow=c.createRadialGradient(cx,cy,0,cx,cy,radius*1.6);glow.addColorStop(0,'rgba(219,171,75,'+(.08+energy*.09)+')');glow.addColorStop(1,'rgba(219,171,75,0)');c.fillStyle=glow;c.fillRect(0,0,w,h);
  const projected=[];for(let i=0;i<this.count;i++){const p=this.points[i],v=this.positions[i],q=this.target(p,reduced?0:t),mix=reduced?1:1-Math.exp(-dt*5);v.x+=(q.x-v.x)*mix;v.y+=(q.y-v.y)*mix;v.z+=(q.z-v.z)*mix;
   let x=v.x*Math.cos(rotation)+v.z*Math.sin(rotation),z=-v.x*Math.sin(rotation)+v.z*Math.cos(rotation);const tilt=.3,y=v.y*Math.cos(tilt)-z*Math.sin(tilt);z=v.y*Math.sin(tilt)+z*Math.cos(tilt);const perspective=2.8/(2.8-z*.6);projected.push({x:cx+x*radius*perspective,y:cy+y*radius*perspective,z,i});}
  projected.sort((a,b)=>a.z-b.z);const error=this.state==='error';
  for(const p of projected){const front=(p.z+1)/2,alpha=.15+front*.65+energy*.15;const size=(.55+front*.9+energy*.5)*Math.max(.65,w/520);c.fillStyle=error?'rgba(245,116,97,'+alpha+')':'rgba('+(p.i%19===0?'255,242,204':'215,173,91')+','+alpha+')';c.beginPath();c.arc(p.x,p.y,size,0,Math.PI*2);c.fill();}
 }
 destroy() {this.stop();this.destroyed=true;cancelAnimationFrame(this.frame);this.observer.disconnect();document.removeEventListener('visibilitychange',this.visibility);this.motion.removeEventListener('change',this.motionChange);if(this.audio)this.audio.close();}
}
window.ZeusOrb=ZeusOrb;window.ZeusOrbMath={rms};
})();
