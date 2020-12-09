/*
 * lightmode.js
 * @author Vabre Lucas
 */

// Récupère le boutton 'Night mode'
let text = document.getElementById('light-mode');

//Met la page en mode Clair
function SetLightMode() {
	document.getElementById('body').className = 'light-theme';
	text.innerHTML = 'Mode jour';
}

//Met la page en mode Sombre
function SetNightMode() {
		document.getElementById('body').className = 'dark-theme';
		text.innerHTML = 'Mode nuit';
}

// Demarrage de la page
function LightModeOnLoad() {
	if (localStorage.getItem('nightMode') == 'true') {
		SetNightMode();
	} else {
		SetLightMode();
	}
}

// Boutton
function LightModeButton() {
	if (document.getElementById('body').className == 'dark-theme') {
		SetLightMode();
		localStorage.setItem('nightMode', 'false');
	} else {
		SetNightMode();
		localStorage.setItem('nightMode', 'true');
	}
}