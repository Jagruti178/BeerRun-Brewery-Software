(function ($) {
  "use strict";

	 if ($('.back-to-top').length) {
			var scrollTrigger = 100, // px
				backToTop = function() {
					var scrollTop = $(window).scrollTop();
					if (scrollTop > scrollTrigger) {
						$('.back-to-top').addClass('show');
					} else {
						$('.back-to-top').removeClass('show');
					}
				};
			backToTop();
			$(window).on('scroll', function() {
				backToTop();
			});
			$('.back-to-top').on('click', function(e) {
				e.preventDefault();
				$('html,body').animate({
					scrollTop: 0
				}, 700);
			});
	 }
	 
  // Initiate the wowjs animation library
  new WOW().init();

  
  
    // Mobile Navigation
  if ($('.main-nav').length) {
    var $mobile_nav = $('.main-nav').clone().prop({
      class: 'mobile-nav d-lg-none'
    });
    $('body').append($mobile_nav);
    $('.nav-right').prepend('<button type="button" class="mobile-nav-toggle d-lg-none"><i class="fa fa-bars"></i></button>');
    $('body').append('<div class="mobile-nav-overly"></div>');

    $(document).on('click', '.mobile-nav-toggle', function(e) {
      $('body').toggleClass('mobile-nav-active');
      $('.mobile-nav-toggle i').toggleClass('fa-times fa-bars');
      $('.mobile-nav-overly').toggle();
    });
    
    $(document).on('click', '.mobile-nav .drop-down > a', function(e) {
      e.preventDefault();
      $(this).next().slideToggle(300);
      $(this).parent().toggleClass('active');
    });
  }
  
  

// Testimonials carousel (uses the Owl Carousel library)
  $(".testimonials-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    items: 1
  });
  
})(jQuery);

