var navbar, brand, yPos;

navbar = document.getElementById('navbar-custom');
brand = document.getElementsByClassName('navbar-brand');
brandAlt = document.getElementById('brand-alt');

var navlinks = [];

var temp = document.getElementsByClassName('nav-link-alt');

for(var i = 0; i < temp.length; i++)
{
	navlinks.push(temp[i]);
}


function yScroll()
{
	
	yPos = window.pageYOffset;
	
	if(yPos > 350)
	{
		navbar.style.backgroundColor = "white";
		brand[0].style.opacity = "1";
		brand[1].style.opacity = "1";
		
		for(var i = 0; i < navlinks.length; i++)
		{
			var navlink = navlinks[i];
			navlink.className = "nav-link";
		}
	} 
	else 
	{
		navbar.style.backgroundColor = "transparent";
		brand[0].style.opacity = "0";
		brand[1].style.opacity = "0";
		
		for(var i = 0; i < navlinks.length; i++)
		{
			var navlink = navlinks[i];
			navlink.className = "nav-link nav-link-alt";
			console.log("should be the original class name now!!");
		}
		
	}
}

window.addEventListener("scroll", yScroll);