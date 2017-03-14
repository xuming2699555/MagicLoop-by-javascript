describe('Ctrl_4', function(){


	//导入模块
	beforeEach(module("myApp"));

	var theCtrl,$scope,num=0,plus=0;

	//注入
	beforeEach(inject(function($controller){
		theCtrl = $controller;
	}))

	describe("delete",function(){
		it("should delete resource",function(){
			var $scope={};
			var controller = theCtrl("ctrl_4",{$scope:$scope});
			
			$scope.data.forEach(function(e){
				$scope.deleteRes(e.name,"ubuntu");
				num = num + e.resources.indexOf("ubuntu")		
			});
			expect(num).toBe(-4);
		})
	})

	describe("add",function(){
		it("should add new resource",function(){
			var $scope={};
			var controller = theCtrl("ctrl_4",{$scope:$scope});
			$scope.data.forEach(function(e){
				$scope.tar=e.name;
				var res = "app";
				$scope.addRes(res);
				if (e.resources.indexOf(res)) {
					plus++;
				}
			})
		})
	})
});
