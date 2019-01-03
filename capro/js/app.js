$(document).ready(function(){
  $('.slider').slick({
  	autoplay: true,
  	arrow: true,
  	dots: true
  });
  // $('.typography__slider').slick({
  //   centerMode: true,
  //   centerPadding: '200px',
  //   slideToShow: 3,
  //   slideToScroll: 1,
  //   dots: true,
  //   responsive: [{
  //     breakpoint: 1200, 
  //     settings: {
  //       centerMode: false
  //     }
  //   }
  //   ]
  // });
$('#cascade-slider').cascadeSlider({
    itemClass: 'cascade-slider_item',
    arrowClass: 'cascade-slider_arrow'
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
  

    $(".js-range-slider").ionRangeSlider({
        type: "double",
        min: 5000,
        max: 150000,
        from: 30000,
        to: 120000,
        step: 100,
        grid_margin: false,
        hide_from_to: true,
        hide_min_max: true,
        onChange: function(data) {
          var result_min = data.from_pretty,
              result_max = data.to_pretty;
          $('.filter__price .price__from').attr('placeholder', result_min);
          $('.filter__price .price__to').attr('placeholder', result_max);
        },
        onStart: function(data) {
          var result_min = data.from_pretty,
              result_max = data.to_pretty;
          $('.filter__price .price__from').attr('placeholder', result_min);
          $('.filter__price .price__to').attr('placeholder', result_max);
        }
    });

$('.btn_minus, .btn_plus').on('click', function(e) {
    e.preventDefault();
  })
});
function showMenu(){
  if ($(window).width()>'768') {
  	$('nav.main__menu').slideDown(200);
  } else {
  	$('.main__btn__menu').removeClass('open');
  	$('nav.main__menu').slideUp(20);
  }
}
function process(v){
  var value = parseInt(document.getElementById('count').value);
  value+=v;
  if(value >= 0) {
    document.getElementById('count').value = value;
  }
}
$(window).on('load resize',showMenu);
