angular.module('todos').directive('ngComment', function factory() { 
	return {
		restrict: 'E',
		templateUrl: "affichage_todo.html"
	}
});