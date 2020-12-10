/*
 * lightmode.js
 * @author Vabre Lucas
 */

// 
let lightModeImg = document.getElementById('light-mode');	//Récupère le boutton 'Night mode'
let pathSun = "img/icons/sun.svg";	//Récupère le chemin de l'iconne de soleil
let pathMoon = "img/icons/moon.svg";	//Récupère le chemin de l'iconne de lune

//Met la page en mode Clair
function SetLightMode(index) { //Index permet de savoir si la page actuelle est index.html ou pas
	document.getElementById('body').className = 'light-theme';
	if (index) {
		lightModeImg.setAttribute("src", pathSun);
	} else {
		lightModeImg.setAttribute("src", "../" + pathSun);
	}
	
}

//Met la page en mode Sombre
function SetNightMode(index) {
		document.getElementById('body').className = 'dark-theme';
		if (index) {
			lightModeImg.setAttribute("src", pathMoon);
		} else {
			lightModeImg.setAttribute("src", "../" + pathMoon);
		}
		
}

// Demarrage de la page
function LightModeOnLoad(index) {
	if (localStorage.getItem('nightMode') == 'true') {
		SetNightMode(index);
	} else {
		SetLightMode(index);
	}
}

// Boutton
function LightModeButton(index) {
	if (document.getElementById('body').className == 'dark-theme') {
		SetLightMode(index);
		localStorage.setItem('nightMode', 'false');
	} else {
		SetNightMode(index);
		localStorage.setItem('nightMode', 'true');
	}
}