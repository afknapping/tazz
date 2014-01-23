var myApp = angular.module('myApp', []);
 
myApp.controller('MyCtrl', function ($scope, $http) {
  $scope.planet = 'world';
  $scope.request = 'wurst';
  $scope.daCall = function() {
    $http({
        url: '/data.json',
        method: "GET"
        })

          .success(
                function (data, status, headers, config) {
                $scope.request = data;
                console.log($scope.request);
            }
            );

  };


});
