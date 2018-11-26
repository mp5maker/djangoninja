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