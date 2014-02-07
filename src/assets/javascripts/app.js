


var tazz = angular.module('tazz', ['angularLocalStorage']);
 
tazz.controller('TazzCtrl', function ($scope, $http, storage) {

  $scope.world = 'Tazz';

  $http.get('/data/lib.json')
     .then(function(res){
        $scope.library = res.data;
      });

  // $scope.library = $scope.data;

  storage.bind($scope,'library');

})

.directive('lib', function() {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: '/templates/lib.html'
    };
})