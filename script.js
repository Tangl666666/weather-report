var app=angular.module("weather",[]);


app.controller("myCtrl",function($scope,$http){
    
    var city=encodeURIComponent("上海");
    var appKey="52b2526ccb79f00c50cf5036315fe957";
    var url="http://v.juhe.cn/weather/index?format=2&"+"cityname="+city+"&key="+appKey+"&callback=JSON_CALLBACK";
    //这里用$http.jsonp跨域访问，angularjs跨域访问只要在url后加一个callback回调函数就行，我这里JSON_CALLBACK是原始函数，成功了就调用success函数，也可以自定义函数名，具体可看我浏览器的收藏
    //刚开始怎么都通不过，报错说没有.success函数，angularjs-1.6版本开始删除了.success方法,所以还是回去下了angularjs-1.5.5版本才行。
    $http.jsonp(url).success(function(response){
    	$scope.Date=response.result;
    	$scope.Date.future.shift();
          console.log(response);
    });

});