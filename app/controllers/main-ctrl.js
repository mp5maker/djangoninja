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