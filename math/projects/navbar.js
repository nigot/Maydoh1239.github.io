document.getElementById("top").innerHTML =
	'<div class="content">' +
		'<h1>MATH PROJECTS</h1>' +
	'</div>' +

	'<div class="topnav">' +
		'<a href="../index">All Math</a>' +
		'<a href="../desmos">Desmos</a>' +
        '<a href="../../about">About</a>' +
        '<a href="../../index" class="home" style="float: right;">Home</a>' +
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
