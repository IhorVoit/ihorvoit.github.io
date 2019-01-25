$(function() {

	$('.sale-slider').slick({
		dots: true,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 2000,
		dotsClass: 'sale-slider__dots',
		fade: true,
		responsive: [
		{
			breakpoint: 768,
			settings: {
				dots: false
			}
		}
		]
	});

	$('.header-slider').slick({
		arrows: false,
		dots: true,
		fade: true,
		autoplay: true,
		autoplaySpeed: 2000,
		dotsClass: 'header-slider__dots',
		speed: 700,
		adaptiveHeight: true
	});

	$('.products-slider').slick({
		arrows: true,
		dots: false,
		slidesToShow: 6,
		slidesToScroll: 1,
		focusOnSelect: true,
		responsive: [
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 5,
			}
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 4,
				centerMode: true,
				centerPadding: '50px',
			}
		}, 
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 3,
				centerMode: true
			}
		},
		{
			breakpoint: 576,
			settings: {
				slidesToShow: 1,
				centerMode: true,
				centerPadding: '180px',
				arrows: false
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				centerMode: true,
				centerPadding: '120px',
				arrows: false
			}
		},
		{
			breakpoint: 400,
			settings: {
				slidesToShow: 1,
				centerMode: true,
				centerPadding: '80px',
				arrows: false
			}
		}
		]
	});

	$('.instagallery-slider').slick({
		dots: false,
		arrows: false,
		mobileFirst: true,
		centerMode: true,
		centerPadding: '90px',
		focusOnSelect: true,
		responsive: [
		{
			breakpoint: 576,
			settings: 'unslick',
		}
		]
	});

	$('.using-gallery-slider').slick({
		dots: false,
		arrows: false,
		mobileFirst: true,
		centerMode: true,
		centerPadding: '75px',
		focusOnSelect: true,
		responsive: [
		{
			breakpoint: 576,
			settings: 'unslick',
		}
		]
	});

	var itemPreview = $('.products-slider__item a');

	itemPreview.hover(function() {
		if ($(this).children().is('.preview')) {
			$(this).children('img').css('opacity', 0);
			$(this).children('img.preview').css('opacity', 1);
		}
	}, function() {
		$(this).children('img').css('opacity', 1);
		$(this).children('img.preview').css('opacity', 0);
	});

	$('.menu .main-menu .dropdown-menu > a').on('click', function(event) {
		event.preventDefault();
		var txt = $(this).next('.submenu').is(':visible') ? '+' : '—';
		$(this).next('.submenu').slideToggle();
		$(this).children('span').html(txt);
	});

	$('.menu_btn').on('click',  function(event) {
		event.preventDefault();
		$('.menu').slideToggle(400);

		if ($('.submenu').is(':visible')) {
			$('.submenu').slideUp();
			$('.menu .main-menu .dropdown-menu > a span').html('+');
		}

		var leftOffset = $('nav .menu').outerWidth() - 50;

		if ($(this).hasClass('open')) {
			setPadding();
			$(this).removeClass('open');
		} else {
			$(this).addClass('open');
			$('.menu_btn.open').animate({left: leftOffset}, 1000);
		}

		if ($('.cart').is(':visible')) {
			return false;
		} else {
			modalBody();
		}

	});

	$('.cart_btn').on('click', function() {
		$('.cart').fadeToggle(400);
		if ($('.menu').is(':visible')) {
			return false;
		} else {
			modalBody();
		}

	});

	$('a[href="#"]').on('click', function(e) {
		e.preventDefault();
	});

});

function modalBody() {
	if ($('body').hasClass('modal-open')) {
		$('body').removeClass('modal-open');
	} else {
		$('body').addClass('modal-open');
	}
}

var containerWidth = Math.round($('.container').width()),
		windowWidth = $(window).width(),
		padding = (windowWidth == containerWidth) ? 30 : (windowWidth - containerWidth) / 2;

function setPadding() {
	$('.menu-container').css('paddingLeft', padding + 'px');
	$('.menu_btn').animate({left: padding}, 1000);
	$('.cart_btn').css('right', padding + 'px');
	$('.cart-item').css('paddingRight', padding + 'px');
	$('.cart-total').css('paddingRight', padding + 'px');
	$('.cart-btn-group').css('paddingRight', padding + 'px');
	$('.menu .main-menu .dropdown-menu  a').css('paddingLeft', padding + 'px');
}

$(window).on('load resize',setPadding);
