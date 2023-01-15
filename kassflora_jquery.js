
function indexMedium(size){
let button = document.getElementById('openbtn');
let nav_icon=document.getElementById('nav-icons');
if (button !== null) {
	if (size.matches) 
	{
		button.style.display ="block";
		nav_icon.style.display="none";
		$('#openbtn').addClass('container-fluid');
		$('#logo').removeClass('center');


	}
	else
	{
		button.style.display="none";
		nav_icon.style.display="block";
		$('#openbtn').removeClass('container-fluid');
		$('#logo').addClass('center');
	}
}
}

var size = window.matchMedia("(max-width:658px)");
indexMedium(size);
size.addListener(indexMedium);

function openNav()
{
	let sidebar = document.getElementById('mySidebar');
  document.getElementById("mySidebar").style.width = "250px";
}

function closeNav() 
{
	let sidebar = document.getElementById('mySidebar');
  document.getElementById("mySidebar").style.width = "0";
}	

function indexSmall(s_size)
{
	if (s_size.matches) 
	{
		$('#logo').addClass('center');
	}
	else
		$('#logo').removeClass('center');
}


var s_size=window.matchMedia("(max-width:360px)");
indexSmall(s_size);
s_size.addListener(indexSmall)

function indexSmall2(s_size2)
{
	if (s_size2.matches) 
	{
		$('#sign').addClass('center');
	}
	else
		$('#sign').removeClass('center');
}


var s_size2=window.matchMedia("(max-width:360px)");
indexSmall2(s_size2);
s_size2.addListener(indexSmall2)
