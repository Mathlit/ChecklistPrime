let version = '0.0.1';

self.addEventListener('install', e => {
    let timeStamp = Date.now();
    e.waitUntil(
        caches.open('checklistprime').then(cache => {
            return cache.addAll([
                `index.html`,
                `styles/style.css`,
                `scripts/bundle.js`,
                `styles/fonts/clp.svg`,
                `styles/fonts/clp.ttf`,
                `styles/fonts/clp.woff`
            ]).then(() => self.skipWaiting());
        })
    )
});

self.addEventListener('activate', event => {
    event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request, {
            ignoreSearch: true
        }).then(response => {
            return response || fetch(event.request);
        })
    );
});