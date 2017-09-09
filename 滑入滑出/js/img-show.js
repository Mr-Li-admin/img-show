$(document).ready(function(){
	var index=0;
	var H=Math.floor($(".img-col").height());
	$(".img-show,.img-row").css("height",H);
	$(".img-col").eq(index).css({
		"display":"block",
	});
	$(".img-point>li").eq(index).addClass("point");
	$(".img-point>li").click(function(){
		clearInterval(moveObj);
		$(".img-col").css({
			"display":"none",
		});
		$(".img-col").eq($(this).index()).css({
			"display":"block",
		});
		$(".img-point>li").removeClass("point");
		$(this).addClass("point");
		index=$(this).index();
		imgChange();
	});
	imgChange();
	function imgChange(){
		moveObj=setInterval(function(){
			$(".img-point>li").removeClass("point");
			$(".img-col").eq(index).slideUp(500);
			index++;
			if(index==$(".img-col").length){
				index=0;
			}
			setTimeout(function(){
				$(".img-col").eq(index).slideDown(800);
			},200);
			$(".img-point>li").eq(index).addClass("point");
		},4000)
	}
	
	

	
	
	
	
});