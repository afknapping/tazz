


var tazz = angular.module('tazz', ['angularLocalStorage', 'ngAnimate']);

tazz.controller('AppCtrl', function ($scope, $http, storage) { 

  $scope.data = {};
  $scope.getAppData = function() {
    $http.get('data/data.json')
      .then(function(res){
        $scope.data = res.data;
        console.log('yo');
      });
  };

  $scope.downladAppData = function (){
    dataString = JSON.stringify($scope.data);
    uriContent = "data:application/octet-stream," + encodeURIComponent(dataString);
    location.href = uriContent;
  };

  storage.bind($scope,'data');

  $scope.data.addNewThing = function(newThing) {
    console.log(newThing);
    $scope.data.myFavouriteThings.push(newThing);
  };
  
  $scope.data.deleteThing = function(thing) {
    console.log(thing);
    $scope.data.myFavouriteThings.splice(thing, 1);
  };

})

.directive('app', function() {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: 'app.html'
    };
})
