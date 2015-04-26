var myApp = angular.module('darkLabs',[]);

myApp.controller('MainCtrl', ['$scope', function($scope) {
  $scope.greeting = 'Hola!';
}]);