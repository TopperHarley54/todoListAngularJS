angular.module('todos').controller('TodosIndexController', ['$scope', '$routeParams', 'List', 'todolists', 'Todo', function($scope, $routeParams, List, todolists, Todo){
	$scope.list = List.get({id: $routeParams['id']})
	$scope.todos = Todo.query({list_id: $routeParams['id']})	

  $scope.updateTodo = function(val,id_todo){
    angular.forEach($scope.todos, function(value, key) {
      if(value._id.$oid == $routeParams['id']){  
        todolists.lists[key].label = val;
      }
    });
    Todo.update({list_id:$routeParams['id'], id:id_todo}, {todo: {text: val}});
    console.log("OK");
  }

	$scope.updateList = function(val){
    angular.forEach(todolists.lists, function(value, key) {
      if(value._id.$oid == $routeParams['id']){  
        todolists.lists[key].label = val;
      }
    });
    List.update({id:$routeParams['id']},{list:$scope.list});
  };

  $scope.createTodo = function(){
    t = new Todo($scope.Todo);
    t.$save({list_id:$routeParams['id']});
    $scope.todos.push(t);
  }

  $scope.deleteTodo = function(id_todo){
    t = new Todo($scope.Todo);
    t.$delete({list_id:$routeParams['id'], id:id_todo});
    angular.forEach($scope.todos, function(value, key) {
      console.log("test");
      if(value._id.$oid == id_todo){
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

  $scope.change = function(state, id_todo){
    t = new Todo($scope.Todo);
    if(state == 0)
    {
      t.$done({list_id:$routeParams['id'], id:id_todo});  
      $scope.todos.done = true;
    }else{
      t.$undone({list_id:$routeParams['id'], id:id_todo});         
      $scope.todos.done = false;
    }
  }

}]);