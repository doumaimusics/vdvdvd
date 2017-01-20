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
		$(".Quickturn").hide();
		$(".capablis").hide();
		
		
	})

	$("body .close").click(function() {
		$(this).hide();
		$("body .mask").hide();
		$(".Capacity").hide();
		$(".Quickturn").hide();
		$(".capablis").hide();
		
		
	})
	$(".table-box td").click(function () {

		var index = $(this).index();


		var trIndex = $(this).parents('tr').index();

	
		if ((index == 3 && trIndex == 3) || (index == 4 && trIndex == 3))
		{
		    return;
		}

		$(".Capacity").eq(trIndex*5+index).show();
		$("body .mask").show();
		$("body .close").show();
	})	
})


//Quickturn-fast-pcbs-two.html页面中间图片JS
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
		$(".Quickturn").show();
		$("body .mask").show();
		$("body .close").show();
	})	
	$(".brick-list li").click(function() {
		var index = $(this).index();
		console.log(index)
		my2.confirms(index);
		$(".capablis").show();
		$("body .mask").show();
		$("body .close").show();
	})			
})

var my1= {
	confirms: function(index) {
		var imglCons = [
		{src: "images/capabilities/pcb_product01b.jpg"},
		{src: "images/capabilities/pcb_product02b.jpg"},
		{src: "images/capabilities/pcb_product03b.jpg"},
		{src: "images/capabilities/pcb_product04b.jpg"},
		{src: "images/capabilities/pcb_product08b.jpg"},
		{src: "images/capabilities/pcb_product10b.jpg"},		
		{src: "images/capabilities/pcb_product09b.jpg"},
		{src: "images/capabilities/pcb_product11b.jpg"},
		{src: "images/capabilities/pcb_product12b.jpg"},
		{src: "images/capabilities/pcb_product13b.jpg"},
		{src: "images/capabilities/pcb_product15b.jpg"},
		{src: "images/capabilities/pcb_product18b.jpg"},
		{src: "images/capabilities/pcb_product19b.jpg"},
		{src: "images/capabilities/pcb_product20b.jpg"},
		{src: "images/capabilities/pcb_product21b.jpg"},
		{src: "images/capabilities/pcb_product22b.jpg"},
		{src: "images/capabilities/pcb_product23b.jpg"},
		{src: "images/capabilities/pcb_product05b.jpg"},
		{src: "images/capabilities/pcb_product06b.jpg"},
		{src: "images/capabilities/pcb_product14b.jpg"},
		{src: "images/capabilities/pcb_product16b.jpg"},
		{src: "images/capabilities/pcb_product17b.jpg"},
	    {src: ""},
		{src: ""}

		];
	   var confirmsHtmls = '<img src='+ imglCons[index].src+'>'
	$(".Quickturn").html(confirmsHtmls)
	}
}


var my2 = {
	confirms: function(index) {
		var imgCons = [
		{src: "images/capabilities/pcb_manufacture01b.jpg"},
		{src: "images/capabilities/pcb_manufacture02b.jpg"},
		{src: "images/capabilities/pcb_manufacture03b.jpg"},
		{src: "images/capabilities/pcb_manufacture04b.jpg"},
		{src: "images/capabilities/pcb_manufacture05b.jpg"},
		{src: "images/capabilities/pcb_manufacture06b.jpg"},
		{src: "images/capabilities/pcb_manufacture07b.jpg"},
		{src: "images/capabilities/pcb_manufacture08b.jpg"},
		{src: "images/capabilities/pcb_manufacture09b.jpg"},
		{src: "images/capabilities/pcb_manufacture10b.jpg"},
		{src: "images/capabilities/pcb_manufacture11b.jpg"},
		{src: "images/capabilities/pcb_manufacture12b.jpg"},
		{src: "images/capabilities/pcb_manufacture13b.jpg"},
		{src: "images/capabilities/pcb_manufacture14b.jpg"},
		{src: "images/capabilities/pcb_manufacture15b.jpg"},
		{src: "images/capabilities/pcb_manufacture16b.jpg"},
		{src: "images/capabilities/pcb_manufacture17b.jpg"},
		{src: "images/capabilities/pcb_manufacture18b.jpg"},
		{src: "images/capabilities/pcb_manufacture19b.jpg"},
		{src: "images/capabilities/pcb_manufacture20b.jpg"},
		{src: "images/capabilities/pcb_manufacture22b.jpg"},
		{src: "images/capabilities/pcb_manufacture23b.jpg"},
		{src: "images/capabilities/pcb_manufacture24b.jpg"},
		{src: "images/capabilities/pcb_manufacture25b.jpg"}
		];
	   var confirmsHtmls = '<img src='+ imgCons[index].src+'>';
	$(".capablis").html(confirmsHtmls)
	}
}