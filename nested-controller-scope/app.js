
var app = angular.module("Nested-Ctrl", [])

app.controller('ParentController', function ($scope) {
   $scope.person = {name: "Teja Kantamneni"}
});

app.controller('ChildController', function ($scope) {
    $scope.person.hero = true;
});