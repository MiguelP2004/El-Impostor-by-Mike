// sw.js (colócalo en la raíz)
const CACHE = 'impostor-v1';
const FILES = [
  '/',
  '/main.html',
  '/style.css', /* si lo separas */
  '/main.js',   /* si lo separas */
  '/indiBola.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE).then(cache => cache.addAll(FILES))
  );
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(clients.claim());
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(resp => resp || fetch(event.request))
  );
});