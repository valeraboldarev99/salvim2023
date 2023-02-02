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
					slidesToShow:7,
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

	// cookie asker
	function setCookie(name, value, days) {
		let expires = "";
		if (days) {
			let date = new Date();
			date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
			expires = "; expires=" + date.toUTCString();
		}
		document.cookie = name + "=" + (value || "") + expires + "; path=/";
	}
	function getCookie(name) {
		let matches = document.cookie.match(new RegExp("(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"));
		return matches ? decodeURIComponent(matches[1]) : undefined;
	}
	function checkCookies() {
		let cookieNote = document.getElementById('cookie__note'); //окно cookie
		let cookieBtnAccept = cookieNote.querySelector('.cookie__accept'); //кнопка согласия
		// Если куки cookies_policy нет или она просрочена, то показываем уведомление
		if (!getCookie('cookies_policy')) {
			cookieNote.classList.add('show'); //класс для показа/скрытия окна куки
		}
		// При клике на кнопку устанавливаем куку cookies_policy на один год
		cookieBtnAccept.addEventListener('click', function () {
			setCookie('cookies_policy', 'true', 365);
			cookieNote.classList.remove('show'); //класс для показа/скрытия окна куки
		});
	}
	checkCookies();
	// end cookie asker

	/*кастомный селект городов*/
	$('.cities__item').on("click", function() {
		var checked__city_id = $(this).attr('id');
		$('#js-city__btn').html(checked__city_id);
	});

	/*кастомная кнопка загрузки файлов, выводить имя файла */
	$('.js_career_file').change(function(e){
		var fileName = e.target.files[0].name;
		$("#file__name").html(fileName);
	});
});