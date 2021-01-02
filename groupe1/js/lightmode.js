/*
 * lightmode.js
 *
 * Script qui gère le module d'affichage sombre / clair
 * 
 * @author Vabre Lucas
 */


/* Initialisation des variables */
let lightModeImg = document.getElementById('light-mode');	// boutton 'Night mode'
let mainColorImg = document.getElementById('maincolor-mode');
let logoImg = document.getElementById('logo');				// balise img du logo

var sun = "img/icons/sun.svg";					// iconne de soleil
var moon = "img/icons/moon.svg";				// iconne de lune
var logoLight = "img/icons/logo-light.svg";		// logo en mode jour
var logoNight = "img/icons/logo-night.svg";		// logo en mode nuit
var engrenageLight = "img/icons/engrenage-light.svg";
var engrenageNight = "img/icons/engrenage-night.svg";

/**
 * Fonction qui permet de mettre la page
 * en mode clair.
 * @param isIndex : boolean si cette fonction
 *					est executé dans index.html => true
 */
function SetLightMode(isIndex) {
	document.body.className = 'light-theme';
	if (isIndex) {
		lightModeImg.setAttribute("src", sun);
		mainColorImg.setAttribute("src", engrenageLight);
		logoImg.setAttribute("src", logoLight);
	} else {
		lightModeImg.setAttribute("src", "../" + sun);
		mainColorImg.setAttribute("src", "../" + engrenageLight);
		logoImg.setAttribute("src", "../" + logoLight);
	}
}

/**
 * Fonction qui permet de mettre la page
 * en mode sombre.
 * @param isIndex : boolean si cette fonction
 *					est executé dans index.html => true
 */
function SetNightMode(isIndex) {
		document.body.className = 'dark-theme';
		if (isIndex) {
			lightModeImg.setAttribute("src", moon);
			mainColorImg.setAttribute("src", engrenageNight);
			logoImg.setAttribute("src", logoNight);
		} else {
			lightModeImg.setAttribute("src", "../" + moon);
			mainColorImg.setAttribute("src", "../" + engrenageNight);
			logoImg.setAttribute("src", "../" + logoNight);
		}
		
}

/**
 * Fonction qui verifie la valeur stockée localement
 * et met la page en mode sombre ou claire suivant la valeur
 * @param {boolean} isIndex : index.html => true
 */
function LightModeOnLoad(isIndex) {
	if (localStorage.getItem('nightMode') == 'true') {
		SetNightMode(isIndex);
	} else {
		SetLightMode(isIndex);
	}
}

// Boutton
/**
 * Fonction executé lors que le boutton
 * jour/nuit (soleil/lune) est pressé
 * @param {boolean} isIndex : index.html => true
 */
function LightModeButton(isIndex) {
	if (document.body.className == 'dark-theme') {
		SetLightMode(isIndex);
		localStorage.setItem('nightMode', 'false');
	} else {
		SetNightMode(isIndex);
		localStorage.setItem('nightMode', 'true');
	}
}