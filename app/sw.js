/* Only public app-shell assets are cached. No transcripts or API responses. */
const CACHE = 'zeus-shell-2026-10-11-1';
const FILES = ['index.html','manifest.json','icons/192.png','icons/512.png',
 'orb/zeus-orb.js','orb/preview.html','booking/index.html','booking/core.js','booking/ui.js'];
const ROOT = new URL('./', self.location.href);
const URLS = FILES.map(path => new URL(path, ROOT).href);
self.addEventListener('install', event => event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(URLS))));
self.addEventListener('activate', event => event.waitUntil((async () => {
 for (const key of await caches.keys()) if (key.startsWith('zeus-shell-') && key !== CACHE) await caches.delete(key);
 await self.clients.claim();
})()));
self.addEventListener('fetch', event => {
 if (event.request.method !== 'GET') return;
 const url = new URL(event.request.url);
 if (url.origin !== ROOT.origin) return;
 let target = url.href;
 if (url.pathname === ROOT.pathname) target = new URL('index.html', ROOT).href;
 if (url.pathname === new URL('booking/', ROOT).pathname) target = new URL('booking/index.html', ROOT).href;
 if (!URLS.includes(target)) return;
 event.respondWith((async () => {
  const cache = await caches.open(CACHE);
  try {
   const response = await fetch(event.request);
   if (response.ok) await cache.put(target, response.clone());
   return response;
  } catch (error) {
   const saved = await cache.match(target);
   if (saved) return saved;
   throw error;
  }
 })());
});
