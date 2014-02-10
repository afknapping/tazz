// this is our main app. You can only have one single app per page. We're using two modules which are not part of the core: ngAnimate, which handles transitions, and angularLocalStorage, wich is an external lib to synch the scope to the local storage
var tazz = angular.module('tazz', ['angularLocalStorage', 'ngAnimate']);

// while there can only be one app, we can define as many controllers as we want. look for an element in the markup with the attribute ng-controller="AppCtrl".
// we need $http to load a json file from which we seed our scope data. storage is for localStorage
tazz.controller('AppCtrl', function ($scope, $http, storage) { 

  // create generic data object
  $scope.data = {};

  // load data from json file
  // look for element with attribute ng-click="getAppData()"
  $scope.getAppData = function() {
    $http.get('data/data.json')
      .then(function(res){
        // and put into data object
        $scope.data = res.data;
      });
  };

  // there is also a download function. we cannot control the name of the file, this is more of a dump so we can create new initial states from data we edited in the browser. 
  $scope.downladAppData = function (){
    // first the object needs to be converted into a string
    dataString = JSON.stringify($scope.data);
    // creating the URI content from the string which can be openend as an adress
    uriContent = "data:application/octet-stream," + encodeURIComponent(dataString);
    // point browser to URI, thus invoke download
    location.href = uriContent;
  };

  // syncs $scope.data to the localStorage. magic.
  storage.bind($scope,'data');

  // functions to add and delete things to list
  $scope.data.addNewThing = function(newThing) {
    $scope.data.myFavouriteThings.push(newThing);
  };
  $scope.data.deleteThing = function(thing) {
    $scope.data.myFavouriteThings.splice(thing, 1);
  };

})

// creating our custom element. restrict E means we can only use it with element syntax.
.directive('app', function() {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: 'app.html'
    };
})
