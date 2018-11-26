(function() {
    'use strict';
    
    var modules = [
        'ngAnimate',
        'ui.router',
    ];

    angular.module('ninja', modules);
})();
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
(function() {
    "use strict";
    
    angular.module('ninja')
    .controller('mainCtrl', ['$scope', 'graphQLFactory', Controller])

    function Controller($scope, graphQLFactory) {
        $scope.heading = "Checking";
        
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register('/static/serviceworker.js', {scope: '/static/'})
            .then((registration) => {
                var serviceWorker;
                if (registration.installing) {
                    serviceWorker = registration.installing;
                } else if (registration.waiting) {
                    serviceWorker = registration.waiting;
                } else if (registration.active) {
                    serviceWorker = registration.active;
                }

                if (serviceWorker) {
                    console.log('Service Worker Phase: ', serviceWorker.state);
                    serviceWorker.addEventListener('statechange', (event) => {
                        console.log('Service Worker Phase: ' + event.target.state);
                    })
                }
            }).catch((error) => {
                console.log("Service Worker registration failed: ", error);
            })
        } else {
            console.log('Browser do not supports service worker');
        }

        // navigator.serviceWorker.ready
        // .then((serviceWorkerRegistration) => {
        //     return serviceWorkerRegistration.sync.register('foo');
        // })

        var query = `
            query {
                allArticles {
                    id
                    title
                    body
                }
            }
        `;

        graphQLFactory.getArticleList(query)
        .then(function (response) {
            $scope.articles = response.data.data.allArticles;
        }).catch(function(error) {
            console.log(error);
        });
    }
})();
(function() {
    "use strict";

    angular.module('ninja')
    .factory('graphQLFactory', ['$http', Factory]);
    
    function Factory($http) {
        var server = "/graphql/";

        return  {
            getArticleList: (query) => $http.get(server + "?query=" + query), 
        }
    }
})();   