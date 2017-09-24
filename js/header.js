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