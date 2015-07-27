(function(){

  var pagination = angular.module('pagination' , []);
  pagination.factory('pagination' , function(){
    return 'pagination';
  })
  pagination.directive('uiPagination', function() {
    return {
      restrict : 'EA',
      templateUrl : 'pagination.html',
      replace : true,
      require : '?ngModel',
      scope : {
        conf : '='
      },
      link : function(scope , ele , attrs){
        console.log(scope.conf)
        scope.pageList = [];
        scope.pageListFn = function(){
          for(var i=1; i<8; i++){
            scope.pageList.push(i);
          }
        }
        scope.pageListFn();
      }
    }
   });

})()
