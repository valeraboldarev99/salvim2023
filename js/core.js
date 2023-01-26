$(document).ready(function () {
	// слaйдер на главной
	$('.slider').slick({
		slidesToScroll:1,
		slidesToShow:1,
		autoplay: true,
		// appendArrows:'.slider-arrows',
		autoplaySpeed: 3000,
		pauseOnHover:true,
		arrows:false,
		dots:true,
		responsive: [
			{
				breakpoint: 767,
				settings: {
					arrows:false,
				}
			}
		]
	});

	// модалка
	$('[data-fancybox=""]').fancybox({
		focus: false
	 });

	/*мобильное меню*/
	var mobileSidebar = function()
	{
		function obj()
		{
			var self = this;
			self.animSpeed = 400;
			self.init = function()
			{
				self.events();
			},
			self.events = function()
			{
				$('.sidebar-open').click(function() {
					self.open();
				});
				$('.sidebar-close, .sidebar-overlay').click(function() {
					self.close();
				});
			},
			self.open = function()
			{
				$('.sidebar').addClass('sidebar_opened');
				$('.sidebar-overlay').fadeIn(self.animSpeed);
				// pageScroll.hide(1);
			},
			self.close = function()
			{
				$('.sidebar').removeClass('sidebar_opened');
				$('.sidebar-overlay').fadeOut(self.animSpeed);
				// pageScroll.show(0);
			}
		}
		return new obj();
	}();
	mobileSidebar.init();

	// слaйдер на странице компании
	$('.slider__digitals').slick({
		slidesToScroll:1,
		slidesToShow:9,
		autoplay: true,
		autoplaySpeed: 3000,
		pauseOnHover:true,
		arrows:false,
		dots:false,
		focusOnSelect: true,
		centerMode: true,
		asNavFor: '.slider__digitals_content',
		responsive: [
			{
				breakpoint: 1600,
				settings: {
					slidesToShow:8,
					arrows:false,
				}
			},
			{
				breakpoint: 1500,
				settings: {
					slidesToShow:6,
					arrows:false,
				}
			},
			{
				breakpoint: 1200,
				settings: {
					slidesToShow:5,
					arrows:false,
				}
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow:3,
					arrows:false,
					centerMode: false,
				}
			}
		]
	});

	$('.slider__digitals_content').slick({
	    slidesToShow: 1,
	    slidesToScroll: 1,
	    arrows: false,
	    dots:false,
	    draggable:false,
	    // autoplay: true,
	    fade: true,
	    asNavFor: '.slider__digitals'
	});


});