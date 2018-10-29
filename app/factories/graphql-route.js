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