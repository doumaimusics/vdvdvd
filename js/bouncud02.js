$(function() {
	$(".topbanner-video .bg-img").click(function() {
		$(".zhezhao-Login").css("display", "block");
		$(".login").css("display", "block");
		$(".login .close").css("display", "block")
	})
	$(".zhezhao-Login").click(function() {
		$(this).css("display", "none");
		$(".login").css("display", "none");
		$(".login .close").css("display", "none")

	})

	$(".login .close").click(function() {
		$(this).css("display", "none");
		$(".login").css("display", "none");
		$(".zhezhao-Login").css("display", "none")
	})
})

//capabilities-two.html Map的area属性标签鼠标Hoverjs
//js:
$(function() {
	$("#wechat-fw-01 area").mouseover(function() {
		var area_index = $(this).index();
		$(".img-bg").eq(area_index).show();
	})
	$("#wechat-fw-01 area").mouseout(function() {
		var area_index = $(this).index();
		$(".img-bg").eq(area_index).hide();
	})
	$("#wechat-fw-01 area").click(function() {
		var index = $(this).index();
		$(".Capacity").eq(index).show();
		$("body .mask").show();
		$("body .close").show();
	})

	$("body .mask").click(function() {
		$(this).hide();
		$("body .close").hide();
		$(".Capacity").hide();
		$(".Quickturnnew").hide();
		$(".capablisnew").hide();
		$(".box-si").hide();


	})

	$("body .close").click(function() {
		$(this).hide();
		$("body .mask").hide();
		$(".Capacity").hide();
		$(".Quickturnnew").hide();
		$(".capablisnew").hide();
		$(".box-si").hide();


	})
	$(".table-box td").click(function() {
		var index = $(this).index();
		var trIndex = $(this).parents('tr').index();
//	    console.log(trIndex*5+index)
		$(".Capacity").eq(trIndex*5+index).show();
		$("body .mask").show();
		$("body .close").show();
	})
})


//Quickturnnew-fast-pcbs-two.html页面中间图片JS
$(function(){
	$(".center-right .brick-list .brick-item").hover(function(){
		$(".brick-item .floor_mask").removeClass("bian");

	})
	$(".center-right .brick-list .brick-item").mouseover(function(){
		$(this).find(".floor_mask").addClass("bian");
	})


	$(".brick-list li").click(function() {
		var index = $(this).index();
		my1.confirms(index);
		$(".Quickturnnew").show();
		$("body .mask").show();
		$("body .close").show();
	})
	$(".brick-list li").click(function() {
		var index = $(this).index();
		
		my2.confirms(index);
		$(".capablisnew").show();
		$("body .mask").show();
		$("body .close").show();
	})
	$(".brick-list li").click(function() {
		var index = $(this).index();
//		console.log(index)
		my3.confirms(index);
		$(".box-si").show();
		$("body .mask").show();
		$("body .close").show();
	})
})

var my1= {
	confirms: function(index) {
		var imglCons = [
			{src: "images/assembly/pcba_product01b.jpg"},
			{src: "images/assembly/pcba_product02b.jpg"},
			{src: "images/assembly/pcba_product03b.jpg"},
			{src: "images/assembly/pcba_product04b.jpg"},
			{src: "images/assembly/pcba_product05b.jpg"},
			{src: "images/assembly/pcba_product06b.jpg"},
			{src: "images/assembly/pcba_product07b.jpg"},
			{src: "images/assembly/pcba_product08b.jpg"},
			{src: "images/assembly/pcba_product09b.jpg"},
			{src: "images/assembly/pcba_product10b.jpg"},
			{src: "images/assembly/pcba_product11b.jpg"},
			{src: "images/assembly/pcba_product12b.jpg"},
			{src: ""},
			{src: ""},
			{src: ""},
			{src: ""},
			{src: ""},
			{src: ""},
			{src: ""},
			{src: ""},
			{src: ""},
			{src: ""},
			{src: ""},
			{src: ""}
			
			
			
		];
		var confirmsHtmls = '<img src='+ imglCons[index].src+'>'
		$(".Quickturnnew").html(confirmsHtmls)
	}
}


var my2 = {
	confirms: function(index) {
		var imgCons = [
			{src: "images/assembly/pcba_process01b.jpg"},
			{src: "images/assembly/pcba_process02b.jpg"},
			{src: "images/assembly/pcba_process03b.jpg"},
			{src: "images/assembly/pcba_process04b.jpg"},
			{src: "images/assembly/pcba_process05b.jpg"},
			{src: "images/assembly/pcba_process06b.jpg"},
			{src: "images/assembly/pcba_process07b.jpg"},
			{src: "images/assembly/pcba_process08b.jpg"},
			{src: "images/assembly/pcba_process09b.jpg"},
			{src: "images/assembly/pcba_process10b.jpg"},
			{src: "images/assembly/pcba_process11b.jpg"},
			{src: "images/assembly/pcba_process12b.jpg"},
			{src: "images/assembly/pcba_process13b.jpg"},			
			{src: "images/assembly/pcba_process14b.jpg"},
			{src: "images/assembly/pcba_process15b.jpg"},
			{src: "images/assembly/pcba_process16b.jpg"},
			{src: "images/assembly/pcba_process17b.jpg"},
			{src: "images/assembly/pcba_process18b.jpg"},
			{src: "images/assembly/pcba_process19b.jpg"},
			{src: ""},
			{src: ""},
			{src: ""},
			{src: ""}
		];
		var confirmsHtmls = '<img src='+ imgCons[index].src+'>';
		$(".capablisnew").html(confirmsHtmls)
	}
}

var my3 = {
	confirms: function(index) {
		var imgConsbox = [
			{src: "images/assembly/pcba_capabilities01b.jpg"},
			{src: "images/assembly/pcba_capabilities02b.jpg"},
			{src: "images/assembly/pcba_capabilities03b.jpg"},
			{src: "images/assembly/pcba_capabilities04b.jpg"},
			{src: "images/assembly/pcba_capabilities05b.jpg"},
			{src: "images/assembly/pcba_capabilities06b.jpg"}

		];
		var confirmsHtmls = '<img src='+ imgConsbox[index].src+'>';
		$(".box-si").html(confirmsHtmls)
	}
}