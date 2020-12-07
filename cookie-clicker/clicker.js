let score = 0;
let upgrades = [
					{
						"name": "Auto-click",
						"price": 15,
						"level": 0,
						"number": 1
					}
				]
var interval;

function Initialisation() {
	document.getElementById("price-1").innerHTML = upgrades[0].price;
	document.getElementById("level-1").innerHTML = upgrades[0].level;
	document.getElementById("persecond").innerHTML = (upgrades[0].number -1) + '/sec';
}

function OneCookie() {
	score++;
	document.getElementById('score').innerText = score;
}

function Buy(price, count, sec) {
	if (score >= price) {
		score -= price;
		document.getElementById('score').innerText = score;
		Autoclick(count, sec);

		upgrades[0].price *= 2;
		upgrades[0].level += 1;
		upgrades[0].number *= 2;
		document.getElementById("icon-1").innerHTML = '<img src="icon.webp" width="25px" height="25px" onclick="Buy('
													  + upgrades[0].price
													  + ',' + upgrades[0].number
													  + ',1)">';
		Initialisation();
	} else {
		console.log("Pas assez de cookies !")
	}
}

function Autoclick(count, sec) {
	clearInterval(interval);
	interval = setInterval("OneCookie()", (sec / count) * 1000 );
}
