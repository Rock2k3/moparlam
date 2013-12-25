
$(function() {
	initHint();
	initTabs();
	initChk();
	
	$('.center .mainNews .list2 ul').carouFredSel({
		auto	: false,
		circular: false,
		infinite: false,
		prev	: function() { return $(this).parent().parent().find(".arrowLeft"); },
		next	: function() { return $(this).parent().parent().find(".arrowRight"); },
		items	:4,
		scroll	:1
	});
	
	$mainNewsItems = $('.center .mainNews .list2 li');
	
	$mainNewsItems.click(function(e) {
		$itemsList = $(this).parent().find('li');
		$itemsList.filter('.active').removeClass('active');
		$(this).addClass('active');
		$index = $itemsList.index(this)+$('.center .mainNews .list2 ul').triggerHandler('currentPage');
		$itemsList1 = $('.center .mainNews .list1 li');
		$item1 = $itemsList1.filter('.active');
		$item2 = $itemsList1.eq($index);
		
		$bgList = $('.center .mainNews .bg li');
		$bg1 = $bgList.filter('.active');
		$bg2 = $bgList.eq($index);
		
		$item1.animate({opacity:0}, 400, function() {$item1.removeClass('active');});
		$item2.animate({opacity:1}, 400, function() {$item2.addClass('active');});
		$bg1.animate({opacity:0}, 400, function() {$bg1.removeClass('active');});
		$bg2.animate({opacity:1}, 400, function() {$bg2.addClass('active');});
	});
	
	var intervalID;
	var num = 1;
	timerStart();
	function timerStart() {
		if($mainNewsItems.length>1) {
			intervalID = setInterval(itemClick, 3000);
		}
	};
	function itemClick() {
		if(num>=$mainNewsItems.length) {
			num = 0;
		}
		$mainNewsItems.eq(num).click();
		num++;
	};
	$('.center .mainNews').hover(
		function() {
			clearInterval(intervalID)
		},
		function() {
			num = $mainNewsItems.index($mainNewsItems.filter('.active')) + 1;
			timerStart();
		}
	);
	
	$('.center .projects .block1 ul').carouFredSel({
		auto	: false,
		circular: false,
		infinite: false,
		prev	: '.center .projects .block1 .arrowLeft',
		next	: '.center .projects .block1 .arrowRight',
		items	:8,
		scroll	:1
	});
	
	$('select').CFElement({
		selectvisibleRows: 5,
		customScroll: false,
		showArrows: false
	});
	
	$('.center .media .photoGalery_single .photoList1 li .img_s').click(function(e) {
		e.preventDefault();
		
		$this = $(this);
		$list = $(this).parent().parent();
		$listWidth = $list.innerWidth();
		$itemWidth = $(this).innerWidth();
		$lineLeight = Math.round($listWidth/$itemWidth);
		$index = $list.find('.img_s').index(this);
		$lineNum = Math.floor($index/$lineLeight);
		
		$bigImg = $(this).parent().find('.img_b');
		
		$index1 = $lineLeight*($lineNum+1)-1;
		
		if($index1>$list.find('.img_s').length-1){
			$index1 = $list.find('.img_s').length-1;
		}
		$lastLineItem = $list.find('.img_s:eq('+$index1+')').parent();
		
		
		if($list.find('li.forBigImg').length){
			if($lastLineItem.next('li').hasClass('forBigImg')){
				if($this.parent().hasClass('active')) {
					$item = $lastLineItem.next('li');
					$item.slideUp(400, function(){
						$this.after($item.html());
						$item.remove();
						$this.parent().removeClass('active');
					});
				}
				else{
					$item = $lastLineItem.next('li');
					$list.find('li.active').append($item.html()).removeClass('active');
					
					$this.parent().addClass('active');
					$lastLineItem.next('li').html($bigImg);
				}
			}
			else {
				$item = $list.find('li.forBigImg');
				$item.slideUp(400, function(){
					$list.find('li.active').append($item.html()).removeClass('active');
					$item.remove();
					
					$this.parent().addClass('active');
					$forBigImg = $('<li class="forBigImg"></li>').append($bigImg).hide();
					$lastLineItem.after($forBigImg);
					$forBigImg.slideDown(400);
					$('html,body').animate({
						scrollTop: $this.offset().top-1
					}, 400);
				});
			}
		}
		else{
			$this.parent().addClass('active');
			$forBigImg = $('<li class="forBigImg"></li>').append($bigImg).hide();
			$lastLineItem.after($forBigImg);
			$forBigImg.slideDown(400);
			$('html,body').animate({
				scrollTop: $this.offset().top-1
			}, 400);
		}
		
	});
	
	$('.center .social .twitterBlock .list ul').carouFredSel({
		auto	: false,
		circular: false,
		infinite: false,
		prev	: function() { return $(this).parent().parent().find(".arrowLeft"); },
		next	: function() { return $(this).parent().parent().find(".arrowRight"); },
		items	:3,
		scroll	:1
	});
	
	$('.center .newsList1 .block ul').carouFredSel({
		auto	: false,
		circular: false,
		infinite: false,
		prev	: function() { return $(this).parent().parent().find(".arrowLeft"); },
		next	: function() { return $(this).parent().parent().find(".arrowRight"); },
		items	:4,
		scroll	:1
	});
	
	$('.reviews ul').carouFredSel({
		auto	: false,
		circular: false,
		infinite: false,
		prev	: function() { return $(this).parent().parent().find(".arrowLeft"); },
		next	: function() { return $(this).parent().parent().find(".arrowRight"); },
		items	:3,
		scroll	:1
	});
	
	$tabs = $('.center .study .tabsBlock dt .tab');
	$tabsMaxHeigth = maxHeigth($tabs);
	$tabs.find('.line').height($tabsMaxHeigth);
	
	$('.center .about .block1 .line').each(function(index, element) {
		$columns = $(element).find('.column');
		$columns.height(maxHeigth($columns));
	});
	
	$('.center .about .block2 .pseudoLink').click(function(e) {
		$block = $(this).closest('.block2');
		
		$item2 = $(this).closest('.item2');
		$item3 = $(this).closest('.item3');
		$item4 = $(this).closest('.item4');
		
		$block.find('.item2').filter('.active').not($item2).removeClass('active');
		$block.find('.item3').filter('.active').not($item3).removeClass('active');
		$block.find('.item4').filter('.active').not($item4).removeClass('active');
		
		$item2.toggleClass('active');
		$item3.toggleClass('active');
		$item4.toggleClass('active');
	});
	
	$tabs1 = $('.center .about .block3 .tabsBlock dt .tab');
	$tabsMaxHeigth1 = maxHeigth($tabs1);
	$tabs1.find('.line').height($tabsMaxHeigth1);
	
	$('.center .about .block2 .persons .listItem a').click(function(e) {
		e.preventDefault();
		$personListIndex = $(this).closest('.persons').find('.listItem').index($(this).closest('.listItem'));
	});
	
	$('.center .contactsBlock .map .btn span').click(function(e) {
		e.preventDefault();
		$map = $(this).closest('.map');
		if($map.hasClass('opened')) {
			$(this).text('Развернуть карту');
			$map.animate({height:270}, 300, function() {$map.removeClass('opened');});
		}
		else {
			$(this).text('Свернуть карту');
			$map.animate({height:615}, 300, function() {$map.addClass('opened');});
		}
	});
	
	$('.newsList.carousel1 ul').carouFredSel({
		auto	: false,
		circular: false,
		infinite: false,
		prev	: function() { return $(this).parent().parent().find(".arrowLeft"); },
		next	: function() { return $(this).parent().parent().find(".arrowRight"); },
		items	:6,
		scroll	:1
	});
	
	$('.center .authorList3.candidates li a').click(function(e) {
		e.preventDefault();
		$personListIndex = $(this).closest('.candidates').find('li').index($(this).closest('li'));
	});
	
	$('.center .authorList3 li .listItem1').click(function(e) {
		e.preventDefault();
		if($(this).closest('.authorList3').hasClass('candidates')) return;
		$(this).closest('.authorList3').find('li.active').not($(this).parent()).removeClass('active');
		$(this).parent().toggleClass('active');
	});
	
	$('.center .study .teachers .item .Img').click(function(e) {
		e.preventDefault();
		$(this).closest('.teachers').find('.Img.active').not($(this)).removeClass('active');
		$(this).toggleClass('active');
	});
	
	$(document).click(function(e) {
		if ($(e.target).parents().filter(".center .authorList3 li .listItem1").length != 1) { 
			$('.center .authorList3 li').removeClass('active');
		}
		if ($(e.target).parents().filter(".center .study .teachers .item .Img").length != 1) { 
			$('.center .study .teachers .item .Img').removeClass('active');
		}
	});
	
	$('.center .partnersBlock .item a').hover(
		function() {
			$(this).find('img.color').animate({opacity:1}, 100);
		},
		function() {
			$(this).find('img.color').animate({opacity:0}, 100);
		}
	);
	
	$('.fancybox_ajax').fancybox({
		type:		'ajax',
		fitToView:	false,
		title:		false,
		padding:	0,
		closeBtn:	false,
		scrolling: 'visible'
	});
	
	$('.fancybox_iframe').fancybox({
		type:		'iframe',
		fitToView:	false,
		title:		false,
		padding:	0,
		closeBtn:	false,
		scrolling: 'visible',
		width: 690,
		afterLoad: function(){
		    $(this.content).height($(this.content).contents().find('body').outerHeight());
		}
	});
	
});

function initHint() {
	$('input[hint], textarea[hint]').each(function(index, element) {
		
		$hint = $('<div class="hint" style="position:absolute; top:0; left:0; overflow:hidden; white-space:nowrap;"></div>');
		$hint.html($(this).attr('hint'));
		$(this).wrap('<span class="inputHint_wrap" style="position:relative; display:inline-block;"></span>').after($hint);

		if(($(this).val() != '') && ($(this).val() != $(this).attr('hint'))) {
			$(this).addClass('filled');
			$(this).parent().find('.hint').hide();
		}
	});
	$('.hint').click(function(e) {
		$(this).hide();
		$(this).parent().find('input').focus();
		$(this).parent().find('textarea').focus();
	});
	$('input[hint], textarea[hint]').focusin(function(e) {
		$(this).addClass('focused');
	});
	$('input[hint], textarea[hint]').focusout(function(e) {
		$(this).removeClass('focused');
		if($(this).val() == '' && $(this).attr('hint') != '') {
			$(this).parent().find('.hint').show();
		}
		else {
			$(this).addClass('filled');
		}
	});
}

function initTabs(){
	$('.tabsBlock').each(function(index, element) {
		$tabs = $(this).find('dt');
		if($tabs.find('a.tab').length) {
			return
		}
		$tabsContent = $(this).find('dd');
		$index = $tabs.index($tabs.filter('.active'));
		if($index == -1){
			$tabs.eq(0).addClass('active');
			$tabsContent.eq(0).addClass('active');
			
			$tabsContent.eq(0).find('.newsList ul').carouFredSel({
				auto	: false,
				circular: false,
				infinite: false,
				prev	: $tabsContent.eq(0).find('.arrowLeft'),
				next	: $tabsContent.eq(0).find('.arrowRight'),
				items	:1,
				scroll	:1,
				responsive: true
			});
		}
		else {
			$tabsContent.eq($index).addClass('active');
			
			$tabsContent.eq($index).find('.newsList ul').carouFredSel({
				auto	: false,
				circular: false,
				infinite: false,
				prev	: $tabsContent.eq($index).find('.arrowLeft'),
				next	: $tabsContent.eq($index).find('.arrowRight'),
				items	:1,
				scroll	:1,
				responsive: true
			});
		}
	});
	$('.tabsBlock dt span.tab').click(function(e) {
		$tabs = $(this).parent().parent().find('dt');
		$tabsContent = $(this).parent().parent().find('dd');
		$tabs.filter('.active').removeClass('active');
		$tabsContent.filter('.active').removeClass('active');
		$index = $tabs.index($(this).parent());
		$(this).parent().addClass('active');
		$tabsContent.eq($index).addClass('active');
		
		$tabsContent.eq($index).find('.newsList ul').carouFredSel({
			auto	: false,
			circular: false,
			infinite: false,
			prev	: $tabsContent.eq($index).find('.arrowLeft'),
			next	: $tabsContent.eq($index).find('.arrowRight'),
			items	:1,
			scroll	:1,
			responsive: true
		});
	});
}

function initChk(){
	$('span.chk').each(function() {
		if($(this).find('input').is(':checked')) $(this).addClass('chkChecked');
	});
	$('span.chk input').click(function() {
		if($(this).is(':checked')) $(this).parent().addClass('chkChecked');
		else  $(this).parent().removeClass('chkChecked');
	});
}

function maxHeigth(array) {
	$maxHeight = 0;
	$(array).each(function(index, element) {
		if($(this).height()>$maxHeight){
			$maxHeight = $(this).height()
		}
	});
	return $maxHeight;
}