//固定两列等高
$(function(){
	$("._left")[0].height = $("._sider")[0].height;
	if ($(window).width()>992){
		$("#collapse").css("display","block");
		$("#colbtn").css("display","none")
		$(".pager").css("display","block");
		$("._shit").css("display","none");
	}else{
		$("#collapse").css("display","none");
		$("#colbtn").css("display","block");
		if ($(window).width()<768) {
			$("._shit").css("display","block");
			$(".pager").css("display","none");
		}else{
			$(".pager").css("display","block");
			$("._shit").css("display","none");
		}
	}

//小设备激活折叠插件

	$(window).resize(function(){
		if ($(window).width()>992){
			$("#collapse").css("display","block");
			$("#colbtn").css("display","none");
			$(".pager").css("display","block");
			$("._shit").css("display","none")
		}else{
			$("#collapse").css("display","none");
			$("#colbtn").css("display","block");
			if ($(window).width()<768) {
				$(".pager").css("display","none");
				$("._shit").css("display","block")
			}else{
				$(".pager").css("display","block");
				$("._shit").css("display","none")
			}
		}
	})
})