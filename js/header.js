var logoCircle = $("#circle")[0];

function changeColor(){
	var colorString = getRandomColor().toString(16);
	logoCircle.style.backgroundColor = "#" + colorString;	
}

function getRandomColor(){
	var randomColor = Math.floor(Math.random() * 0xffffff);
	
	if(randomColor > 0x555555 && randomColor < 0xcccccc) {
		return randomColor;
	}
	else{
		return getRandomColor();	
	}
}

logoCircle.onclick = function(){
	changeColor();
}

var $leftTriangle = $(".triangle-left");
var $rightTriangle = $(".triangle-right");
var $mainContainer = $("#main");
var triangleAspectRatio = 350.0 / 1500.0;
ResizeTriangles();

$(window).on("resize", function(){
	ResizeTriangles();
});

function ResizeTriangles()
{
	var $doc = $(document);
	var triangleWidth = $doc.width();
	var triangleHeight = triangleWidth * triangleAspectRatio;
	
	$leftTriangle.css({ "border-right-width": triangleWidth, "border-bottom-width": triangleHeight });
	$rightTriangle.css({ "border-left-width": triangleWidth, "border-bottom-width": triangleHeight, "top": -triangleHeight });
	$mainContainer.css({ "margin-top": -triangleHeight });
}