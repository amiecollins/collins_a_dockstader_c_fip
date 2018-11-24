// Slideshow effect

// $("#slideshow > div:gt(0)").hide();

// setInterval(functions() {
// 	$("#slideshow > div:first")
// 	.fadeOut(1000)
// 	.next()
// 	.fadeIn(1000)
// 	.end()
// 	.appendTo("#slideshow");
// }, 3000);

var images = ["images/pic1.jpg", "images/pic2.jpg", "images/pic3.jpg"],
	i = 1;

// load images 

for (var j=images.length; j--;) {
	var img = new Image();
	img.src= images[j];
}

// event caller

document.getElementById("slideshow").addEventListener("click", function() {
	this.src = images[i >= images.length - 1 ? i = 0 : ++i];
}, false);
