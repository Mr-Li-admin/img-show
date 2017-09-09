$(document).ready(function(){
	var index=1;
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
	$(".img-col").eq(0).css({
		"transform":"translate("+(-w)+"px,"+Math.floor((-index*H))+"px)",
		"transition":"all 2s"
	});
	$(".img-col").eq(index).css({
		"transform":"translate(0px,"+Math.floor((-index*H))+"px)",
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
		for(var i=0;i<$(".img-col").length;i++){
			h=Math.floor(-i*H);
			$(".img-col").eq(i).css({
				"transform":"translate("+w+"px,"+h+"px)",
			});
		}
		if(thisIndex-1==-1){
			$(".img-col").eq(thisIndex-1).css({
				"transform":"translate("+(-w)+"px,"+Math.floor(-($(".img-col").length-1)*H)+"px)",
				"transition":"all 2s"
			});
		}else{
			$(".img-col").eq(thisIndex-1).css({
				"transform":"translate("+(-w)+"px,"+Math.floor((-(thisIndex-1)*H))+"px)",
				"transition":"all 2s"
			});
		}
		$(".img-col").eq(thisIndex).css({
			"transform":"translate(0px,"+Math.floor((-thisIndex*H))+"px)",
		});
		index=thisIndex;
		imgMove();
	});
	$(".next-right").click(function(){
		clearInterval(moveObj);
		$(".img-col").css({
			"transition":"all 0s"
		});
		$(".img-col").eq(index).css({
			"transform":"translate("+(-w)+"px,"+Math.floor((-index*H))+"px)"
		});
		if(index-1==-1){
			$(".img-col").eq(index-1).css({
				"transform":"translate("+w+"px,"+Math.floor((-($(".img-col").length-1)*H))+"px)",
				"transition":"all 0s"
			});
		}else{
			$(".img-col").eq(index-1).css({
				"transform":"translate("+w+"px,"+Math.floor((-(index-1)*H))+"px)",
				"transition":"all 0s"
			});
		}
		index+=1;
		if(index==$(".img-col").length){
			index=0
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
		$(".img-col").css({
			"transition":"all 0s"
		});
		$(".img-col").eq(index).css({
			"transform":"translate("+w+"px,"+Math.floor((-index*H))+"px)"
		});
		index-=1;
		if(index==-1){
			index=4;
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
			$(".img-col").eq(index).css({
				"transform":"translate("+(-w)+"px,"+Math.floor((-index*H))+"px)",
				"transition":"all 2s"
			});
			if(index-1==-1){
				$(".img-col").eq(index-1).css({
					"transform":"translate("+w+"px,"+Math.floor((-($(".img-col").length-1)*H))+"px)",
					"transition":"all 0s"
				});
			}else{
				$(".img-col").eq(index-1).css({
					"transform":"translate("+w+"px,"+Math.floor((-(index-1)*H))+"px)",
					"transition":"all 0s"
				});
			}
			
			if(index==$(".img-col").length-1){
				index=-1;
			}
			index++;
			$(".img-point>li").eq(index).addClass("point");
			$(".img-col").eq(index).css({
				"transform":"translate(0px,"+Math.floor((-index*H))+"px)",
				"transition":"all 2s"
			});
		},3000);
	}
});