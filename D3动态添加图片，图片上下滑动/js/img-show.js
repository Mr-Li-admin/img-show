$(document).ready(function(){
	var img=[
	{
		"index":0,
		"title":"img-1",
		"src":"images/img-1.jpg"
	},
	{
		"index":1,
		"title":"img-2",
		"src":"images/img-2.jpg"
	},
	{
		"index":2,
		"title":"img-3",
		"src":"images/img-3.jpg"
	},
	{
		"index":3,
		"title":"img-4",
		"src":"images/img-4.jpg"
	},
	{
		"index":4,
		"title":"img-5",
		"src":"images/img-5.jpg"
	}];
	var imgObj=d3.select(".img-show")
				 .append("ul")
				 .attr("class","img-row")
				 .selectAll("li")
				 .data(img)
				 .enter()
				 .append("li")
				 .attr("class","img-col")
				 .append("img")
				 .attr("src",function(d,i){return d.src;});
	var pointObj=d3.select(".img-show")
				 .append("ul")
				 .attr("class","img-point")
				 .selectAll("li")
				 .data(img)
				 .enter()
				 .append("li");
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