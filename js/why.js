
	//导航顶部固定
$(function() {
	topheight = $('.jump').offset().top; //距离顶部的高	
	$('.jump').css('top', topheight);
	var on_scroll = function() {
		s3 = $(document).scrollTop(); //滚动条滚动的高度		
		if(s3 > topheight) {
			if($.browser.msie && $.browser.version == '6.0') {
				$('.jump').css('top', $(window).scrollTop());
			} else {
				$('.jump').css('top', '0');
				$('.jump').css('position', 'fixed');
			}
		} else {
			$('.jump').css('top', topheight);
			$('.jump').css('position', 'absolute');
		}
		//滚动时文字样式改变
		$('.main-item ').each(function() {
			var n = $('.main-item ').index($(this));
			var m = $(this).offset().top;
			if($(document).scrollTop() > m - 100) {
				$(".tiaozhuanb .text").removeClass("active");
				$(".tiaozhuanb i").removeClass("active");
				$('.tiaozhuanb .text:eq(' + n + ')').addClass("active");
				$('.tiaozhuanb i:eq(' + n + ')').addClass("active");
				
			} else {}
		});
	}
	$(window).scroll(on_scroll);
	on_scroll();
})

//当大于1100就显示   小于就影藏
$(window).scroll(function() {
	var tops = $(window).scrollTop(); //滚动条高度
	var heights = $(".footer").offset().top; //当前盒子到顶部的高度 
	var windows = $(window).height(); //浏览器当前窗口可是区域高度
	if($(window).scrollTop() >= 1000) {
		$(".jump").show()
	} else {
		$('.jump').show();
	}
	if(tops >= heights - windows) {
		$(".jump").hide()
	}
	})
//点击跳转到相应位置
$(function(){
	$(".fixed-right-1").click(function(e){
	e.preventDefault();
	miao($(".obg"));
})
$(".fixed-right-2").click(function(e){
	e.preventDefault();
	miao($(".oof"));
})
$(".fixed-right-3").click(function(e){
	e.preventDefault();
	miao($(".qua"));
})
$(".fixed-right-4").click(function(e){
	e.preventDefault();
	miao($(".ots"));
})
$(".fixed-right-5").click(function(e){
	e.preventDefault();
	miao($(".ffp"));
})
$(".fixed-right-6").click(function(e){
	e.preventDefault();
	miao($(".ppuor"));
})
$(".fixed-right-7").click(function(e){
	e.preventDefault();
	miao($(".wanab"));
})
$(".fixed-right-8").click(function(e){
	e.preventDefault();
	miao($(".eacs"));
})
$(".fixed-right-9").click(function(e){
	e.preventDefault();
	miao($(".nmr"));
})
$(".fixed-right-10").click(function(e){
	e.preventDefault();
	miao($(".rar"));
})
function miao(els){
	var el_top = els.offset().top -20;
	$("html,body").animate({
		scrollTop:el_top
	},800)
}
})

