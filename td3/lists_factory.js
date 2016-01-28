angular.module("todos").factory("todolists", ['List', 'Todo', function(List, Todo){
  var todolists = {
    lists: [],
  };

  todolists.lists = List.query();
  
  todolists.addlist = function(list){
    this.lists.push(list);
  };

  todolists.deletelist = function(){
    this.lists = [];
  }

  todolists.updatelist = function(id,list){
    this.lists[id] = list;
  }

  return todolists;
}]);