var logo = ["L", "i", "b", "e", "r", "t", "y", " ", "V", "i", "c", "e"]
setTimeout(fancyFade, 1000);
navigation()

function navigation() {
	$("li").on("click", function() {
		$('li').off()
		$(".section").fadeOut(200)
		var id = $(this).data("id")
		navbar(id)
	});
}

function navbar(id) {
	setTimeout(navAnimation, 575)

	function navAnimation() {
		$("#" + id).fadeIn()
		navigation()
	}
}

function fancyFade() {
	var i = 0
	function print() {
		$("#logo").append(logo[i]);
		i++
		if (i === 12) {
			clearInterval(printLogo);
			var fadeLogo = setInterval(logoFunction, 40)
			var opacity = 0

			function logoFunction() {
				opacity += .02
				if (opacity > 1) {
					console.log("done")
					clearInterval(fadeLogo)
				}
				console.log(opacity)
					// console.log(opacity )
				$(".navbar").css('opacity', opacity)
			}

		}
	}
	var printLogo = setInterval(print, 75);
}


