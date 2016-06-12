// $("navLogo").hide();
var logo = ["L", "i", "b", "e", "r", "t", "y", " ", "V", "i", "c", "e"]
setTimeout(fancyFade, 1000);

$("#demos").on("click", function(){
	$(".section").fadeOut()
	setTimeout(demoGo, 500)
	function demoGo(){
	$("#demosSection").fadeIn()
	}
})

function fancyFade(){

var i = 0
function print(){
	 $("#logo").append(logo[i]);
	 i++
	 if (i === 12){
	 clearInterval(printLogo);
		var fadeLogo = setInterval(logoFunction,40)
		var opacity = 0
		function logoFunction(){
		opacity += .02
			if (opacity > 1){
			console.log("done")
			clearInterval(fadeLogo)
		}
		console.log(opacity)
	// console.log(opacity )
	$(".navbar").css('opacity', opacity)
}

	}
}
var printLogo = setInterval(print,75);
}


		// $("a").removeClass("selected")
	// $(this).addClass("selected")


