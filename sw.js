const CACHE_NAME = 'paddycare-v2';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './model.json',
  './model.weights.bin' // Important: cache the heavy AI data!
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((res) => res || fetch(event.request))
  );
});