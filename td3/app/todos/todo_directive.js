angular.module('todos').directive('ngComment', function factory() { 
	return {
		restrict: 'E',
		templateUrl: "views/todos/affichage_todo.html"
	}
});