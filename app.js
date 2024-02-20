var app = angular.module("app", ["ngRoute"]);

app.config(function ($routeProvider) {
  $routeProvider
    .when("/", {
      templateUrl: "views/home.html",
      controller: "mainController",
    })
    .when("/second", {
      templateUrl: "views/second.html",
    })
    .when("/third/:num", {
      templateUrl: "views/third.html",
      controller: "thirdController",
    })
    .otherwise({
      redirectTo: "/",
    });
});

// creating a new service
app.service("nameService", function () {
  var self = this;

  this.name = "John Doe";
  this.nameLength = function () {
    return self.name.length;
  };
});

// creating a new directive
app.directive("searchResult", function () {
  return {
    templateUrl: "directives/card.html",
    scope: {
      person: "=",
      alertMethod: "&",
    },
    restrict: "E",
    transclude: true,
  };
});

app.controller("mainController", [
  "$scope",
  "$log",
  "nameService",
  function ($scope, $log, nameService) {
    $scope.nameServiceName = nameService.name;
    $scope.nameServiceNameLength = nameService.nameLength();
    $scope.people = [
      { name: "Jonathan", address: "123 Pinon Way" },
      { name: "Rick", address: "123 Pinon Drive" },
      { name: "Satan", address: "333 Pinon Drive" },
    ];
    $scope.alertSomething = function (text) {
      alert(text);
    };

    // input the name of the scope variable that is being tracked
    $scope.$watch("nameServiceName", function () {
      nameService.name = $scope.nameServiceName;
    });

    $scope.displayServiceStuff = function () {
      $log.info(nameService.name);
    };
  },
]);

app.controller("thirdController", [
  "$scope",
  "$log",
  "$routeParams",
  function ($scope, $log, $routeParams) {
    $log.info($routeParams.num);
    $scope.num = $routeParams.num;
  },
]);
