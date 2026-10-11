'use strict';
const $=id=>document.getElementById(id);
let workspace='local-preview';try{workspace=JSON.parse(localStorage.getItem('zeus_data_v1'))?.currentWorkspace?.id||workspace;}catch{}
const store=new ZeusBooking.Store(localStorage,workspace),feedback=$('feedback');let current=null;
function message(text){feedback.textContent=text;}
function refresh(selected){
 const data=store.read();$('saved').replaceChildren();
 if(!data.drafts.length){const option=new Option('No drafts yet','');$('saved').add(option);}
 for(const draft of data.drafts)$('saved').add(new Option(draft.createdAt+' • AED '+draft.terms.total,draft.id));
 current=data.drafts.find(d=>d.id===selected)||data.drafts[0]||null;
 if(current)$('saved').value=current.id;
 $('review').disabled=!current;$('export').disabled=!current;
 $('audit').textContent=data.audit.map(a=>a.at+' • '+a.event).join('\n')||'No activity yet.';
 if(!current)return;
 const t=current.terms, lines=[
  `BOOKING • ${t.days.join(' + ')} • 21:00–00:00 next day`,
  `${t.currency} ${t.feePerNight} per night • ${t.currency} ${t.total} total • ${t.payment}`,
  '', 'CALENDAR DRAFTS', ...current.calendar.map(e=>`${e.day}: ${e.date||'date required'}, ${e.start} → ${e.endDate||'next day'} ${e.end} • ${e.timezone}`),
  '', 'SHADOW BRIEF', 'Latin / Moroccan • 3 hours per night • owned-track verification required',
  '', 'CFO DRAFT RECEIVABLES', ...current.receivables.map(r=>`${r.day} • ${r.currency} ${r.amount} • ${r.due}`),
  '', 'FOLLOW-UP DRAFT', current.followUp.body,
  '', 'STILL NEEDED', current.missing.join(', '),
  '', `Local review: ${current.permissions.review}. External actions: disabled.`
 ];
 const pre=document.createElement('pre');pre.textContent=lines.join('\n');$('result').replaceChildren(pre);
}
$('sample').onclick=()=>{$('conversation').value=ZeusBooking.SAMPLE;message('Example loaded. Confirm consent before saving.');};
$('generate').onclick=()=>{try{const draft=store.save($('conversation').value,$('consent').checked,{friday:$('friday').value,saturday:$('saturday').value});refresh(draft.id);message('Drafts saved locally. No external action taken.');}catch(error){message(error.message);}};
$('saved').onchange=()=>{try{refresh($('saved').value);}catch(error){message(error.message);}};
$('review').onclick=()=>{try{if(!current)return;store.review(current.id);refresh(current.id);message('Local review recorded. External permission remains ungranted.');}catch(error){message(error.message);}};
$('export').onclick=()=>{if(!current)return;const blob=new Blob([JSON.stringify(current,null,2)],{type:'application/json'}),url=URL.createObjectURL(blob),link=document.createElement('a');link.href=url;link.download='zeus-booking-draft.json';link.click();setTimeout(()=>URL.revokeObjectURL(url),1000);};
try{refresh();}catch(error){message(error.message);}
if('serviceWorker' in navigator)navigator.serviceWorker.register('../sw.js').catch(()=>message('Offline shell unavailable. Local drafts still work while this page is open.'));
