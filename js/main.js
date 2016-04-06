var junwu = window.junwu || {};
(function () {
	junwu = {
		swiptInit: function() {
			var self = this,
				oText = $('#swipe_text'),
				oWrap = $('.wrap')
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

					oText.html(oWrap.eq(pos).data('text'))
				}
			});
			var bullets = document.getElementById('position') ? document.getElementById('position').getElementsByTagName('li') : null;
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

	$('.reply_a').click(function(event) {
		var oThis = $(this)
		oThis.parent().next('.reply_box').addClass('show')
	})
	$('.reply_cancel').click(function(event) {
		var oThis = $(this)
		oThis.parent().removeClass('show')
	});

	$('#share_layer').click(function(event) {
		var oThis = $(this)
		oThis.hide()
	});

	$('.comments_box > a').click(function(event) {
		var oThis = $(this),
			oParent = oThis.parent()

		if(oThis.hasClass('show_comments')){
			oParent.addClass('show')
		}else{
			oParent.removeClass('show')
		}
	});

	//显示搜索框
	$('.search_a').click(function(event) {
		$('.search_box').toggleClass('show');
	});

	//加载更多方法
	var oMore = $('#more_items')
	if(oMore.length > 0){
		var sUrl = oMore.data('url'),
			oTarget = $(oMore.data('target'))
		$(window).scroll(function(){
			var scrollTop = $(this).scrollTop();
			var scrollHeight = $(document).height();
			var windowHeight = $(this).height();
			//已滚动到底部
			if(scrollTop + windowHeight == scrollHeight){
				if(oMore.hasClass('loading')){
					return
				}
				oMore.addClass('loading')

				$.ajax({
					url: sUrl,
					type: 'post',
					data: {},
					success: function(data){
						// console.log(data)

						/*
						if(data){
							oTarget.append(data);
						}else{
							oMore.remove()							
						}
						oMore.removeClass('loading')
						*/

						//测试代码，删掉就好。把上边注释掉的代码段打开使用
						setTimeout(function(){
							oTarget.append(sTest);
							oMore.removeClass('loading')
						}, 1500)
					},
					error: function(data){
						// console.log('error: ', data)
						oMore.removeClass('loading')
					}
				})
			}
		});
	}

	//回复ajax方法
	var oReply = $('.reply_submit')
	oReply.click(function(){
		var oThis = $(this),
			oReplyText = oThis.parent().find('textarea'),
			oCommentsBox = oThis.parent().next('.comments_box')
		if(oReplyText.val() == ''){
			alert('请输入回复内容')
			return
		}

		if(oThis.hasClass('loading')){
			return
		}
		oThis.addClass('loading')

		$.ajax({
			url: sUrl,
			type: 'post',
			data: {
				id: oThis.data('id'),
				reply: oReplyText.val()
			},
			success: function(data){
				// console.log(data)

				/*
				if(data){
					oCommentsBox.prepend(data);
				}else{
					oThis.remove()							
				}
				oThis.removeClass('loading')
				*/

				//测试代码，删掉就好。把上边注释掉的代码段打开使用
				setTimeout(function(){
					oCommentsBox.prepend(sTest);
					oThis.removeClass('loading')
				}, 1500)
			},
			error: function(data){
				// console.log('error: ', data)
				oThis.removeClass('loading')
			}
		})
	})

	$('.search_type_a')
		.click(function(event) {
			var oThis = $(this)
			oThis.toggleClass('show');
		})
	.next('.search_type').find('a')
		.click(function(event) {
			var oThis = $(this)
			oThis
				.addClass('current')
				.siblings().removeClass('current')
		});
})();

function share_layer(type){
	var oLayer = $('#share_layer')
	oLayer.find('img').hide()
	oLayer.find('img.share_'+type).show()
	oLayer.show()
}

var sTest = '<div class="test">aaaaa<br />aaaaa<br />aaaaa<br />aaaaa<br /></div>'