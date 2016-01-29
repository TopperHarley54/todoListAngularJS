window.ws = 'http://37.247.52.168:4400';
window.token = '4cb07129d61e48b5b44a041fe037a6e0';

app = angular.module("todos", ["ngRoute", "ngResource"]);

app.config(['$routeProvider','$httpProvider', function($routeProvider,$httpProvider){

  $httpProvider.defaults.headers.common.Authorization = 'Token token='+window.token;

  $routeProvider.when('/', {template: "<h1>TEST</h1>", controller: 'FirstController' })
  $routeProvider.when('/new', {templateUrl: "views/lists/new.html", controller: 'NewListController' })
  $routeProvider.when('/lists/:id/:id_todo?', {templateUrl: "views/todos/index.html", controller: 'TodosIndexController' })
}]);

app.controller('FirstController', ['$location', 'todolists', 'List', '$scope', '$http', function($location, todolists, List, $scope, $http){

	$scope.lists = List.query(function(r){
		console.log($scope.lists);
	});
  if(todolists.lists.length == 0){
    $location.path('/new');
  }else{
    // console.log(todolists.lists[0]._id.$oid);
    $location.path('/lists/'+todolists.lists[0]._id.$oid);
  }

}]);
