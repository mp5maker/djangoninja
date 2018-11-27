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