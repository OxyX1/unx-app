self.addEventListener("install", e => {
    e.waitUntil(
        caches.open("static").then(cache => {
             return cache.addAll(["./", "./style.css", "./oxy.png"]);
        })
    )
});

self.addEventListener("fetch", e => {
    console.log(`intercept fetch request for: ${e.request.url}`);
});