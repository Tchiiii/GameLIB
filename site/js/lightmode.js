let text = document.getElementById('light-mode');

// Récupère la variable dans l'url
var $_GET = {};
if(document.location.toString().indexOf('?') !== -1) {
    var query = document.location
                   .toString()
                   .replace(/^.*?\?/, '')
                   .replace(/#.*$/, '')
                   .split('&');

    for(var i=0, l=query.length; i<l; i++) {
       var aux = decodeURIComponent(query[i]).split('=');
       $_GET[aux[0]] = aux[1];
    }
}
//console.log($_GET['lightmode']);

if ($_GET['darkmode'] == 'true') {
		document.getElementById('body').className = 'dark-scheme';
		text.innerHTML = 'Mode jour';
} else {
	document.getElementById('body').className = 'light-scheme';
	text.innerHTML = 'Mode nuit';
}

function LightMode() {
	if (document.getElementById('body').className == 'light-scheme') {
		document.getElementById('body').className = 'dark-scheme';
		text.innerHTML = 'Mode nuit';
	} else {
		document.getElementById('body').className = 'light-scheme';
		text.innerHTML = 'Mode jour';
	}
}