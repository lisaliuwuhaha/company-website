$(function(){
	//下拉菜单
	$('.nav li').mouseenter(function(){
		var winW=$(window).width();
		var liW=$(this).offset().left;
		if(winW-liW<240){
			$('.nav dl dl').css({left:'-238px'})
		}else{
			$('.nav dl dl').css({left:'238px'})
		}
		$(this).find('a:first').addClass('nav_dlCur');
		$(this).find('dl:first').slideToggle();
	})
	$('.nav li').mouseleave(function(){
		$(this).find('a:first').removeClass('nav_dlCur');
		$(this).find('dl:first').slideToggle();
	})
	$('.nav dd').mouseenter(function(){
		$(this).find('a:first').addClass('nav_dlCur');
		$(this).find('dl:first').slideToggle();
	})
	$('.nav dd').mouseleave(function(){
		$(this).find('a:first').removeClass('nav_dlCur');
		$(this).find('dl:first').slideToggle();
	})
	
	//图片淡入淡出
	$('.flash').mouseenter(function(){
		$('.flash_left,.flash_right').fadeIn();
		window.clearInterval(flashAuto);
	})
	$('.flash').mouseleave(function(){
		$('.flash_left,.flash_right').fadeOut();
		flashAuto=window.setInterval(function(){$('.flash_right').click()},2000)
	})
	$('.flash_btn span').mouseenter(function(){
		var oldNum=$('.flash_btnCur').index('.flash_btn span');
		var newNum=$(this).index('.flash_btn span');
		if(oldNum==newNum){
			return;
		}
		$('.flash_img li').eq(oldNum).fadeOut(500);
		$('.flash_img li').eq(newNum).fadeIn(500);
		$(this).addClass('flash_btnCur').siblings('span').removeClass('flash_btnCur')
	})
	$('.flash_right').click(function(){
		var oldNum=$('.flash_btnCur').index('.flash_btn span');
		var last=$('.flash_btn span:last').index('.flash_btn span');
		var newNum;
		if(oldNum!=last){
			newNum=oldNum+1;
		}else{
			newNum=0;
		}
		$('.flash_img li').eq(oldNum).fadeOut(500);
		$('.flash_img li').eq(newNum).fadeIn(500);
		$('.flash_btn span').eq(newNum).addClass('flash_btnCur').siblings('span').removeClass('flash_btnCur')
	})
	$('.flash_left').click(function(){
		var oldNum=$('.flash_btnCur').index('.flash_btn span');
		var last=$('.flash_btn span:last').index('.flash_btn span');
		var newNum;
		if(oldNum!=0){
			newNum=oldNum-1;
		}else{
			newNum=last;
		}
		$('.flash_img li').eq(oldNum).fadeOut(500);
		$('.flash_img li').eq(newNum).fadeIn(500);
		$('.flash_btn span').eq(newNum).addClass('flash_btnCur').siblings('span').removeClass('flash_btnCur')
	})
	var flashAuto=window.setInterval(function(){$('.flash_right').click()},2000);
	
	//四个球动画
	$('.ball li').mouseenter(function(){
		var newNum=$(this).index('.ball li');//当前li的位置
		var oldNum;
		$('.ball li').each(function(){
			var num=$(this).index('.ball li');//循环到当前li的位置
			if($(this).hasClass('ball_li'+num+'_cur')){
				oldNum=num;
				return false;//跳出each循环
			}
		});
		if(newNum!=oldNum){
			$(this).addClass('ball_li'+newNum+'_cur');
			$('.ball li').eq(oldNum).removeClass('ball_li'+oldNum+'_cur');
			$(this).animate({width:'502px'},500);
			$('.ball li').eq(oldNum).animate({width:'167px'},500);
		}
	})
	//关于我们
	$('.about_left').mouseenter(function(){
		$(this).find('p').stop();
		$(this).find('img').stop();
		$(this).find('img').animate({width:'540px',marginLeft:'-20px',marginTop:'-10px'},500);
		$(this).find('p').animate({bottom:'0px'},500);
	})
	$('.about_left').mouseleave(function(){
		$(this).find('p').stop();
		$(this).find('img').stop();
		$(this).find('img').animate({width:'491px',marginLeft:'0px',marginTop:'0px'},500);
		$(this).find('p').animate({bottom:'-241px'},500);
	})
	$('.about .btn_btn_R a').click(function(){
		var num=$('.about_right li:not(:hidden)').index('.about_right li');
		var last=$('.about_right li:last').index('.about_right li');
		if(num!=last){
			$('.about_right li:not(:hidden)').hide().next().show();
		}else{
			$('.about_right li:not(:hidden)').hide();
			$('.about_right li:first').show();
		}
	});
	$('.about .btn_btn_L a').click(function(){
		var num=$('.about_right li:not(:hidden)').index('.about_right li');
		if(num!=0){
			$('.about_right li:not(:hidden)').hide().prev().show();
		}else{
			$('.about_right li:not(:hidden)').hide();
			$('.about_right li:last').show();
		}
	})
	//合作伙伴
	$('.friend .btn_btn_L a').click(function(){
		$('.friend_main_ul li:first').animate({marginLeft:'-201px'},300,function(){
			$(this).appendTo('.friend_main_ul');
			$(this).css({marginLeft:0})
		})
	})
	$('.friend .btn_btn_R a').click(function(){
		$('.friend_main_ul li:last').css({marginLeft:'-201px'});
		$('.friend_main_ul li:last').prependTo('.friend_main_ul');
		$('.friend_main_ul li:first').animate({marginLeft:0},500)
	})
	//回到顶部
	$(window).scroll(function(){
		var winH=$(window).height();//窗口可视高度
		var scrH=$('body,html').scrollTop();//获取网页的滚动高度,html支持火狐和IE
		if(scrH>=winH){
			$('.to_top').fadeIn(200);
		}else{
			$('.to_top').fadeOut(200);
		}
		
	})
	$('.to_top,.kufu_toTop').click(function(){
		$('body,html').animate({scrollTop:0},500)
	})
})


