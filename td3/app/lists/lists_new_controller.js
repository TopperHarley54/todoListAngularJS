angular.module("todos").controller("NewListController", ['$location', '$scope','$routeParams','List', 'todolists', function($location, $scope,$routeParams,List, todolists){
  $scope.newList = {label:''};

  $scope.createList= function(){
    l = new List({list: $scope.newList});
    l.$save(function(r){
    });
    todolists.addlist(l);
  };

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

//
// function(r){
//   $location.path('/lists/'+$routeParams['id']);}
