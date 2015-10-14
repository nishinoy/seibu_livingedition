// JavaScript Document
$(function() {
	var showFlag = false;
	var topBtn = $('#pagetop');	
	topBtn.css('bottom', '-130px');
	var showFlag = false;
	$(window).scroll(function () {
		if ($(this).scrollTop() > 100) {
			if (showFlag == false) {
				showFlag = true;
				topBtn.stop().animate({'bottom' : '15px'}, 650); 
			}
		} else {
			if (showFlag) {
				showFlag = false;
				topBtn.stop().animate({'bottom' : '-130px'}, 650); 
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