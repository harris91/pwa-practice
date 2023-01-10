const cacheName = 'firstCache';
const fileNames = [
    './',
    './index.html',
    './manifest.json',
    './images/hello-pwa.png'
];

self.addEventListener('install', event => {
    console.log('Start Service Worker!!');

    event.waitUntil(
        caches.open(cacheName)
        .then( cache => {
            console.log('Saved files in cache.');
            return cache.addAll(fileNames);
        })    
    )
});

self.addEventListener('activate', event => {
    console.log(event, 'Service worker activated!');
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(res => {
            if(!res) {
                console.log("Doesn't have cache items. Try to get data from network ");
                return fetch(event.request);
            } else {
                console.log(`Get data from caches. [request: ${event.request}]`)
            }
        })
    );
});