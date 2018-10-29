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