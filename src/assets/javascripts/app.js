

var tazz = angular.module('tazz', ['ngAnimate']);
 
tazz.controller('TazzCtrl', function ($scope, $http) {

  $scope.planet = 'world';

  $http.get('/data/lib.json')
     .then(function(res){
        $scope.library = res.data;
      });

  // $scope.library = $scope.data;

})

.directive('lib', function() {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: '/templates/lib.html'
    };
})