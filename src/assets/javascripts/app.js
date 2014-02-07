


var tazz = angular.module('tazz', ['angularLocalStorage', 'ngAnimate']);
 
tazz.controller('TazzCtrl', function ($scope, $http, storage) {

  $scope.data = {};
  $scope.getAppData = function() {
    $http.get('/data/data.json')
      .then(function(res){
        $scope.data = res.data;
        console.log('yo');
      });
  };
  storage.bind($scope,'data');

  $scope.world = 'Tazz';
  $scope.getTazzLibrary = function() {
    $http.get('/data/tazz.json')
      .then(function(res){
        $scope.tazz = res.data;
        console.log('yo');
      });
  };
  storage.bind($scope,'tazz');
})

.directive('lib', function() {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: '/templates/lib.html'
    };
})

.directive('app', function() {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: '/app.html'
    };
})