/* 
 * jeu.js
 *
 * Script qui manipule les données des jeux
 * contenues dans data.js
 *  
 * @author Vabre Lucas, Serieys Lucas
 */


/* Fonction qui récupère les variables/valeurs dans l'URL */
let $_GET = {};
if(document.location.toString().indexOf('?') != -1) {
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

/**
 * Fonction qui permet le bon affichage de jeu.html
 * en récuperant la variable id dans l'url, puis en
 * affichant les elements du jeu (de cet id) sur les
 * element de la page
 */
function PageJeu () {
	let gameElement = game[parseInt($_GET["id"])];

	/* Elements textes */
	document.getElementById("game-title-0").innerHTML += gameElement.name ;
	document.getElementById("game-title-1").innerHTML = gameElement.name ;
	document.getElementById("game-title-2").innerHTML = gameElement.name ;
	document.getElementById("game-description").innerHTML = gameElement.info ;
	document.getElementById("dev").innerHTML = gameElement.developper;
	document.getElementById("editor").innerHTML = gameElement.editor;
	document.getElementById("pegi").innerHTML = gameElement.classification;

	/* Images */
	document.getElementById("picture-ingame").style.backgroundImage = "url('../" + gameElement.ingame + "')";	// Image sous la vidéo
	document.getElementById("picture-logo").style.backgroundImage = "url('../" + gameElement.logo + "')";
	document.getElementById("video").src = "https://www.youtube.com/embed/" + gameElement.video + "?mute=1&autoplay=1";	// Lien de la video
	
	/* Prix */
	if (gameElement.price == 0) {
		document.getElementById("price").innerHTML = '';
		document.getElementById("pay-button").value = 'Jouer';
	} else {
		if (gameElement.isInPromo) {
			document.getElementById("price").innerHTML = ((1 - gameElement.promo / 100) * gameElement.price ).toFixed(2) + " €";
		} else {
			document.getElementById("price").innerHTML = gameElement.price + " €";
		}
		document.getElementById("pay-button").value = 'Acheter'
	}
}

/**
* Fonction qui permet d'afficher sous forme de tableaux
* toutes les données stockées dans data.js.
* Utilisé en tant que commande de débugage,
* c'est pourquoi elle figure uniquement dans dev.html
*/
function ShowGameAll() {
	document.getElementById('game-list').innerHTML += '<tr style="background-color: var(--overlay-color);">'
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
	for (let i = 0; i < game.length; i++) { // Affiche autant de lignes que d'elements dans la liste game
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
														  + game[i].imgHorizontal
														  + '</td><td>'
														  + game[i].imgVertical
														  + '</td><td>'
														  + game[i].ingame
														  + '</td> </tr>';
	}
}


/**
 * Affiche tout les jeux
 * Utilisé dans listeJeux.html
 */
function ShowGameList() {
	var element = document.getElementById('test');
	let price;
	let link;
	let image;

	for (let i = 0; i < game.length; i++) {
		link = "jeu.html?id=" + game[i].id;
		image = "../" + game[i].imgHorizontal;
		if (game[i].isInPromo) {
			price = ((1 - game[i].promo / 100) * game[i].price ).toFixed(2);
		} else {
			price = game[i].price
		}

		element.innerHTML += '<tr><th>' + game[i].id + '</th>'
							 +'<td style="padding-top:10px;"><a href="'
							 + link + '"><img style="width:300px; border-radius:5px;" draggable="false" src="'
							 + image + '"/></a></td>'
				   			 + '<td><h3 style="text-align: center"><a href="' + link + '">' + game[i].name + '</a></h3></td>'
							 + '<td><p style="text-align: center">' + game[i].developper + '</p></td>'
							 + '<td><p style="text-align: right;">' + price + '€</p></td></tr>'
							 + '<tr><td colspan="5"><hr></td></tr>'
	}
}

/**
 * Fonction qui permet d'automatiser la création de "cartes"
 * sur la page index.html.
 * 
 * @param card : l'élement cible qui a la classe "card"
 * @param disposition : deux valeurs possibles "vertical" ou "horizontal"
 *                      permet de produire une carte verticale ou horizontale
 * @param id : Valeur de l'id du jeu (voir dans data.js)
 * @param isIndex : boolean si cette fonction
 *					est executé dans index.html => true
 */
function CreateCard(card, disposition, id, isIndex) {
	let indexConvertor = [2];
	let link;
	let gamePricePromo;
	let priceShow;
	let image;

	image = (disposition == "vertical") ? game[id].imgVertical
										: game[id].imgHorizontal;

	if (isIndex) {
		indexConvertor[0] = "html\\";
		indexConvertor[1] = "";
	} else {
		indexConvertor[0] = "";
		indexConvertor[1] = "..\\";
	}
	link = indexConvertor[0] + "jeu.html?id=" + id;

	/* Calcul de l'éventuelle promotion */
	gamePricePromo = 0.0;
	if(game[id].isInPromo) {
		gamePricePromo = ((1 - game[id].promo / 100) * game[id].price ).toFixed(2); // arrondir à 2 chiffres après la virgule
	}

	/* Stockage de la partie "prix" */
	if (game[id].isInPromo) {/* Gestion de la promotion */
		priceShow = '<span class="tag">-' + game[id].promo + '%</span>'
					+ '<strike> ' + game[id].price +'€</strike> '
					+ gamePricePromo + '€</p></div></div>'
	} else if(game[id].price == 0) { /* Si le jeu est gratuit */
		priceShow = 'Gratuit</p></div></div>';
	} else {
		priceShow = game[id].price + '€</p></div></div>';
	}

	/* Remplissage de la carte */
	card.innerHTML += '<a href="' + link + '" class="card-picture ' + disposition + '">'
					  + '<img draggable="false" src="' + indexConvertor[1] + image + '">'
					  + '</a>'
					  + '<div class="card-info">'
					  + '<a href="' + link + '"><h3 class="card-title">' + game[id].name + '</h3></a>'
					  + '<h4 class="card-editor">' + game[id].editor + '</h4>'
					  + '<p class="card-price">'
					  + priceShow;
}