self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('v2').then((cache) => {
      return cache.addAll([
        '/radio/index.html',
        '/radio/manifest.json',
      ]);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
