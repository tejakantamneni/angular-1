
angular.module("Ctrl-App", [])
        .controller('OpController', function ($scope) {
           $scope.counter = 0;
           $scope.add = function (val) {
               $scope.counter += val;
           }
           $scope.subtract = function (val) {
               $scope.counter -= val;
           }
        });