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
  };

  $scope.createTodo = function(){
    console.log($scope.Todo);
    t = new Todo($scope.Todo);
    t.$save({list_id:$routeParams['id']});
    $scope.todos.push(t);
  }

  $scope.deleteTodo = function(){
      t = new Todo($scope.Todo);
      t.$delete({list_id:$routeParams['id'], id:$routeParams['id_todo']});
      console.log($scope.todos);

      angular.forEach($scope.todos, function(value, key) {
        if(value._id.$oid == $routeParams['id_todo']){
          $scope.todos.splice(key,1);
        }
      });
  }

  $scope.deleteList= function(){
      var l = new List(todolists.lists);
      l.$delete({id:$routeParams['id']});
      angular.forEach(todolists.lists, function(value, key) {
        if(value._id.$oid == $routeParams['id']){
          todolists.lists.splice(key,1);
        }
      });

      if(todolists.lists.length == 0){
        $location.path('/new');
      }else{
        $location.path('/lists/'+todolists.lists[0]._id.$oid);
      }
  };

}]);