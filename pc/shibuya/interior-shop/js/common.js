// JavaScript Document

// 画像HOVER (FADE)
// ----------------------------------------------------
$(document).ready(function(){
	$("#side a img,#promotion #bnrArea a img, #guide_bnr a img, .cp_bnr a img").hover(function(){
        $(this).stop(true, false).animate({
            opacity: .5
        }, {
            duration: 200
        })
    }, function() {
        $(this).stop(true, false).animate({
            opacity: 1
        }, {
            duration: 200
        })
    });
});

// 画像HOVER
// ----------------------------------------------------
$(document).ready(function(){
     $('.shop_ph a img').hover(function(){
        $(this).attr('src', $(this).attr('src').replace('_off', '_on'));
          }, function(){
             if (!$(this).hasClass('currentPage')) {
             $(this).attr('src', $(this).attr('src').replace('_on', '_off'));
        }
   });
});

$(function() {
	var showFlag = false;
	var topBtn = $('#pagetop');	
	topBtn.css('bottom', '-100px');
	var showFlag = false;
	$(window).scroll(function () {
		if ($(this).scrollTop() > 100) {
			if (showFlag == false) {
				showFlag = true;
				topBtn.stop().animate({'bottom' : '35px'}, 650); 
			}
		} else {
			if (showFlag) {
				showFlag = false;
				topBtn.stop().animate({'bottom' : '-100px'}, 650); 
			}
		}
	});
    topBtn.click(function () {
		$('body,html').animate({
			scrollTop: 0
		}, 500);
		return false;
    });
});