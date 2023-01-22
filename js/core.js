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

	// слaйдер на странице компании
	$('.slider__digitals').slick({
		slidesToScroll:1,
		slidesToShow:10,
		autoplay: true,
		autoplaySpeed: 3000,
		pauseOnHover:true,
		arrows:false,
		dots:false,
		focusOnSelect: true,
		asNavFor: '.slider__digitals_content',
		responsive: [
			{
				breakpoint: 1300,
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

	/*аккордеон*/
	$(".set > .set__btn").on("click", function(){
		if($(this).hasClass('active')) {
			$(this).removeClass("active");
			$(this).siblings('.set__content').slideUp(200);
		}
		else{
			$(".set > .set__btn").removeClass("active");
			$(this).addClass("active");
			$('.set__content').slideUp(200);
			$(this).siblings('.set__content').slideDown(200);
		}
		return false
	});

	/*кастомная кнопка загрузки файлов, выводить имя файла */
    $('input[type="file"]').change(function(e){
        var fileName = e.target.files[0].name;
        $("#name").html(fileName);
    });

    /*кастомный селект городов*/
    // $(".city__btn").on("click", function() {
    // 	if($('.cities__items').css('display') == 'none')
    // 	{
    // 		$('.cities__items').css('display', 'block');
    		$('.cities__item').on("click", function() {
    			var checked__city_id = $(this).attr('id');
    			$('#js-city__btn').html(checked__city_id);
    		});
    // 	}
    // 	else {
    // 		$('.cities__items').css('display', 'none');
    // 	}
    // });
});