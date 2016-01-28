angular.module('todos').controller('TodosIndexController', ['$scope', '$routeParams', 'List', 'todolists', 'Todo', function($scope, $routeParams, List, todolists, Todo){
	$scope.list = List.get({id: $routeParams['id']})
	$scope.todos = Todo.query({list_id: $routeParams['id']})	


	$scope.updateList = function(val){
    	console.log(val);
      	angular.forEach(todolists.lists, function(value, key) {
        	if(value._id.$oid == $routeParams['id']){     
          		console.log(todolists.lists[key]);
          		todolists.lists[key].label = val;
        	}
      	});
        List.update({id:$routeParams['id']},{list:$scope.list});

	    //todolists.updatelist();
  	};
}]);