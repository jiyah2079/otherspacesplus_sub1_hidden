//서브메뉴슬라이드
$(function(){
	$(".nav1").mouseenter(function(){
		$(".sub_inner1").stop().slideDown();
	});
	$(".nav1").mouseleave(function(){
		$(".sub_inner1").stop().slideUp(150);
	});
	
});

$(function(){
	$(".nav2").mouseenter(function(){
		$(".sub_inner2").stop().slideDown();
	});
	$(".nav2").mouseleave(function(){
		$(".sub_inner2").stop().slideUp(150);
	});
	
});

$(function(){
	$(".nav3").mouseenter(function(){
		$(".sub_inner3").stop().slideDown();
	});
	$(".nav3").mouseleave(function(){
		$(".sub_inner3").stop().slideUp(150);
	});
	
});

$(function(){
	$(".nav4").mouseenter(function(){
		$(".sub_inner4").stop().slideDown();
	});
	$(".nav4").mouseleave(function(){
		$(".sub_inner4").stop().slideUp(150);
	});
	
});


// 상단 메뉴 고정하기
$(function() {

	$(document).ready(function() {
  
	  var scrollOffset = $('.scroll-menu').offset();
  
	  $(window).scroll(function() {
		if ($(document).scrollTop() > scrollOffset.top) {
		  $('.scroll-menu').addClass('scroll-fixed');
		}
		else {
		  $('.scroll-menu').removeClass('scroll-fixed');
		}
	  });
	});
  });


// 서브메뉴 슬라이드
// $(function(){
// 	$(".nav>li").mouseenter(function(){
// 		$(this).children(".sub").stop().slideDown();
// 	});
// 	$(".nav>li").mouseleave(function(){
// 		$(this).children(".sub").stop().slideUp();
// 	});
// });


//class 이미지 갤러리