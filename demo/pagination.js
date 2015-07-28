(function(){

  var pagination = angular.module('pagination' , []);

  pagination.directive('uiPagination', function() {
    return {
      restrict : 'EA',
      templateUrl : 'pagination.html',
      replace : true,
      scope : {
        conf : '='
      },
      link : function(scope , ele , attrs){

        var page = scope.page = {};
        var conf = scope.conf ;

        // 初始化一页展示多少条  默认为10
        conf.pageLimit = [10 , 15 , 20 , 30 ,50];

        if(!conf.itemPageLimit ){
          conf.itemPageLimit = conf.pageLimit[0];
        }else{
          // 把自定义的条目加入到pagelimit中
          if(conf.pageLimit.indexOf(conf.itemPageLimit)){
            conf.pageLimit.push(conf.itemPageLimit);
            conf.pageLimit = conf.pageLimit.sort(function(a ,b ){ return a - b; })
          };
        }

        // 分页数组
        scope.pageList = [];
        scope.pageListFn = function(){

          // 一共多少页
          page.limit = Math.floor(conf.total / conf.itemPageLimit) ;

          // 最多展示多少可见页码 默认为10
          page.defaultLimit = conf.defaultLimit ? conf.defaultLimit : 10 ;

          // 三种打点方式 ， 中间打点， 左边打点， 后边打点
          if(page.limit <  page.defaultLimit ){
            for(var i=1; i< page.limit ; i++){
              scope.pageList.push(i);
            }
          }else{
            if(conf.currentPage < 4){
              for(var i=1 ; i<5 ; i++){
                scope.pageList.push(i);
              }
              scope.pageList.push('...' , page.limit );
            }else if(conf.currentPage >= page.limit - 3){
              for(var i= page.limit - 4 ; i< page.limit  ; i++){
                scope.pageList.push(i);
              }
              scope.pageList.unshift(1 , '...');
            }else{
              for(var i= conf.currentPage -2 ; i< conf.currentPage + 2 ; i++){
                scope.pageList.push(i);
              }
              scope.pageList.push('...' , page.limit );
              scope.pageList.unshift(1 , '...');
            }
          }
        }
        scope.pageListFn();

        // 点击页码
        scope.changePage = function(page){
          if(page == '...') return ;
          conf.currentPage = page ;
        }

        // 上一页
        scope.prevPage = function(){
          if(conf.currentPage <= 1) return ;
          conf.currentPage -= 1;
        }

        // 下一页
        scope.nextPage = function(){
          if(conf.currentPage >= page.limit ) return ;
          conf.currentPage += 1;
        }

        // 改变一页显示条目
        scope.selectPage = function(){
        }

        // 跳转页
        scope.linkPage = function(){
          if(!conf.linkPage) return ;
          conf.linkPage = conf.linkPage.replace(/[^0-9]/ , '');
          if(conf.linkPage == 0 || conf.linkPage > page.limit){
             conf.linkPage = page.limit ;
          }
          conf.currentPage = conf.linkPage ;
        }


      }
    }
  });

})()
