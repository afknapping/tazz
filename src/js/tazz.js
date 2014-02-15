tazz.controller('TazzCtrl', function ($scope, $http, storage) {

  $scope.getTazzLibrary = function() {
    $http.get('data/tazz.json')
      .then(function(res){
        $scope.tazz = res.data;
        console.log($scope.tazz);
      });
  };

  storage.bind($scope,'tazz');
})

.directive('tazz', function() {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: 'tazz/tazz.html'
    };
})