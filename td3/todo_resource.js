//done: {url: url+'/done', method: 'PUT'},

angular.module('todos').factory('Todo', ['$resource', function($resource){

	var url = window.ws+'/lists/:list_id/todos/:id';
	return $resource(url, {list_id: '@list_id', id: '@id'}, {
			update: {method: 'PUT'},
			done: {method: 'PUT', url: url+'/done'},
			undone: {method: 'PUT', url: url+'/undone'}
	});
}]);
