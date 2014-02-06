

var tazz = angular.module('tazz', ['ngAnimate']);
 
tazz.controller('TazzCtrl', function ($scope, $http) {

  $http.get('/data/lib.json')
     .then(function(res){
        $scope.library = res.data;
      });

  // $scope.library = $scope.data;

})

tazz.controller('MyCtrl', function ($scope, $http) {



  $scope.planet = 'world';

  $scope.exampleList = [
    'item 1',
    'item 2',
    'item 3',
  ],
  
  $scope.exampleObjectList =[
    {
      "title": "Object Nr 1",
      "uistate": false,
    },
    {
      "title": "Object Nr 2",
      "uistate": true,
    },
  ]; 


})

.directive('lib', function() {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: '/templates/lib.html'
    };
})






