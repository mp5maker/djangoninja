(function() {
    'use strict';
    
    var modules = [

    ];

    angular.module('ninja', modules);
})();
(function() {
    "use strict";
    
    angular.module('ninja')
    .controller('mainCtrl', ['$scope', Controller])

    function Controller($scope) {
        $scope.heading = "Checking";
    }
})();