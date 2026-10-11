/* Bounded offline extractor. Unsupported terms fail closed; no AI or external API. */
(function(root) {
 'use strict';
 const SAMPLE = 'Friday and Saturday, 9 PM–midnight, AED 750 per night, Latin/Moroccan music, paid after each performance';
 function parse(text, consent, dates = {}) {
  if (!consent) throw new Error('Consent is required before processing or saving the conversation.');
  if (typeof text !== 'string' || text.length > 12000) throw new Error('Use a conversation of up to 12,000 characters.');
  const q = text.toLowerCase().replace(/[–—]/g, '-');
  if (!/^friday and saturday,?\s*9\s*pm\s*-\s*midnight,?\s*aed\s*[\d,]+(?:\.\d{1,2})?\s*per night,?\s*latin\s*\/\s*moroccan music,?\s*paid after each performance[.!]?$/i.test(q.trim())) throw new Error('Unsupported or additional terms need manual review. Use the acceptance example.');
  const amounts = [...q.matchAll(/\baed\s*([\d,]+(?:\.\d{1,2})?)/g)];
  if (!/\bfriday\s+and\s+saturday\b/.test(q) || !/\b9\s*p\.?m\.?\s*-\s*midnight\b/.test(q) ||
      amounts.length !== 1 || !/\bper night\b/.test(q) || !/\blatin\s*\/\s*moroccan\s+music\b/.test(q) ||
      !/\bpaid after each performance\b/.test(q)) {
   throw new Error('This offline prototype supports the Friday/Saturday example only. Review other conversations manually.');
  }
  // Contradictory terms must not silently disappear into the supported example.
  if (/\b(?:except|instead|not|cancel|deposit|unpaid|sunday|monday|tuesday|wednesday|thursday)\b/.test(q) ||
      [...q.matchAll(/\b\d{1,2}\s*(?:am|pm)\b/g)].length !== 1) {
   throw new Error('Conflicting or additional terms need manual review.');
  }
  const amount = Number(amounts[0][1].replaceAll(',', ''));
  if (!Number.isFinite(amount) || amount <= 0 || amount > 1000000) throw new Error('Review the fee amount.');
  const days = ['Friday','Saturday'];
  const events = days.map((day,i) => {
   const date = dates[day.toLowerCase()] || null;
   let endDate = null;
   if (date) {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) throw new Error('Select a valid '+day+' date.');
    const d = new Date(date+'T00:00:00Z');
    if (!Number.isFinite(d.getTime()) || d.toISOString().slice(0,10)!==date || d.getUTCDay()!==i+5) throw new Error('The selected date must be a '+day+'.');
    d.setUTCDate(d.getUTCDate()+1); endDate = d.toISOString().slice(0,10);
   }
   return {day,date,start:'21:00',end:'00:00',endDate,endsNextDay:true,timezone:'Asia/Dubai',status:'draft'};
  });
  if (events.every(e=>e.date) && events[0].endDate !== events[1].date) throw new Error('Select consecutive Friday and Saturday dates.');
  return {
   version:1, terms:{days,start:'21:00',end:'00:00',endsNextDay:true,currency:'AED',feePerNight:amount,total:amount*2,music:['Latin','Moroccan'],payment:'after each performance'},
   calendar:events, shadow:{genres:['Latin','Moroccan'],durationHours:3,ownedTracksRequired:true,status:'draft'},
   receivables:events.map(e=>({day:e.day,date:e.date,currency:'AED',amount,due:'after performance',status:'draft'})),
   followUp:{body:`Please confirm the Friday and Saturday dates, venue and client details. Each set runs 9 PM to midnight at AED ${amount} per night, with Latin/Moroccan music, paid after each performance.`,status:'draft'},
   missing:[...events.filter(e=>!e.date).map(e=>e.day+' date'),'client','venue'],
   permissions:{review:'pending',calendar:'not authorized',message:'not authorized',externalActions:'disabled'}
  };
 }
 class Store {
  constructor(storage, workspace='local-preview') {this.storage=storage;this.key='zeus.booking.v1.'+workspace;}
  read() {const raw=this.storage.getItem(this.key);if(!raw)return {drafts:[],audit:[]};const data=JSON.parse(raw);if(!Array.isArray(data.drafts)||!Array.isArray(data.audit))throw new Error('Stored drafts need recovery. Export browser data before clearing it.');return data;}
  save(text,consent,dates) {
   const draft=parse(text,consent,dates),data=this.read();
   draft.id=crypto.randomUUID();draft.createdAt=new Date().toISOString();draft.source={text,consent:true};
   data.drafts.unshift(draft);data.audit.push({draftId:draft.id,event:'consented draft saved',at:draft.createdAt});
   this.storage.setItem(this.key,JSON.stringify(data));return draft;
  }
  review(id) {
   const data=this.read(),draft=data.drafts.find(d=>d.id===id);if(!draft)throw new Error('Draft not found.');
   draft.permissions.review='reviewed';data.audit.push({draftId:id,event:'local review only; no external permission granted',at:new Date().toISOString()});
   this.storage.setItem(this.key,JSON.stringify(data));return draft;
  }
  execute() {throw new Error('External actions are disabled. ZEUS authorization and tested service adapters are required.');}
 }
 const api={SAMPLE,parse,Store};if(typeof module==='object'&&module.exports)module.exports=api;else root.ZeusBooking=api;
})(typeof window==='object'?window:globalThis);
