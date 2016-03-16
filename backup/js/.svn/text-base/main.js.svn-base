var junwu = window.junwu || {};
(function () {
	junwu = {
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

var layer = window.layer || {};
(function () {
	layer = {
		black: $('#layer'),

		init: function(){
			var self = this
			self.bind()
		},
		bind: function(){
			var self = this
			self.black.find('.layer_close').on('click', function(event) {
				self.close()
			})
		},
		show: function(i){
			var self = this
			self.black
				.removeClass('hidden')
				.find('.layer_box > *').addClass('hidden')
				.eq(i).removeClass('hidden')
		},
		close: function(){
			var self = this
			self.black
				.addClass('hidden')
		}
	}
})();
$(function(){layer.init()})