#angular-pagination


### 关于
* 基于angular 编写的可复用分页指令



### 安装
```
克隆项目到本地
git clone https://github.com/febobo/angular-pagination.git

要跑demo环境要求
node , bower , npm , gulp

安装
npm install && bower install

运行
gulp serve

```

### 使用
#### demo用法
#### html
```
<body ng-app="demo" ng-controller="demoCtro" class="row text-center">
    <div ui-pagination conf="conf"></div>
  </body>

```

#### js
```
var app = angular.module('demo' , ['pagination']);

  app.controller('demoCtro' , function($scope){

      $scope.title = 'pagination-directive';

      $scope.conf = {

        // 总条数
        total : 1190,

        // 当前页
        currentPage : 1,

        // 一页展示多少条
        itemPageLimit : 1,

        // 是否显示一页选择多少条
        isSelectPage : false,

        // 是否显示快速跳转
        isLinkPage : false
      }

      // 监控你的页码 ， 发生改变既请求
      $scope.$watch('conf.currentPage + conf.itemPageLimit' , function(news){
         // 把你的http请求放到这里
         console.log($scope.conf.currentPage , $scope.conf.itemPageLimit)
      })
  })

```
#### Q&A
@febobo

