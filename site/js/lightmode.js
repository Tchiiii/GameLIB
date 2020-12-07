// Récupère le boutton 'Night mode'
let text = document.getElementById('light-mode');

//Enlève le mode Sombre
function SetLightMode() {
	document.getElementById('body').className = 'light-scheme';
	text.innerHTML = 'Mode jour';
}

//Met la page en mode Sombre
function SetNightMode() {
		document.getElementById('body').className = 'dark-scheme';
		text.innerHTML = 'Mode nuit';
}

// Demarrage de la page
function LightModeOnLoad() {
	if (localStorage.getItem('nightMode') == "true") {
		SetNightMode();
	} else {
		SetLightMode();
	}
}

// Boutton
function LightModeButton() {
	if (document.getElementById('body').className == 'dark-scheme') {
		SetLightMode();
		localStorage.setItem('nightMode', "false");
	} else {
		SetNightMode();
		localStorage.setItem('nightMode', "true");
	}
}