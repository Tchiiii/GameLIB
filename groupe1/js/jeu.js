/* 
 * script.js
 * @author Vabre Lucas
 */

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

// Utilisé pour l'affichage de jeu.html
function PageJeu () {
	let dataElement = game[parseInt($_GET["id"])];
}

// Utilisé dans le dev.html pour voir le contenu de data.js
function ShowGameAll() {
	document.getElementById('game-list').innerHTML += '<tr style=\'background-color: var(--overlay-color);\'>'
													  + '<td>id</td>'
													  + '<td>name</td>'
													  + '<td>price</td>'
													  + '<td>isInPromo</td>'
													  + '<td>promo</td>'
													  + '<td>info</td>'
													  + '<td>developper</td>'
													  + '<td>editor</td>'
													  + '<td>classification</td>'
													  + '<td>img1</td>'
													  + '<td>img2</td>'
													  + '<td>img3</td>'
													  +'</tr>';
	for (let i = 0; i < game.length; i++) {
		document.getElementById('game-list').innerHTML += '<tr><td>'
														  + game[i].id
														  + '</td><td>'
														  + game[i].name
														  +'</td> <td>'
														  + game[i].price
														  + '</td><td>'
														  + game[i].isInPromo
														  + '</td><td>'
														  + game[i].promo
														  + '</td><td>'
														  + game[i].info
														  + '</td><td>'
														  + game[i].developper
														  + '</td><td>'
														  + game[i].editor
														  + '</td><td>'
														  + game[i].classification
														  + '</td><td>'
														  + game[i].img1
														  + '</td><td>'
														  + game[i].img2
														  + '</td><td>'
														  + game[i].img3
														  + '</td> </tr>';
	}
}