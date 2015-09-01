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


      $scope.step = "introduction";
      $scope.switchForm = function(stage){
        console.log(stage);
        $scope.step = stage;
      };


    });