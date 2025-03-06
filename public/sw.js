self.addEventListener("install", e => {
    e.waitUntil(
        caches.open("static").then(cache => {
             return cache.addAll(["./", "./style.css", "./oxy.png", "./index.html"]);
        })
    );
});

self.addEventListener("fetch", e => {
    e.respondWith(
        caches.match(e.request).then(response => {
            return response || fetch(e.request);
        })
    );
});