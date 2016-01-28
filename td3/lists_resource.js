angular.module('todos').factory('List', ['$resource', function($resource){
    var url = window.ws+'/lists/:id/'
    return $resource(window.ws+'/lists/:id', {id: '@id'}, {
      update: {method : 'PUT'}
      })
  }]);
