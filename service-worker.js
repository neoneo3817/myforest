const CACHE_NAME = 'namane-sup-shell-v1';
self.addEventListener('install', (event) => {
  self.skipWaiting();
});
self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});
// Network passthrough: enables the installable app experience without caching
// the very large 3D HTML bundle or claiming full offline support.
self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);
  if (url.origin === self.location.origin) {
    event.respondWith(fetch(event.request));
  }
});
