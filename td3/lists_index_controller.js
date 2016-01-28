angular.module('todos').controller('ListsIndexController', ['$scope', 'todolists', '$location', function($scope, todolists, $location){
	$scope.todolists = todolists.lists;

	$scope.show = function(l){
		$location.path('/lists/'+l._id.$oid);
	};

}]);
