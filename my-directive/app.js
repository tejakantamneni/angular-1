(function () {
    "use strict";

    var app = angular.module("MyDirective", []);

    app.directive('myDirective', function () {
        return {
            restrict: 'A',
            replace: true,
            scope: {
                myUrl : '@',
                myLinkText : '@'
            },
            template: '<a href="{{myUrl}}">{{myLinkText}}</a>'
        };
    });


})();