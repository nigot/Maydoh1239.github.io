document.getElementById("top").innerHTML =
	'<div class="content">' +
		'<h1>MAYDOH1239</h1>' +
	'</div>' +

	'<div class="topnav">' +
		'<a href="index">Home Page</a>' +
		'<div class="dropdown">' +
            '<a href="projects">Projects</a>' +
            '<div class="dropdown-content">' +
                '<a href="civilwar/index">Civil War</a>' +
                '<a href="math/index">Math</a>' +
            '</div>' +
        '</div>' +
		'<a href="about">About</a>' +
	'</div>';

var linkz = document.getElementsByClassName("topnav")[0].children;

for (var i = 0; i < linkz.length; i++) {
    if (linkz[i].href.replace(".html", "") === window.location.href.replace("#top", "").replace(".html", "")) {
        linkz[i].classList.add('active');
    } else if (linkz[i].className === "dropdown") {
        if (linkz[i].children[0].href === window.location.href){
            linkz[i].children[0].classList.add('active');
        }
    }
}