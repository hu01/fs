$(function(){
	var arryZh = [];
	var arryEn = ["FASHION","BEAUTY","STAR","LOHAS","PLASTIC","VIDEO","MODERN"];
	var $a = $(".biglogo .top-nav .nav-list a");
	var $sub_nav = $(".biglogo .sub-nav");
	var $sub_navLi = $(".biglogo .sub-nav li");
	var $biglogo = $(".biglogo");
	var index = 0;
	var timer = "";
	$a.each(function(){//遍历
		arryZh.push( $(this).html() );
	});

	//头部右边上下滚动的部分
	var scro = document.getElementById("scrollWrap");
	var aArry = scro.getElementsByTagName("a");
	var index9 = 1;
	var timer1;
	console.log(aArry.length);
	scro.onmouseover = function(){
		clearInterval(timer1);
	};
	scro.onmouseout = function(){
		scrow();
	};
	scrow();
	function scrow(){
		timer1 = setInterval(function(){
		index9++
		$(".scrollWrap").animate({"marginTop":-28*index9+"px"},500,function(){
			if(index9 > aArry.length-2){
				index9 = 1;
				$(".scrollWrap").css("marginTop",-28+"px");

			}
			});
		},2000);
	};
	
	//鼠标滑入到顶级栏目
	$a.mouseenter(function(){
		$a.eq(index).removeClass("hover").html( arryZh[index] );
		//获取 a的索引  用来去数组里面获取对应的内容
		index = $(this).index() / 2;
		
		//console.log(index);
		$(this).addClass("hover").html( arryEn[index] );
		$sub_nav.stop().slideDown();
		$sub_navLi.eq(index).show().siblings().hide();
	});
	
	//鼠标从二级导航离开
	$sub_nav.mouseleave(function(){
		$(this).stop().slideUp();
		$a.removeClass("hover");
		$a.eq(index).html( arryZh[index] );
	});
	
	$biglogo.mouseleave(function(){
		
		$sub_nav.stop().slideUp();
		$a.removeClass("hover");
		$a.eq(index).html( arryZh[index] );
		
	});

	//搜索部分
	
	$(".biglogo .search-bg").click(function(){
		$(this).css("background-position","0 660px");
		$(".biglogo .text").css("display","block").animate({"width":"140px"});
		$(".biglogo .text").focus();
	});
	//失去焦点
	$(".biglogo .text").blur(function(){
		$(this).animate({"width":"0px"},function(){
			$(".search-bg").css("background-position","0 620px");
			$(this).css("display","none");
		});
	});
	
	//banner轮播图
	bannerAuto($(".banner .tab li"),$(".banner .btn a"),$(".banner .slide"),$(".banner .slide-wrap ul"),"hover",$(".banner .slide-wrap"),4000,44);

	bannerAuto($(".choice .tab li"),$(".choice .btn a"),$(".choice .slide"),$(".choice .slide-wrap ul"),"hover",$(".choice .slide-wrap"),60000,44);

	bannerAuto($(".modern .tbody-left-bottom .tab li"),$(".modern .tbody-left-bottom .btn a"),$(".modern .tbody-left-bottom"),$(".modern .tbody-left-bottom .slide-wrap > ul"),"hover",$(".modern .tbody-left-bottom .slide-wrap"),60000,44);

	bannerAuto($(".modern .tbody-left-top .tab li"),$(".modern .tbody-left-top .btn a"),$(".modern .tbody-left-top"),$(".modern .tbody-left-top .slide-wrap ul"),"hover",$(".modern .tbody-left-top .slide-wrap"),2000,44);

	bannerAuto($(".plastic .tbody-right .tab li"),$(".plastic .tbody-right .btn a"),$(".plastic .tbody-right .slide"),$(".plastic .tbody-right .slide-wrap ul"),"hover",$(".plastic .tbody-right .slide-wrap"),2000,44);

	bannerAuto($(".plastic .tbody-left .tab li"),$(".plastic .tbody-left .btn a"),$(".plastic .tbody-left .slide"),$(".plastic .tbody-left .slide-wrap ul"),"hover",$(".plastic .tbody-left .slide-wrap"),5000,44);

	bannerAuto($(".lohas .tab li"),$(".lohas .btn a"),$(".lohas .slide"),$(".lohas .slide-wrap ul"),"hover",$(".lohas .slide-wrap"),5000,44);

	bannerAuto($(".beauty .tfoot .tab li"),$(".beauty .tfoot .btn a"),$(".beauty .tfoot .slide"),$(".beauty .tfoot .slide-wrap ul"),"hover",$(".beauty .tfoot .slide-wrap"),5000,44);
	
	bannerAuto($(".beauty .tbody-right .tab li"),$(".beauty .tbody-right .btn a"),$(".beauty .tbody-right .slide"),$(".beauty .tbody-right .slide-wrap ul"),"hover",$(".beauty .tbody-right .slide-wrap"),60000,44);

	bannerAuto($(".beauty .tbody-left .tab li"),$(".beauty .tbody-left .btn a"),$(".beauty .tbody-left .slide"),$(".beauty .tbody-left .slide-wrap ul"),"hover",$(".beauty .tbody-left .slide-wrap"),5000,44);

	bannerAuto($(".fashion .tab li"),$(".fashion .btn a"),$(".fashion .slide"),$(".fashion .slide-wrap ul"),"hover",$(".fashion .slide-wrap"),5000,44);

	bannerAuto($(".modelBox .tab li"),$(".modelBox .btn a"),$(".modelBox .slide"),$(".modelBox .slide-wrap ul"),"hover",$(".modelBox .slide-wrap"),5000,44);

	bannerAuto($(".todayFocus .tbody-left .tab li"),$(".todayFocus .tbody-left .btn a"),$(".todayFocus .tbody-left .slide"),$(".todayFocus .tbody-left .slide-wrap ul"),"hover",$(".todayFocus .tbody-left .slide-wrap"),3000,44);

	
	function bannerAuto($tabLi,$btn,$banner,$wrapUl,event,$width,T,aW){
		var index1 = 0;
		event = event || "hover";
		//var $banner = $(".banner .slide");
		var w = $width.width();
		var timer = null;
		var nowDate = new Date();
		$banner.hover(function(){	
			
			btnEvent();
			clearInterval(timer);
		},function(){
			btnEvent(aW);
			timeAuto();
		});
		//左右按钮显示
		function btnEvent(Offset){
			Offset = Offset || 0;
			//遍历按钮，分辨出左右按钮
			$btn.each(function(){
				var a = $(this).index();
				$(this).show();
				a?$(this).stop().animate({"right":-Offset+"px"},400):$(this).stop().animate({"left":-Offset+"px"},400);	
			});
		};

		$tabLi[event](function(){
			index1 = $(this).index();
			console.log(index1);
			$tabLi.removeClass("active");
			$(this).addClass("active");
			$wrapUl.animate({"marginLeft":-w*(index1+1)},400);
		});
		$btn.click(function(){
			var n = $(this).index();//n=0 代表左按钮 n=1 代表右按钮
			if( new Date() -nowDate >600 ){
				nowDate = new Date();

				n? index1++ : index1--;
				slideAuto();
			};
			
		});
		
		timeAuto();
		//定时器函数
		function timeAuto(){
			timer = setInterval(function(){
			index1++;
			slideAuto();
			},T);
		};
		function slideAuto(){
			var aindex = index1;
			//console.log($tabLi.length)
			if( aindex >= $tabLi.length){
				aindex = 0;
			}else if(aindex < 0){
				aindex = $tabLi.length-1;
			};
			//console.log(aindex);   //0---->9  ???
			$tabLi.removeClass("active");
			$tabLi.eq(aindex).addClass("active");

			$wrapUl.animate({"marginLeft":-w*(index1+1)},500,function(){
				if(index1 >= $tabLi.length){
					$wrapUl.css("marginLeft",-w+"px");
					index1 = 0;
				}else if(index1 < 0){
					$wrapUl.css("marginLeft",-w*($tabLi.length)+"px");
					index1 = $tabLi.length - 1;
				};
			});
		};
	};

	//今日聚焦
	todayFocus($(".todayFocus .scroll-wrap ul"),$(".todayFocus .scroll-wrap ul li"),3000);
	function todayFocus($wrapUl,$tabLi,T){
		var index2 = 0;
		var timeToday = null;
		var w = $tabLi.height();
		timeAuto();
		//定时器函数
		function timeAuto(){
			timeToday = setInterval(function(){
			index2++;
			slideUp();
			},T);
		};
		$tabLi.hover(function(){
			$(this).find("a").css("color","#747474");
			clearInterval(timeToday);
		},function(){
			timeAuto();
			$(this).find("a").css("color","#000");
		});
		function slideUp(){
			$wrapUl.animate({"marginTop":-w*(index2+1)},500,function(){
				if(index2 >= $tabLi.length -2){
					$wrapUl.css("marginTop",-w+"px");
					index2 = 0;
				};
			});
		};
	};	
	//大明星淡入淡出
	var index3 = 0;
	var timer3;
	var starLi = $(".star .tbody .slide-wrap li");
	var smallImg = $(".star .slide .smallImg");
	var smallImgLi = $(".star .slide .smallImg li");
	var starTabLi = $(".star .tbody .tab ul li");
	//starLi.eq(0).show();
	smallImgLi.mouseenter(function(){
		index3 = $(this).index();
		$(this).addClass("active").siblings().removeClass("active");
		console.log( index3 );
		starLi.eq(index3).fadeIn(500).siblings().fadeOut(500);
		starTabLi.eq(index3).addClass("active").siblings().removeClass("active");
	});
	$(".star .slide").hover(function(){
		clearInterval(timer3);
		smallImg.stop().animate({"bottom":"0px"},500);
	},function(){
		timer3 = setInterval(function(){
			starSlideAuto();
		},2000);
		smallImg.stop().animate({"bottom":"-90px"},500);
	});
	timer3 = setInterval(function(){
		starSlideAuto();
	},2000);
	function starSlideAuto(){
		index3++;
		index3 %= starLi.length;
		smallImgLi.eq(index3).addClass("active").siblings().removeClass("active");
		starLi.eq(index3).fadeIn(500).siblings().fadeOut(500);
		starTabLi.eq(index3).addClass("active").siblings().removeClass("active");
	};
	//视觉
	
	//随机数
	var n = 0;
	var i = 0;
	function Random(n){
		//Math.random() 0~1 之间的随机数
		//Math.floor()向下取整
		//Math.ceil()向上取整
		//Math.round()四舍五入
		return Math.floor(Math.random()*n);
	}
	var arrySee = [];
	var iW = 0;
	var iH = 0;
	$(".visual .tbody .hover").hover(function(){
		iW = $(this).width();
		iH = $(this).height();

		arrySee = [{
			"top":-iH + "px",
			"opacity":"0"
		},{
			"left":iH + "px",
			"opacity":"0"
		},{
			"top":iH + "px",
			"opacity":"0"
		},{
			"left":-iW + "px",
			"opacity":"0"
		}]
		$(this).find("span").animate({"bottom":"0px"},100);
	},function(){
		i = Random(4);
		$(this).find("span").animate({"bottom":"-65px"},100);
		$(this).find("a:first").animate(arrySee[i],300,function(){
			
			$(this).css({
				"top": '0',
				"left": '0',
				"z-index":"1",
				"opacity":"1"
			});
			$(this).siblings().css({
				"z-index":"9"
			});
			$(this).appendTo($(this).parent());
		});

		$(this).find("a").show();
	});

	//有看点
	var videoLi = $(".video .tbody ul li");
	videoLi.hover(function(){
		$(this).find("i").fadeIn(300);
	},function(){
		$(this).find("i").fadeOut(200);
	});

	//时尚百科
	listCon($(".baike .thead ul li"),$(".baike .pannel"));

	//太平洋网络推荐
	listCon($(".recommend .tbody-center-nav a"),$(".recommend .slideContent"));

	//底部脚本
	listCon($(".foot-wrap .links span"),$(".foot-wrap .contentDiv"));


	function listCon($List,$pannel){
		var index5 = 0;
		$List.mouseenter(function(){
			index5 = $(this).index();
			$(this).addClass("active").siblings().removeClass("active");
			$pannel.eq(index5).addClass("on").siblings().removeClass("on");
		});
	};

	//太平洋网络推荐左边部分
	var index6 = 0;
	var timer5;
	$(".recommend .tbody-left .tab ul li").mouseenter(function(){
		index6 = $(this).index();
		$(this).addClass("active").siblings().removeClass("active");
		$(".recommend .tbody-left .slide-wrap ul li").fadeOut(300);
		$(".recommend .tbody-left .slide-wrap ul li").eq(index6).fadeIn(300);
	})
	$(".recommend .tbody-left .slide").hover(function(){
		clearInterval(timer5);
	},function(){
		timer5 = setInterval(function(){
			recommendAuto();
		},3000);
	});
	timer5 = setInterval(function(){
		recommendAuto();
	},3000);
	function recommendAuto(){
		index6++;
		index6 %= $(".recommend .tbody-left .tab ul li").length;
		//alert(index6);
		$(".recommend .tbody-left .tab ul li").eq(index6).addClass("active").siblings().removeClass("active");
		$(".recommend .tbody-left .slide-wrap ul li").fadeOut(300);
		$(".recommend .tbody-left .slide-wrap ul li").eq(index6).fadeIn(300);
	};
	//太平洋网络推荐右边部分
	var index7 = 0;
	$(".recommend .title i").mouseenter(function(){
		index7 = $(this).index();
		$(this).addClass("current").siblings().removeClass("current");
		$(".recommend .wrap").stop().animate({"marginLeft":-index7*360},300);
	});

	//底部脚本
	var index8 = 0;
	var LiWidth = $(".key ul li").width();
	var keyUl = $(".key ul");
	var keyI = $(".key .nav-tab i");
	var timer6;
	keyI.mouseenter(function(){
		index8 = $(this).index();
		$(this).addClass("active").siblings().removeClass("active");
		keyUl.stop().animate({"marginLeft":-index8*LiWidth},300);
		clearInterval(timer6);
	});
	keyI.mouseleave(function(){
		timer6 = setInterval(function(){
			keyAuto();
		},3000);
	});
	keyUl.hover(function(){
		clearInterval(timer6);
	},function(){
		timer6 = setInterval(function(){
			keyAuto();
		},3000);
	});
	timer6 = setInterval(function(){
		keyAuto();
	},5000);

	function keyAuto(){
		index8++;
		index8 %= keyI.length;
		keyI.eq(index8).addClass("active").siblings().removeClass("active");
		keyUl.stop().animate({"marginLeft":-index8*LiWidth},500);
	};
	//右侧导航栏
	//上面文字部分
	
	
	var sideList = document.getElementsByClassName("sideList")[0];
	var sideListA = sideList.getElementsByTagName("a");
	var str = "";

	for(var i=0;i<sideListA.length;i++){
		sideListA[i].index = i;
		sideListA[i].onmouseover = function(){	
			str = this.getAttribute("entitle");
			this.childNodes[1].nodeValue = str;			
			this.style.color = "#E5077C";
		};
		sideListA[i].onmouseout = function(){
			str = this.getAttribute("chtitle");
			this.childNodes[1].nodeValue = str;	
			this.style.color = "";
			
		}
	};

	$(window).scroll(function(){
		var top = $(document).scrollTop();
		var menu = $(".sideList");
		var Stair = $(".Stair");
		var curId = "";
		var sideNav = $(".sideNav");
		var disTop = $(".Stair").eq(0).offset().top;
		if( top > disTop-100 ){
			sideNav.css("display","block");
		}else{
			sideNav.css("display","none");
		}
		var cg = $(".sideNav ul li a");
		var cgtitle ="";
		for(var i=0;i<cg.length;i++) {
        
	        cgtitle = cg.eq(i).attr("chtitle");
	        cg.eq(i).html("<i></i>"+cgtitle);  
    	};
		Stair.each(function(){
			var m = $(this);
			var StairTop = m.offset().top;
			if(top > StairTop-100){
				curId = "#" + m.attr("id");
				menu.find("a").attr("class","cgray");
			}else{
				return false;
			}
			
		});
		var curLink = $(".sideNav ul li a.cur");
		
		if(curId && curLink.attr("href") != curId ){
			var str5 = menu.find("[href=" + curId + "]").attr("entitle");
			curLink.removeClass("cur");
			
			menu.find("[href=" + curId + "]").attr("class","cur");
			menu.find("[href=" + curId + "]").html("<i></i>"+str5);
			menu.find("[href=" + curId + "]").mouseleave(function(){
				$(this).html("<i></i>"+str5);
			})
		}
	});
	
	

	//下面背景图片部分
	var aUl = document.getElementsByClassName("sideImg")[0];
	var aLi = aUl.getElementsByTagName("li");
	var wxImg = document.getElementsByClassName("imgWrap");
	
	sideList.style.visibility = "visible";
	aLi[0].onclick = function(){
		
		if(sideList.style.visibility == "visible"){
			sideList.style.visibility = "hidden";
		}else{
			sideList.style.visibility = "visible";
		}
	};
	aLi[2].onclick = function(){
		$("html,body").animate({scrollTop:"0px"},10);
	};
	for( var i=0;i<aLi.length;i++){
		aLi[i].index = i;
		// 
		aLi[i].onmouseover = function(){	
			index4 = this.index;
			for(var j=0;j<aLi.length;j++){
				aLi[j].style = "";
			};	
			this.style.backgroundPosition = "0px "+ ((index4+3)*-58+2)+"px";
			if(index4 == 1){
				wxImg[0].style.display = "block";
			};
		};
		aLi[i].onmouseout = function(){
			this.style = "";
			wxImg[0].style.display = "none";
		}
	};

});