
var myApp = angular.module('myApp', ['ngAnimate']);
 
myApp.controller('MyCtrl', function ($scope, $http) {

  $http.get('/data/data.json')
       .then(function(res){
          $scope.data = res.data;
        });

  $scope.planet = 'world';
  $scope.request = 'wurst';
  
  $scope.destinations = [
    {
      title: 'Germaeeny'
    },
    {
      title: 'Poland',
      isActive: true
    }
  ];

})
.directive('fabian', function() {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: 'fabian.html'
    };
})



.directive('destinationContainer', function () {
  return {
    restrict:'E',
    controller: function ($scope, $attrs) {

  // This array keeps track of the accordion groups
  this.groups = [];

  // Ensure that all the groups in this accordion are closed, unless close-others explicitly says not to
  this.closeOthers = function(openGroup) {
    var closeOthers = angular.isDefined($attrs.closeOthers) ? $scope.$eval($attrs.closeOthers) : true;
    

    if ( closeOthers ) {
      angular.forEach(this.groups, function (group) {
        if ( group !== openGroup ) {
          group.isOpen = false;
        }
      });
    }
  };


  // This is called from the accordion-group directive to add itself to the accordion
  this.addGroup = function(groupScope) {
    var that = this;
    this.groups.push(groupScope);

    groupScope.$on('$destroy', function (event) {
      that.removeGroup(groupScope);
    });
  };

  // This is called from the accordion-group directive when to remove itself
  this.removeGroup = function(group) {
    var index = this.groups.indexOf(group);
    if ( index !== -1 ) {
      this.groups.splice(index, 1);
    }
  };

},
    transclude: true,
    replace: false,
    template: '<div class="panel-group" ng-transclude></div>'
  };
})
.directive('destination', function() {
  return {
    require:'^destinationContainer',         // We need this directive to be inside an accordion
    restrict:'E',
    transclude:true,              // It transcludes the contents of the directive into the template
    replace: true,                // The element containing the directive will be replaced with the template
    templateUrl: 'destination.html',
    scope: {
      heading: '@',               // Interpolate the heading attribute onto this scope
      isOpen: '=?',
      isDisabled: '=?',
      destination: '='
    },
    controller: function() {
      this.setHeading = function(element) {
        this.heading = element;
      };
    },
    link: function(scope, element, attrs, accordionCtrl) {
      accordionCtrl.addGroup(scope);

      scope.$watch('isOpen', function(value) {
        if ( value ) {
          accordionCtrl.closeOthers(scope);
        }
      });

      scope.toggleOpen = function() {
        if ( !scope.isDisabled ) {
          scope.isOpen = !scope.isOpen;
        }
      };
    }
  };
})

