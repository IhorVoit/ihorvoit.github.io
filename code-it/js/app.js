<<<<<<< HEAD
$(document).ready(function(){

 $('.advantages').slick({
  slidesToShow: 4,
  arrows: false,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
  {
    breakpoint: 1200,
    settings: {
      slidesToShow: 3
    }
  },
  {
    breakpoint: 992,
    settings: {
      slidesToShow: 2
    }
  },
  {
    breakpoint: 768,
    settings: {
      slidesToShow: 1
    }
  }

  ]
});
 $('.menu_btn').on('click', function(){
  $(this).toggleClass('open');
  $('ul.nav').toggleClass('open');
});

});



//# sourceMappingURL=../maps/app.js.map
=======
$(document).ready(function(){

 $('.advantages').slick({
  slidesToShow: 4,
  arrows: false,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
  {
    breakpoint: 1200,
    settings: {
      slidesToShow: 3
    }
  },
  {
    breakpoint: 992,
    settings: {
      slidesToShow: 2
    }
  },
  {
    breakpoint: 768,
    settings: {
      slidesToShow: 1
    }
  }

  ]
});
 $('.menu_btn').on('click', function(){
  $(this).toggleClass('open');
  $('ul.nav').toggleClass('open');
});

});



//# sourceMappingURL=../maps/app.js.map
>>>>>>> 5789fa1447d0106a345797e29331e116326760e7
