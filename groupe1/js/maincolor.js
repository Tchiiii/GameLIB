/*
 * maincolor.js
 *
 * @author Vabre Lucas
 */

/**
 *
 * @param {String} color : blue / green / purple / red
 */
function SetMainColor(color) {
let colorNow = document.getElementById('color-set');

	if (color == "blue") {
		colorNow.className = "main-blue";
		localStorage.setItem('color', 'blue');
	} else if (color == "green") {
		colorNow.className = "main-green";
		localStorage.setItem('color', 'green');
	} else if (color == "purple") {
		colorNow.className = "main-purple";
		localStorage.setItem('color', 'purple');
	} else if (color == "red") {
		colorNow.className = "main-red";
		localStorage.setItem('color', 'red');
	} else {
		alert("Erreur: la couleur ne peut pas être mise à jour !");
	}
}

function MainColorOnLoad() {
	if (localStorage.getItem('color') == 'green') {
		SetMainColor("green");
	} else if (localStorage.getItem('color') == 'purple') {
		SetMainColor("purple");
	} else if (localStorage.getItem('color') == 'red') {
		SetMainColor("red");
	} else {
		SetMainColor("blue");
	}
}