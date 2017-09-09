$(document).ready(function(){
	var index=0;
	var H=Math.floor($(".img-col").height());
	var w=Math.floor($("img").width());
	var move;
	var direction;
	var moveObj;
	$(".img-show,.img-row").css("height",H);
	for(var i=0;i<$(".img-col").length;i++){
		h=Math.floor(-i*H);
		$(".img-col").eq(i).css({
			"transform":"translate("+w+"px,"+h+"px)",
		});
	}
	$(".img-col").eq(index).css({
		"transform":"translate(0px,"+Math.floor((-index*H))+"px)"
	});
	$(".img-point>li").eq(index).addClass("point");
	imgMove();

	$(".img-point>li").click(function(){
		clearInterval(moveObj);
		var thisIndex=$(this).index();
		$(".img-point>li").removeClass("point");
		$(this).addClass("point");
		$(".img-col").css({
			"transition":"all 0s"
		});
		if(thisIndex>index){
			move=-w;
			for(var i=index;i<thisIndex;i++){
				$(".img-col").eq(i).css({
					"transform":"translate("+move+"px,"+Math.floor((-i*H))+"px)"
				});
			}
			index=thisIndex;
		}
		if(thisIndex<index){
			move=w;
			for(var i=index;i>thisIndex;i--){
				$(".img-col").eq(i).css({
					"transform":"translate("+move+"px,"+Math.floor((-i*H))+"px)"
				});
			}
			index=thisIndex;
		}
		$(".img-col").eq(index).css({
			"transform":"translate(0px,"+Math.floor((-index*H))+"px)"
		});
		imgMove();
	});
	$(".next-right").click(function(){
		clearInterval(moveObj);
		var Index=$(this).index();
		move=-w;
		$(".img-col").css({
			"transition":"all 0s"
		});
		$(".img-col").eq(index).css({
			"transform":"translate("+move+"px,"+Math.floor((-index*H))+"px)"
		});
		index+=1;
		if(index==$(".img-col").length){
			index=$(".img-col").length-1
		}
		$(".img-col").eq(index).css({
			"transform":"translate(0px,"+Math.floor((-index*H))+"px)"
		});
		$(".img-point>li").removeClass("point");
		$(".img-point>li").eq(index).addClass("point");
		imgMove();
	});
	$(".next-left").click(function(){
		clearInterval(moveObj);
		var Index=$(this).index();
		move=w;
		$(".img-col").css({
			"transition":"all 0s"
		});
		$(".img-col").eq(index).css({
			"transform":"translate("+move+"px,"+Math.floor((-index*H))+"px)"
		});
		index-=1;
		if(index==-1){
			index=0;
		}
		$(".img-col").eq(index).css({
			"transform":"translate(0px,"+Math.floor((-index*H))+"px)"
		});
		$(".img-point>li").removeClass("point");
		$(".img-point>li").eq(index).addClass("point");
		imgMove();
	});
	function imgMove(){
		moveObj=setInterval(function(){
			$(".img-point>li").removeClass("point");
			if(index==$(".img-col").length-1){
				direction=-1;
				move=w;
			}
			if(index==0){
				direction=1;
				move=-w;
			}
			$(".img-col").eq(index).css({
				"transform":"translate("+move+"px,"+Math.floor((-index*H))+"px)",
				"transition":"all 2s"
			});
			index+=direction;
			$(".img-point>li").eq(index).addClass("point");
			$(".img-col").eq(index).css({
				"transform":"translate(0px,"+Math.floor((-index*H))+"px)",
				"transition":"all 2s"
			});
		},3000);
	}
});