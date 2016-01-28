angular.module("todos").controller("NewListController", ['$location', '$scope','$routeParams','List', 'todolists', function($location, $scope,$routeParams,List, todolists){
  $scope.newList = {label:''};

  $scope.createList= function(){
    l = new List({list: $scope.updateList});
    l.$save(function(r){
      console.log($scope);
    });
    console.log(todolists);
    todolists.addlist(l);
  }; 

  $scope.deleteList= function(){
      console.log(todolists.lists);
      var l = new List(todolists.lists);
      console.log($routeParams);
      l.$delete({id:$routeParams['id']});
      angular.forEach(todolists.lists, function(value, key) {
        if(value._id.$oid == $routeParams['id']){     
          console.log(key);
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
