// var app = angular.module('myApp', ['ngRoute', 'ui.bootstrap']);
// var app = angular.module('myApp', ['ui.bootstrap']);
var app = angular.module('myApp', []);
      /*app.config(function($routeProvider, $locationProvider) {
        $locationProvider.html5Mode(true);
        $routeProvider
          .when({})
          .otherwise({});
      });*/
    // app.controller('registrationController', ['$scope', function registrationController($scope) {
    app.controller('registrationController', function($scope) {
      /* group names comming from user data
      $scope.userData = {
        "groups" : [
          {
            "name" : "Admin Group",
            "selected" : false
          }, {
            "name" : "UAE Group",
            "selected" : true
          }, {
            "name" : "UK Group",
            "selected" : true
          }, {
            "name" : "Malasia Group",
            "selected" : true
          }, {
            "name" : "America Group",
            "selected" : false
          }, {
            "name" : "Bahrain Group",
            "selected" : true
          }, {
            "name" : "Yemen Group",
            "selected" : true
          }, {
            "name" : "Qatar Group",
            "selected" : true
          }, {
            "name" : "Oman Group",
            "selected" : true
          }
        ]
      };*/
      $scope.userData = {
        "groups" : []
      };
      $scope.groups = ["Admin Group", "UAE Group", "UK Group", "Malasia Group", "America Group", "Bahrain Group", "Yemen Group", "Qatar Group", "Oman Group"];
      // toggle selection for a given fruit by name
      $scope.toggleSelection = function (groupName) {
        var idx = $scope.userData.groups.indexOf(groupName);
        // is currently selected
        if (idx > -1) {
          $scope.userData.groups.splice(idx, 1);
        }
        // is newly selected
        else {
          $scope.userData.groups.push(groupName);
        }
      };
    });