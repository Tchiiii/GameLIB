/* 
 * jeu.js
 *
 * Script qui manipule les données des jeux
 * contenues dans data.js
 *  
 * @author Vabre Lucas, Serieys Lucas
 */


/**
 * Fonction qui récupère
 * les variables/valeurs dans l'URL
 */
function GetUrl() {	
	let $_GET = {};	// Creer l'objet GET
	if(document.location.toString().indexOf('?') != -1) {	// Verifie si il y a un ? dans l'url
		var query = document.location	// Modifie quelques caractères qui pourrais être mal interprété
							.toString()
							.replace(/^.*?\?/, '')
							.replace(/#.*$/, '')
							.split('&');

		/* Tout ce qu'il se trouve apres le ? va etre traité */
		for(var i=0, l=query.length; i<l; i++) {
			var aux = decodeURIComponent(query[i]).split('=');	// Ce qu'il y a gauche de l'égal est le nom de la variable
			$_GET[aux[0]] = aux[1];								// et ce qu'il a a droite est la valeur de celle-ci
		}
	}
}

/**
 * Fonction qui calcule la promotion
 * @param {Double} promoValue : Le pourcentage de la promotion
 * @param {int} price 		  : Le prix original de la promo
 */
function CalcPromo(promoValue, price) {
	return ((1 - promoValue / 100) * price ).toFixed(2)
}

/**
 * Créer plus facilement et lisiblement une balise <tr></tr>
 * @param {String} argument : Contenu du tr
 * @param {String} style    : Style utilisé
 */
function MakeTr(argument, style) {
	return ('<tr style="' + style + '"">' + argument + '</tr>');
}

/**
 * Créer plus facilement et lisiblement une balise <td></td>
 * @param {String} argument : Contenu du td
 */
function MakeTd(argument) {
	return ('<td>' + argument + '</td>');
}

/**
 * Fonction qui permet le bon affichage de jeu.html
 * en récuperant la variable id dans l'url, puis en
 * affichant les elements du jeu (de cet id) sur les
 * element de la page
 */
function PageJeu () {

	/* Initialisation des variables */
	GetUrl();
	let gameElement = game[parseInt($_GET["id"])];

	/* Elements textes */
	let title1 = document.getElementById("game-title-0").innerHTML;
	let title2 = document.getElementById("game-title-1").innerHTML;
	let title3 = document.getElementById("game-title-2").innerHTML;
	let description = document.getElementById("game-description").innerHTML;
	let developper = document.getElementById("dev").innerHTML;
	let editor = document.getElementById("editor").innerHTML;
	let pegi = document.getElementById("pegi").innerHTML;
	let price = document.getElementById("price").innerHTML;
	let payButton = document.getElementById("pay-button").value;

	/* Images */
	let ingame = document.getElementById("picture-ingame").style.backgroundImage = "url('../" + gameElement.ingame + "')";	// Image sous la vidéo
	let gameLogo = document.getElementById("picture-logo").style.backgroundImage = "url('../" + gameElement.logo + "')";
	let video = document.getElementById("video").src = "https://www.youtube.com/embed/" + gameElement.video + "?mute=1&autoplay=1";	// Lien de la video
	
	/* Affectation des elements */
	title1 += gameElement.name;
	title2 = gameElement.name;
	title3 = gameElement.name;
	description = gameElement.info;
	developper = gameElement.developper;
	editor = gameElement.editor;
	pegi = gameElement.classification;

	/* Prix */
	if (gameElement.price == 0) {
		price = '';
		payButton = 'Jouer';
	} else {
		if (gameElement.isInPromo) {
			price = CalcPromo(gameElement.promo,gameElement.price) + " €";
		} else {
			price = gameElement.price + " €";
		}
		payButton = 'Acheter'
	}
}

/**
* Fonction qui permet d'afficher sous forme de tableaux
* toutes les données stockées dans data.js.
* Utilisé en tant que commande de débugage,
* c'est pourquoi elle figure uniquement dans dev.html
*/
function ShowGameAll() {
	document.getElementById('game-list').innerHTML = MakeTr(MakeTd('id')
															+ MakeTd('name') 
															+ MakeTd('price') 
															+ MakeTd('isInPromo') 
															+ MakeTd('promo') 
															+ MakeTd('info') 
															+ MakeTd('developper') 
															+ MakeTd('editor') 
															+ MakeTd('classification') 
															+ MakeTd('imgHorizontal') 
															+ MakeTd('imgVertical') 
															+ MakeTd('ingame') 
															+ MakeTd('video'),
															'background-color: var(--overlay-color)'
															);
	for (let i = 0; i < game.length; i++) { // Affiche autant de lignes que d'elements dans la liste game
		document.getElementById('game-list').innerHTML += MakeTr(MakeTd(game[i].id)
														  		 + MakeTd(game[i].name)
														  		 + MakeTd(game[i].price)
														  		 + MakeTd(game[i].isInPromo)
														  		 + MakeTd(game[i].promo)
														  		 + MakeTd(game[i].info)
														  		 + MakeTd(game[i].developper)
														  		 + MakeTd(game[i].editor)
														  		 + MakeTd(game[i].classification)
														  		 + MakeTd(game[i].imgHorizontal)
														  		 + MakeTd(game[i].imgVertical)
														  		 + MakeTd(game[i].ingame)
														  		 + MakeTd(game[i].video));

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