$(function(){
	$('.binary-top__link').click(function(){
		$('html, body').animate({scrollTop: ($(window).height())}, 2000);
		return false;
	});
	$('.binary-top__arrow').click(function(){
		$('html, body').animate({scrollTop: ($(window).height())}, 2000);
		return false;
	});
	$('.about-nav__item_link').click(function(){
		if ($(this).text() == 'ABOUT US') {
			$('html, body').animate({scrollTop: $('.about').offset().top}, 550);
		}
		else if ($(this).text() == 'PORTFOLIO') {
			console.log($('.portfolio'))
			$('html, body').animate({scrollTop: $('.portfolio').offset().top}, 550);
		}
		else if ($(this).text() == 'CONTACT') {
			$('html, body').animate({scrollTop: $('section.contact').offset().top}, 550);
		}
		return false;
	});
});
function ibg() {
	$.each($('.ibg'), function (index, value) {
		if ($(this).find('img')) {
			$(this).css('background-image', 'url("' + $(this).find('img').attr('src') + '")');
			$(this).find('img').css('opacity', '0')
		}
	})
}
ibg();
$('.portfolio-nav-images__additionally').css({
	'display': 'none'
})
$('.portfolio__link').click(function(argument) {
	$(this).toggleClass('active').prev().slideToggle(300);
	if ( $('.portfolio__link').text() == 'READ MORE') {
		$('.portfolio__link').children().text('BACK');
		$('.portfolio-nav-images').css({
			'margin-bottom': 0
		})
	} else {
		$('.portfolio__link').children().text('READ MORE');
		$('.portfolio-nav-images').css({
			'margin-bottom': '48px'
		})
	}
})

let additionally_quantity = $('.portfolio-nav-images__additionally').children().length;
$('.portfolio-nav__link').click(function (){
	let item = $(this).text();
	$('.portfolio-nav__link').removeClass('active');
	$(this).addClass('active');
	if(item == 'WEB') {
		$('.portfolio-nav-images__wrapper').removeClass('active');
		$('.web').addClass('active');
	} else if (item == 'APPS') {
		$('.portfolio-nav-images__wrapper').removeClass('active');
		$('.apps').addClass('active');
	} else if (item == 'OTHER') {
		$('.portfolio-nav-images__wrapper').removeClass('active');
		$('.other').addClass('active');
	} else if (item == 'ALL'){
		$('.portfolio-nav-images__wrapper').removeClass('active');
		$('.portfolio-nav-images__wrapper').addClass('active');
	}
	checking_quantity();
});
function checking_quantity() {
	let all_quantity = $('.portfolio-nav-images').children('.active').length + $('.portfolio-nav-images__additionally').children('.active').length;
	if (all_quantity < 7) {
		$('.portfolio__link').css({'display':'none'});
		$('.portfolio-nav-images').append($('.portfolio-nav-images__additionally').children('.active'));
	} else {
		$('.portfolio__link').css({'display':'block'});
		if ($('.portfolio-nav-images').children().length > 6) {
			$('.portfolio-nav-images__additionally').append($('.portfolio-nav-images').children(`.portfolio-nav-images__wrapper:nth-last-child(-n+${additionally_quantity})`));
		}
	}
}

const popupLinks = $('.popup-link');
const body = $('body');
const lockPadding = $('.lock-padding');
const closeLinks = $('.close-popup');
const scrollbarWidth = $(window).outerWidth() - $(document).innerWidth();

let popupLinkClick;

popupLinks.click(function () {
	if (screen.width > 560) {
		popupLinkClick = $(this);
		const currentPopup = $(popupLinkClick.attr('href'));
		popupOpen(currentPopup);
	}
});
closeLinks.click(function () {
	const currentPopup = popupLinkClick.attr('href');
	popupClose(currentPopup);
});
function popupOpen(currentPopup) {
	$(currentPopup).addClass('open');
	body.css({
		'overflow': 'hidden',
		'padding-right': scrollbarWidth
	});
}
function popupClose(currentPopup) {
	$(currentPopup).removeClass('open');
	body.css({
		'overflow': 'auto',
		'padding-right': '0'
	});
}