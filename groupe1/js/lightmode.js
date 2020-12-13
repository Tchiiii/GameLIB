/*
 * lightmode.js
 * @author Vabre Lucas
 */

// Recupère les 
let lightModeImg = document.getElementById('light-mode');	//Récupère le boutton 'Night mode'
let logoImg = document.getElementById('logo');				//Récupère la balise img du logo

// Recupère les images
let sun = "img/icons/sun.svg";					//Récupère le chemin de l'iconne de soleil
let moon = "img/icons/moon.svg";				//Récupère le chemin de l'iconne de lune
let logoLight = "img/icons/logo-light.svg";		//Récupère le chamin du logo en mode jour
let logoNight = "img/icons/logo-night.svg";		//Récupère le chamin du logo en mode nuit

//Met la page en mode Clair
function SetLightMode(index) { //Index permet de savoir si la page actuelle est index.html ou pas
	document.getElementById('body').className = 'light-theme';
	if (index) {
		lightModeImg.setAttribute("src", sun);
		logoImg.setAttribute("src", logoLight);
	} else {
		lightModeImg.setAttribute("src", "../" + sun);
		logoImg.setAttribute("src", "../" + logoLight);
	}
	
}

//Met la page en mode Sombre
function SetNightMode(index) {
		document.getElementById('body').className = 'dark-theme';
		if (index) {
			lightModeImg.setAttribute("src", moon);
			logoImg.setAttribute("src", logoNight);
		} else {
			lightModeImg.setAttribute("src", "../" + moon);
			logoImg.setAttribute("src", "../" + logoNight);
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