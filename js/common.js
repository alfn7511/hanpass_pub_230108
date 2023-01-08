var touchPrevent = function (e) {
	e.preventDefault();
};

jQuery(document).ready(function () {
	/*snsToggle();*/
	imgShow()
	picShow();
	mobileMenu.open()
	// mobileMenu
	$('.mobile-open-btn,.scroll-btn').on('click', function () {
		$('.mobile-menu-wrap').show();
		$('body').css({'overflow-y': 'hidden'});
		return false;
	})
	$('.mobile-close-btn').on('click', function () {
		mobileMenu.allClose()
		$('body').css({'overflow-y': 'visible'})
		return false;
	})

	// scroll
	$(window).scroll(function () {
		var topPos = $(window).scrollTop();
		if (topPos > 80) {
			$('header').addClass('fix');
		} else {
			$('header').removeClass('fix');
		}
	})

	//
	$('.map').on('click', function () {
		return false;
	})

	//lang
	$('.util > li:eq(1) > a').on('click', function () {
		var view = $(this).next();
		if (view.is(':visible')) {
			view.hide();
			$(this).find('>span.ion-android-arrow-dropup').attr('class', 'ion-android-arrow-dropdown')
		} else {
			view.show();
			$(this).find('>span.ion-android-arrow-dropdown').attr('class', 'ion-android-arrow-dropup')
		}
		return false;
	})

	//new toggle
	$('.news-suject > a').not($('.news-suject:last-child > a')).on('click', function () {
		var view = $(this).next();
		if (view.is(':visible')) {
			$('.news-toggle').hide();
			$('.news-suject > a').removeClass('active');
			$(this).find('.faq-arrow').removeClass('up')
			view.hide()
		} else {
			$('.news-suject > a').removeClass('active');
			$(this).addClass('active');
			$('.news-toggle').hide();
			$('.faq-arrow').removeClass('up');
			$(this).find('.faq-arrow').addClass('up')
			view.show()
		}
		return false;
	})


})

// sns
var snsToggle = function () {
	$('.s1 > a').on('click', function () {
		var view = $('.toggle-cont');
		if (view.is(':visible')) {
			view.slideUp()
			$(this).parent().parent().stop().animate({'margin-top': '-100px'})
		} else {
			view.slideDown(500);
			$(this).parent().parent().stop().animate({'margin-top': '-260px'})
		}
		return false;
	})
}

//show
var imgShow = function () {
	$('.item-lst li a').on('click', function () {
		var ind = $(this).parent().index();
		$('.item-wrap li').hide();
		$('.item-wrap li:eq(' + ind + ')').fadeIn();
		$('.item-lst li a').removeClass('active')
		$(this).addClass('active');
		return false;
	})
}
var picShow = function () {
	$('.right-cont li a').on('click', function () {
		var ind = $(this).parent().index();
		$('.left-cont li').fadeOut(500);
		$('.left-cont li:eq(' + ind + ')').fadeIn(500);
		$('.right-cont li a').removeClass('active')
		$(this).addClass('active');
		return false;
	})
}

//mobile menu
var mobileMenu = {
	open: function () {
		$('.mobile-mneu a').each(function () {
			$(this).on('click', function () {
				var foldClass = ($(this).find('span').hasClass('ico-plus')) ? 'ico-minus' : 'ico-plus';
				$(this).find('>span').attr('class', foldClass).closest('li').toggleClass('active').siblings().each(function () {
					$(this).removeClass('active');
					$(this).find('a > span').attr('class', 'ico-minus');
				});
			})
		})
	},
	allClose: function () {
		$('.mobile-mneu').removeClass('active').find('li').removeClass('active');
		$('.mobile-mneu').find('a span').attr('class', 'ico-minus');
		$('.mobile-menu-wrap').hide();
	}
}