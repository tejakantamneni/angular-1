
var app = angular.module("MyApp", [])
      .run(function ($rootScope) {
          $rootScope.greeting = "hello Teja";
          $rootScope.changeGreet = function () {
              $rootScope.greeting = "Hello Keya!";
          };
      });
