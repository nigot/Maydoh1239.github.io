document.getElementById("top").innerHTML =
	'<div class="content">' +
		'<h1>CIVIL WAR</h1>' +
	'</div>' +

	'<div class="topnav">' +
		'<a href=\"https://nichodon.github.io\">Home</a>' +
		'<a href=\"../fractals\">Fractals</a>' +
		'<a href=\"../programming.html\">Programming</a>' +
		'<a href=\"../coming_soon\">Calculators</a>' +
		'<a href=\"../coming_soon\">More Math</a>' +
		'<a href=\"../coming_soon\">Worksheets</a>' +
		'<a href=\"../about.html\">About</a>' +
	'</div>';

var linkz = document.getElementsByClassName("topnav")[0].children;

for (var i = 0; i < linkz.length; i++) {
    if (linkz[i].href === window.location.href) {
        linkz[i].classList.add('active');
    } else if (linkz[i].className === "dropdown") {
        if (linkz[i].children[0].href === window.location.href){
            linkz[i].children[0].classList.add('active');
        }
    }
}