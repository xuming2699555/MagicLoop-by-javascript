var App = angular.module("myApp",[]);

App.controller("ctrl_1",function($scope,$rootScope){
	$scope.role="Member";

	$scope.signout = function(){
		alert("Maybe some text!");
	};
});

App.controller("ctrl_2",function($scope,$rootScope){
	//用数组绑定四个标签的样式
	$scope.labelon = ["","","on",""];

	$scope.label = function(index){
		$scope.labelon = ["","","",""];
		$scope.labelon[index] = "on";
	}

	$scope.myCollapse = function(){
		if ($("#collapse").css("display")==="none") {
			$("#collapse").css("display","block");
		}else{
			$("#collapse").css("display","none");
		}
		
	}
})

App.controller("ctrl_3",function($scope,$rootScope){
	$scope.labelon = ["","on",""];

	$scope.label = function(index){
		$scope.labelon = ["","",""];
		$scope.labelon[index] = "on";
		if (index===0) {$rootScope.myfilter=""}
			else if (index===1) {$rootScope.myfilter="physical"}
				else{$rootScope.myfilter="virtual"}
	}

	$scope.shit = function(){
		if ($(".pager").css("display")==="none") {
			$(".pager").css("display","block");
		}else{
			$(".pager").css("display","none");
		}
	}
})

App.controller("ctrl_4",function($scope,$rootScope){
	$scope.data = [
	{
		name:"bjstmngbgr02.thoughtworks.com",
		type:"idle",
		ip:"192.168.1.2",
		src:"/var/lib/cruise-agent",
		resources:["ubuntu","firefox3","coreduo"],
		filter:"physical"
	},
	{
		name:"bjstmngbgr03.thoughtworks.com",
		type:"building",
		ip:"192.168.1.3",
		src:"/var/lib/cruise-agent",
		resources:["ubuntu","firefox3","mysql","coreduo"],
		filter:"physical"
	},
	{
		name:"bjstmngbgr04.thoughtworks.com",
		type:"building",
		ip:"192.168.1.4",
		src:"/var/lib/cruise-agent",
		resources:["ubuntu","firefox3","mysql","coreduo"],
		filter:"physical"
	},
	{
		name:"bjstmngbgr05.thoughtworks.com",
		type:"idle",
		ip:"192.168.1.5",
		src:"/var/lib/cruise-agent",
		resources:[],
		filter:"physical"
	}]

	//处理数据，计算所需的求和数值
	function sum(id){
		var count = 0;
		$scope.data.forEach(function(e){
			if (e.type===id) {
				count++;
			}
		})
		return count;		
	}
	$scope.building = sum("building");
	$scope.idle = sum("idle");

	//生成输入表单
	//获取DOM元素坐标
	$scope.add = function(e,name){
		//生成输入框
		//获取元素坐标;
		$scope.tar = name;
		var rect = e.target.getBoundingClientRect();
		var height = rect.bottom-rect.top;
		var top = rect.top + height - 150 +"px"
		var left = rect.left + "px"
		$("._form")[0].style.top= top;
		$("._form")[0].style.left= left;
		$scope.ifForm = true;
	}

	$scope.tar = "";
	//关闭弹框
	$rootScope.removeForm = function(){
		$scope.ifForm = false;
	}

	//删除引用
	$scope.deleteRes = function(name,item){
		$scope.data.forEach(function(e){
			if (e.name===name) {
				e.resources.splice(e.resources.indexOf(item),1)
			}
		})
	}

	//添加引用
	$scope.addRes = function(res){
		$scope.data.forEach(function(e){
			if ($scope.tar === e.name) {
				if (e.resources.indexOf(res) !== -1) {
					alert("重复！")
					return
				}else{
					e.resources.push(res);
					$scope.close();
					return
				}
			}
		})
	}

	$scope.close = function(){
		if ($("._box form")[0]) {
			$("._box form")[0].reset();
			$scope.removeForm();
		}
		
	}
});
