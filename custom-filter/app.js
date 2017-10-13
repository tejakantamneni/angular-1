
var app = angular.module('CF', []);

app.controller('CustomFilterController', function ($scope) {

});
app.filter('altCap', function () {
    return function (input) {
        if(input){
            var temp ="";
            for(var i=0; i<input.length; i++){
                console.log(input[i])
                if(i % 2 == 0){
                    console.log("cap" + input.charAt(i).toUpperCase())
                    temp += input.charAt(i).toUpperCase()
                }else {
                    console.log("as is" + input.charAt(i))
                    temp += input.charAt(i);
                }
            }
            return temp;
        }else{
            return ""
        }
    }
});