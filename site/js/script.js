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

function ShowGameAll() {
	document.getElementById('game-list').innerHTML += "<tr style='background-color: var(--overlay-color);'><td>id</td><td>name</td><td>price</td></tr>";
	for (let i = 0; i < game.length; i++) {
		document.getElementById('game-list').innerHTML += "<tr><td>" + game[i].id + "</td><td>" + game[i].name + "</td> <td>" + game[i].price + "</td> </tr>";
	}
}

function ShowGameId() {
	for (let i = 0; i < game.length; i++) {
		document.getElementById('game-list').innerHTML += game[i].id + " ";
	}
}

function ShowGameName() {
	for (let i = 0; i < game.length; i++) {
		document.getElementById('game-list').innerHTML += game[i].name + " ";
	}
}