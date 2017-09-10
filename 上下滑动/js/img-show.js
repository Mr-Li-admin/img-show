$(document).ready(function(){
	var index=0;
	var move=1;
	var moveObj;
	var H=$(".img-col").height();
	$(".img-show").css("height",H);
	$(".img-point>li").eq(index).addClass("point");


	$(".img-point>li").click(function(){
		clearInterval(moveObj);
		$(".img-point>li").removeClass("point");
		$(this).addClass("point");
		index=$(this).index();
		$(".img-row").css({
			"transform":"translate(0px,"+(-index*H)+"px)",
			"transition":"all 0s"
		});
		imgChange();
	});
	imgChange();
	function imgChange(){
		moveObj=setInterval(function(){
			$(".img-point>li").removeClass("point");
			$(".img-point>li").eq(index).addClass("point");
			$(".img-row").css({
				"transform":"translate(0px,"+(-index*H)+"px)",
				"transition":"all 2s"
			})
			index+=move;
			if(index==$(".img-col").length-1){
				move=-1;
			}
			if(index==0){
				move=1;
			}
		},3500)
	}
	
	

	
	
	
	
});