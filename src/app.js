
// http://remotestorage.io/integrate/add-to-app.html

RemoteStorage.defineModule('favouriteThings', function(privateClient, publicClient) {

  // Define a common data type using JSON Schema
  privateClient.declareType('aFavouriteThing', {
    "description": "a thing",
    "type": "object",
    "properties": {
      "nameOfThing": {
        "type": "string"
      },
      "isFavourite": {
        "type": "boolean"
      }
    }
  });

  return {
    exports: {
      // Add functions for retrieving and manipulating data using
      // methods provided by BaseClient
      addThing: function (name) {
        return privateClient.storeObject('aFavouriteThing', {
          nameOfThing: name,
          isFavourite: true
        });
      }
      // define more functions...
    }
  };
});


RemoteStorage.defineModule('tasks', function(privateClient, publicClient) {

  // Define a common data type using JSON Schema
  privateClient.declareType('task', {
    "description": "a task",
    "type": "object",
    "properties": {
      "id": {
        "type": "string",
        "format": "id"
      },
      "title": {
        "type": "string"
      },
      "completed": {
        "type": "boolean"
      }
    }
  });

  return {
    exports: {
      // Add functions for retrieving and manipulating data using
      // methods provided by BaseClient
      addTask: function (title) {
        var id = new Date().getTime().toString();
        return privateClient.storeObject('task', id, {
          id: id,
          title: title,
          completed: false
        });
      }
      // define more functions...
    }
  };
});



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
