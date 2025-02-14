const CACHE_A1 = "PWA-cache-1";

const filetocache = ["/server.js", "/tallyLogin.html", "/manifest.json"];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_A1).then((cache) => {
      cache.addAll(filetocache);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      if (response) {
        return response;
      }
      return fetch(event.request);
    })
  );
});
