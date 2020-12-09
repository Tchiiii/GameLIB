/*
 * cliker.js
 * @author Vabre Lucas
 */

let score = 0;
let upgrades = [
					{
						"name": "Auto-click",
						"price": 15,
						"level": 0,
						"number": 0
					}
				]
var interval;

function Initialisation() {
	document.getElementById("price-1").innerHTML = upgrades[0].price;
	document.getElementById("level-1").innerHTML = upgrades[0].level;
	document.getElementById("persecond").innerHTML = (upgrades[0].number) + '/sec';
}

function OneCookie(number) {
	score += number;
	document.getElementById('score').innerText = score;
}

function Buy(price) {
	if (score >= price) {
		score -= price;
		document.getElementById('score').innerText = score;

		upgrades[0].price *= 2;
		upgrades[0].level += 1;
		if (upgrades[0].number == 0) {
			upgrades[0].number = 1;
		} else {
			upgrades[0].number *= 2;
		}

		Autoclick(upgrades[0].number);
		document.getElementById("icon-1").innerHTML = '<img src="../img/icons/cookie.webp" width="25px" height="25px" onclick="Buy('
													  + upgrades[0].price
													  + ',' + upgrades[0].number
													  + ')">';
		Initialisation();
	} else {
		console.log("Pas assez de cookies !")
	}
}

function Autoclick(count) {
	clearInterval(interval);
	interval = setInterval("OneCookie(" + count + ")", 1000 );
}
