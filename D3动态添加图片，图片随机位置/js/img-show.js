$(document).ready(function(){
	var img=[
	{
		"index":0,
		"title":"img-1",
		"src":"images/img-1.jpg",
		"left":Math.random()*900,
		"top":Math.random()*450,
	},
	{
		"index":1,
		"title":"img-2",
		"src":"images/img-2.jpg",
		"left":Math.random()*900,
		"top":Math.random()*450,
	},
	{
		"index":2,
		"title":"img-3",
		"src":"images/img-3.jpg",
		"left":Math.random()*900,
		"top":Math.random()*450,
	},
	{
		"index":3,
		"title":"img-4",
		"src":"images/img-4.jpg",
		"left":Math.random()*900,
		"top":Math.random()*450,
	},
	{
		"index":4,
		"title":"img-5",
		"src":"images/img-5.jpg",
		"left":Math.random()*900,
		"top":Math.random()*450,
	}];
	var location=[];
	for(var i=0;i<img.length;i++){
		location[i]={
			"left":Math.random()*900,
			"bottom":Math.random()*250+200,
			"deg":Math.random()*55+5,
			"trun":Math.random()*4,
		}
	}
	var imgObj=d3.select(".img-show")
				 .append("ul")
				 .attr("class","img-row")
				 .selectAll("li")
				 .data(img)
				 .enter()
				 .append("li")
				 .attr("class","img-col")
				 .style("left",function(d,i){return location[i].left+"px";})
				 .style("bottom",function(d,i){return -location[i].bottom+"px";})
				 .style("transform",function(d,i){
				 	if(location[i].trun>=2){
				 		var T=1;
				 	}else{
				 		T=-1
				 	}
				 	return "rotate("+T*location[i].deg+"deg)";
				 })
				 .append("img")
				 .attr("src",function(d,i){return d.src;})
				 .on("mouseover",function(){
				 	var h=25+$(this).next().height();
				 	$(this).next().show().css({
				 		"transform":"translate(0px,-"+h+"px)"
				 	})
				 })
				 .on("mouseout",function(){
				 	$(this).next().hide().css({
				 		"transform":"translate(0px,0px)"
				 	})
				 })
	var intro=d3.selectAll(".img-col")
				.data(img)
				.append("p")
				.attr("class","intro")
				.text(function(d,i){return d.title;})			 
	var pointObj=d3.select(".img-show")
				 .append("ul")
				 .attr("class","img-point")
				 .selectAll("li")
				 .data(img)
				 .enter()
				 .append("li");
	var thisIndex=0;
	var moveObj;
	$(".img-col").eq(thisIndex).css({
		"left":"50%",
		"margin-left":-$("img").width()/2,
		"bottom":"-580px",
		"transform":"rotate(0deg)",
		"z-index":"10"
	})
	$(".img-point>li").eq(thisIndex).addClass("point");
	$(".img-point>li").click(function(){
		clearInterval(moveObj);
		thisIndex=$(this).index();
		for(var i=0;i<img.length;i++){
			location[i]={
				"left":Math.random()*900,
				"bottom":Math.random()*250+200,
				"deg":Math.random()*55+5,
				"trun":Math.random()*4,
			}
		}
		for(i=0;i<img.length;i++){
			if(location[i].trun>=2){
		 		T=1;
		 	}else{
		 		T=-1
		 	}
			$(".img-col").eq(i).css({
				"left":location[i].left,
				"bottom":-location[i].bottom,
				"transform":"rotate("+T*location[i].deg+"deg)",
				"z-index":"-1",
				"transition":"all 0.5s"
			})
		}
		$(".img-col").eq(thisIndex).css({
			"left":"50%",
			"margin-left":-$("img").width()/2,
			"bottom":"-580px",
			"transform":"rotate(0deg)",
			"z-index":"10",
			"transition":"all 0.5s"
		})
		$(".img-point>li").removeClass("point");
		$(".img-point>li").eq(thisIndex).addClass("point");
		imgChange();
	});
	imgChange();
	function imgChange(){
		moveObj=setInterval(function(){
			thisIndex++;
			if(thisIndex==$(".img-col").length){
				thisIndex=0;
			}
			for(var i=0;i<img.length;i++){
				location[i]={
					"left":Math.random()*900,
					"bottom":Math.random()*250+200,
					"deg":Math.random()*55+5,
					"trun":Math.random()*4,
				}
			}
			for(i=0;i<img.length;i++){
				if(location[i].trun>=2){
			 		T=1;
			 	}else{
			 		T=-1
			 	}
				$(".img-col").eq(i).css({
					"left":location[i].left,
					"bottom":-location[i].bottom,
					"transform":"rotate("+T*location[i].deg+"deg)",
					"z-index":"-1",
					"transition":"all 0.5s"
				})
			}
			$(".img-col").eq(thisIndex).css({
				"left":"50%",
				"margin-left":-$("img").width()/2,
				"bottom":"-580px",
				"transform":"rotate(0deg)",
				"z-index":"10",
				"transition":"all 0.5s"
			})
			$(".img-point>li").removeClass("point");
			$(".img-point>li").eq(thisIndex).addClass("point");
		},4000)
	}

	
	
	

	
	
	
	
});