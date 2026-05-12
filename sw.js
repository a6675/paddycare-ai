// Fail ini membolehkan app berfungsi offline
const CACHE_NAME = 'paddy-v1';
const assets = [
  './',
  './index.html',
  './scanner.html',
  './logo_paddy.png',
  './website.png'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(assets)));
});

self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request).then(res => res || fetch(e.request)));
});
