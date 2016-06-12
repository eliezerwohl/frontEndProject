var logo = ["F", "r", "a", "n", "k", "'", "s", " ", "M", "o", "m"]
setTimeout(fancyFade, 1000);

function fancyFade(){
var i = 0
function print(){
	 $("#frankLogo").append(logo[i])
	 i++
	 if (i === 11){
	 clearInterval(printLogo)
	}
}
var printLogo = setInterval(print,75);
}


	

// var time = 2000
// for (var i = 0; i < logo.length; i++) {

// 	time += 2000	
// var write = function(){
// 	debugger
//  $("#frankLogo").append(logo[i])
// }

// setTimeout(write, time);
	
// }