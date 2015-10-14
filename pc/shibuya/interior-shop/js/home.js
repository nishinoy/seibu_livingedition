// メイン写真の切り替え
// ----------------------------------------------------
$(document).ready(function(){
	
	var active="active",interval=4000;
	var index=0, timerId=null;
	var tabs=$("#mainphoto .thumbBtn > li > a"), content=$("#mainphoto .photo > p");
	
	tabs.each(function(){$(this).removeClass("active");});
	content.hide();
	tabs.eq(0).addClass("active");
	content.eq(0).fadeIn("fast");
	
	tabs.click(function(){
		if($(this).hasClass("active")) return;
		if(timerId) clearInterval(timerId),timerId=null;
		change(tabs.index(this));
		setTimer();
		return false;
	});
	
	setTimer();
	function setTimer(){
		timerId=setTimeout(timeProcess,interval);
		return false;
	}
	
	function timeProcess(){
		change((index+1)%tabs.length);
		timerId=setTimeout(arguments.callee,interval);
	}
	
	function change(t_index){
		tabs.eq(index).removeClass("active");
		tabs.eq(t_index).addClass("active");
		//fadeout
		setTimeout(function(){
			content.eq(index).stop(true, true).fadeOut(700)
		;}, 100);
		//fadein
		setTimeout(function(){
			index=t_index;
			content.eq(index).fadeIn(700)
		;}, 100)
	}
});

$(function (){
     $("#shop_list ul.tab li.active a").click(function() {
		$("#shop_list ul.tab li a").removeClass("active");
		$(this).addClass("active");
		$(".shop").hide();
		var activeTab = $(this).attr("href").replace(/#/ig, "."); 
		$(activeTab).fadeTo("slow",1.0);
		return false;
     });
});

$(function (){
	$("#shop_list .shop").css("cursor","pointer");
	$("#shop_list .shop").hover(
			function(){
				$("img", this).stop().animate({
					'width':'503px',
					'height':'180px',
					'marginTop':'-5px',
					'marginLeft':'-10px'
				},'fast');
			},
			function () {
				$("img", this).stop().animate({
					'width':'475px',
					'height':'170px',
					'marginTop':'0px',
					'marginLeft':'0px'
				},'fast');
			}
		);
	$("#shop_list .shop").click(function(){
		window.location=$(this).find("a").attr("href");
		return false;
	});
});