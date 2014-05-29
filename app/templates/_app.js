'use strict';


// Declare app level module which depends on filters, and services
angular.module('cmApp', [
  'ngRoute',
  'cmApp.filters',
  'cmApp.services',
  'cmApp.directives',
  'cmApp.controllers',
  'cmApp.dataservices'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {templateUrl: 'partials/partial1.html', controller: 'SimpleTaskListCtrl'});
  $routeProvider.when('/view2', {templateUrl: 'partials/partial2.html', controller: 'GridTaskListCtrl'});
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
