$(document).ready(function() {
	slidescroll();
	openMenu();
});


function slidescroll() {
	$('a[href*=#]:not([href=#])').click(function() {
		var hostname = location.hostname == this.hostname;
		var pathname = location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'');
		if (pathname && hostname) {
			var target = $(this.hash);
			targe = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html,body').animate({
					scrollTop: target.offset().top
				}, 200);
				return false;
			}
		}
	});
};

function openMenu() {
	$('#panel > h2').click(function() {
		$('ul').toggleClass('out');
	});
	$('a.menu').click(function() {
		$('ul').toggleClass('out');
	});

};

