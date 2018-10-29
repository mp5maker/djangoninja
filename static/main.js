(function() {
    'use strict';
    
    var modules = [
        'ngAnimate',
        'ui.router',
    ];

    angular.module('ninja', modules);
})();
(function() {
    "use strict";
    
    angular.module('ninja')
    .controller('mainCtrl', ['$scope', 'graphQLFactory', Controller])

    function Controller($scope, graphQLFactory) {
        $scope.heading = "Checking";

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
            console.log(response.data);
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
        var server = "http://localhost:8000/graphql/";

        return  {
            getArticleList: (query) => $http.get(server + "?query=" + query), 
        }
    }
})();   