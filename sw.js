// Minimalan service worker — samo da bi Chrome/Edge/Android smatrali sajt
// "instalabilnim". NE keširamo finansijske podatke agresivno (uvek sveže sa mreže).
self.addEventListener('install', (e) => { self.skipWaiting(); });
self.addEventListener('activate', (e) => { self.clients.claim(); });
self.addEventListener('fetch', (e) => {
  e.respondWith(
    fetch(e.request).catch(() => caches.match(e.request))
  );
});
