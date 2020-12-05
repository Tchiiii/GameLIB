// Data

let game = [
				{
					"id": "g001",
					"name": "Pokémon",
					"price": 50
				},

				{
					"id": "g002",
					"name": "Zelda",
					"price": 50
				},
			];

// Functions to show theses data

function ShowGameAll() {
	document.getElementById('game-list').innerHTML += "id : name : price <br>";
	for (let i = 0; i < game.length; i++) {
		document.getElementById('game-list').innerHTML += game[i].id + " : " + game[i].name + " : " + game[i].price + "<br>";
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