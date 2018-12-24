$(document).ready(function(){
  $('.slider').slick({
  	autoplay: true,
  	arrow: true,
  	dots: true
  });
  $('.typography__slider').slick({
    centerMode: true,
    centerPadding: '200px',
    slideToShow: 3,
    slideToScroll: 1,
    dots: true,
    responsive: [{
      breakpoint: 1200, 
      settings: {
        centerMode: false
      }
    }
    ]
  });


  $('.our__projects span').click(function() {
  $(this).toggleClass('open');
  $(this).nextAll().slideToggle(500);
  });

  $('.filter .menu-item').click(function(e) {
    e.preventDefault();
    if ($(this).hasClass('active')) {
      $(this).removeClass('active');
      $(this).find('.toggle').html('+');
      $(this).next('ul.submenu').slideUp(600);
    }
    else {
      $(this).addClass('active');
      $(this).find('.toggle').html('-');
      $(this).next('ul.submenu').slideDown(600);
    }
  });

  $('.filter__price ul .filter__price--item').click(function(e) {
    e.preventDefault();
    $(this).find('ul.submenu').slideToggle(600);
  });


  $('.main__btn__menu').click(function(e) {
  e.preventDefault();
  $(this).toggleClass('open');
  $('nav.main__menu').slideToggle(1200);
  });
  

});
function showMenu(){
  if ($(window).width()>'768') {
  	$('nav.main__menu').slideDown(200);
  } else {
  	$('.main__btn__menu').removeClass('open');
  	$('nav.main__menu').slideUp(20);
  }
}
$(window).on('load resize',showMenu);
