angular.module("clock", [])
.controller('ClockController', function ($scope, $timeout) {
    var updateClock = function(){
        $scope.now = new Date();
        $timeout(function(){
            updateClock();
        }, 1000);
    }
    updateClock();
});