const CACHE_NAME = 'django-ninja-v1';
const urlsToCache = [
    '/static/library.css',
    '/static/library.js',
    '/static/main.css',
    '/static/main.js'
]

// Good For adding assets/caches
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
        .then((cache) => {
            console.log("Opened Cache");
            return cache.addAll(urlsToCache);
        })
    );
});


// Clean up the previous version of service workers
self.addEventListener('activate', (event) => {

})


// Get Message from other scripts
self.addEventListener('message', (event) => {

})

// Everytime a network is requested
self.addEventListener('fetch', (event) => {
    event.respondsWith(
        caches.match(event.request)
        .then((response) => {
            if (response) {
                return response;
            }
            return fetch(event.request);
        })
    );
});

// Background sync
// self.addEventListener('sync', (event) => {
//     if (event.tag == 'foo') {
//         event.waitUntil(console.log('bar'));
//     }
// })