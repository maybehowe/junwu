(function () {
	var junwu = {
		swiptInit: function() {
			var self = this;
			window.mySwipe = Swipe(document.getElementById('slider'), {
				startSlide: 0,
				speed: 400,
				auto: 3000,
				continuous: true,
				disableScroll: false,
				stopPropagation: false,
				callback: function(pos) {
					var i = bullets.length;
					while (i--) {
						bullets[i].className = ' ';
					}
					bullets[pos].className = 'on';
				}
			});
			var bullets = document.getElementById('position').getElementsByTagName('li');
		},
		showNavlist: function () {
			$('.nav_list_wrap').animate({
				'top': 0
			},'fast')
		},
		hideNavlist: function () {
			$('.nav_list_wrap').animate({
				'top': '-600px'
			},'fast')
		}
	};

	$('.menu_btn').on('click', function () {
		junwu.showNavlist();
	});

	$('.nav_close').on('click', function () {
		junwu.hideNavlist();
	});

	
})();