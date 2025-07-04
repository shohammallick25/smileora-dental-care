const CACHE_NAME = "smileora-cache-v1";
const urlsToCache = [
  "/",
  "/index.html",
  "/assets/css/style.css",
  "/assets/js/script.js",
  "/manifest.json",
  "/assets/images/icon-192.png",
  "/assets/images/icon-512.png"
  // Add other important assets here
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
