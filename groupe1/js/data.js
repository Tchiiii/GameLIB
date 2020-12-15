/*
 * data.js
 * @author Vabre Lucas, Serieys Lucas
 */

let game = [
				{
					'id': 0,
					'name': 'World of Tanks',
					'price': 0,
					'isInPromo': false,
					'promo': 0,
					'info': 'Pilotez les chars les plus puissants de l\'Histoire dans un jeu de guerre épique massivement multijoueur où c\'est vous qui commandez. Vous pouvez entièrement personnaliser et contrôler plus de 700 chars de 12 nations différentes. Testez vos compétences contre des adversaires contrôlés par l\'ordinateur dans le mode Proving Grounds, puis passez en ligne, formez un peloton avec vos amis et menez vos véhicules à la victoire.',
					'developper': 'Wargaming Minsk',
					'classification': 'pegi 7',
					'editor': 'Wargaming.net',
					'img': 'img/games/card/wot.png'
				},

				{
					'id': 1,
					'name': 'Among Us',
					'price': 3.99,
					'isInPromo': false,
					'promo': 0,
					'info': 'Le jeu se déroule dans un vaisseau spatial qui contient un équipage de maximum 10 personnes et de minimum 4 personnes pour commencer la partie. Il y a deux types de rôle dans ce jeu : Les imposteurs (au nombre 1 à 3) sont les ennemis et doivent tuer tous les joueurs sans se faire repérer ; l\'imposteur peut aussi saboter les tâches des joueurs et se cacher dans les canalisations.Les crewmates sont les innocents dont le but est de réaliser des tâches sur la carte mais également de trouver un corps lors de potentiels meurtres.',
					'developper': 'InnerSloth',
					'classification': 'pegi 16',
					'editor': 'InnerSloth',
					'img': 'img/games/card/amongus.jpg'
				},

				{
					'id': 2,
					'name': 'Dragonica',
					'price': 0,
					'isInPromo': false,
					'promo': 0,
					'info': 'Dragonica est un MMORPG  gratuit en 3D à défilement latéral au style arcade, dans un monde de dragons et de magie. Choisissez l\'une des six classes (Guerrier, Mage, Voleur, Archer, Chaman et Amazone) et explorez un monde riche rempli de monstres uniques. Augmentez votre puissance pour débloquer des capacités dévastatrices, des combos cachés et des effets de compétences hilarantes.',
					'developper': 'Gravity Interactive',
					'classification': 'pegi 12',
					'editor': 'Gravity Interactive',
					'img': 'img/games/card/dragonica.jpg'
				},

				{
					'id': 3,
					'name': 'The Legend of Zelda: Breath of the Wild',
					'price': 50,
					'isInPromo': true,
					'promo': 10,
					'info': 'The Legend of Zelda : Breath of the Wild est un jeu d\'action/aventure. Link se réveille d\'un sommeil de 100 ans dans un royaume d\'Hyrule dévasté. Il lui faudra percer les mystères du passé et vaincre Ganon, le fléau. L\'aventure prend place dans un gigantesque monde ouvert et accorde ainsi une part importante à l\'exploration. Le titre a été pensé pour que le joueur puisse aller où il veut dès le début, s\'éloignant de la linéarité habituelle de la série.',
					'developper': 'Nintendo EPD',
					'classification': 'pegi 12',
					'editor': 'Nintendo',
					'img': 'img/games/card/zbotw.jpg'
				},

				{
					'id': 4,
					'name': 'Call of Duty: Modern Warfare',
					'price': 59.99,
					'isInPromo': false,
					'promo': 0,
					'info': 'Call of Duty Modern Warfare est un jeu de tir à la première personne. Le joueur incarne tour à tour un soldat du SAS ou un combattant de la liberté d\'un pays du Proche-Orient. combattez aux côtés d\'agents d’élite des forces spéciales pris dans un engrenage haletant qui menace d\'affecter l\'équilibre mondial. Le jeu adopte un ton sombre et mature, pour plus de réalisme.',
					'developper': 'Infinity Ward',
					'classification': 'pegi 18',
					'editor': 'Activision',
					'img': 'img/games/card/codmw.jpg'
				},

				{
					'id': 5,
					'name': 'Minecraft',
					'price': 24,
					'isInPromo': true,
					'promo': 19,
					'info': 'Minecraft est un jeu qui consiste à placer des blocs et à partir dans des aventures. Rejoignez l’une des plus grosses communautés de gamers : tenez-vous au courant des dernières actualités et découvrez de nouveaux jeux ainsi que de nouveaux modes de jeu. Commencez à construire votre propre monde sans plus attendre !',
					'developper': 'Mojang Studios',
					'classification': 'pegi 7',
					'editor': 'Mojang Studios',
					'img': 'img/games/card/minecraft.jpg'
				},

				{
					'id': 6,
					'name': 'Super Meat Boy',
					'price': 22.90,
					'isInPromo': false,
					'promo': 0,
					'info': 'Super Meat Boy est un jeu de plateforme où vous incarnez un cube de viande animé qui tente de sauver sa petite-amie (constituée de pansements) d\'un fœtus maléfique dans un bocal. Notre héros de viande sautera depuis des murs, par dessus des océans de scies vrombissantes, à travers des grottes qui s\'effondrent et des piscines remplies de vielles seringues. Sacrifiant son bien-être pour sauver sa demoiselle en détresse.',
					'developper': 'Team Meat',
					'classification': 'pegi 12',
					'editor': 'Team Meat',
					'img': 'img/games/card/meatboy.jpg'
				},

				{
					'id': 7,
					'name': 'Team Fortress 2',
					'price': 0,
					'isInPromo': false,
					'promo': 0,
					'info': 'Team Fortress 2 (parfois abrégé en TF2) est un jeu de tir à la première personne, multijoueur, et en ligne. A vous de choisir entre l’équipe rouge et l’équipe bleue, c’est-à-dire entre l’entreprise de démolition et celle de construction. Il faudra ensuite prendre l’un des neuf personnages, qui vous fera profiter d’armes différentes. Par exemple, le Soldier dispose d’un lance-roquette, le Pyro d’un lance-flamme, et le Demoman d’un lance-grenade. A vous de voir quelle est votre option préférée pour infliger le plus de dégâts à vos adversaires !',
					'developper': 'Valve Corporation',
					'classification': 'pegi 16',
					'editor': 'Valve Corporation',
					'img': 'img/games/card/fortress2.jpg'
				},

				{
					'id': 8,
					'name': 'Animal Crossing: New Horizons',
					'price': 59.99,
					'isInPromo': true,
					'promo': 17,
					'info': 'Avez-vous déjà rêvé de tout quitter et de partir vous installer ailleurs ? Avec la formule « Évasion île déserte » du célèbre Tom Nook, partez-vous installer sur une île, collectez des ressources pour créer les objets dont vous avez besoin, prenez le temps de décorer votre intérieur ou baladez-vous tout simplement sur une plage pour y admirer un coucher de soleil… Plus votre île évoluera, plus de nouveaux animaux viendront vous rendre visite pour que vous puissiez, ensemble, y vivre votre vie rêvée. Faites ce que vous voulez, quand vous le voulez, et invitez vos amis à venir découvrir votre île',
					'developper': 'Nintendo EPD',
					'classification': 'pegi 3',
					'editor': 'Nintendo',
					'img': 'img/games/card/animalcrossing.jpg'
				},

				{
					'id': 9,
					'name': 'Undertale',
					'price': 9.99,
					'isInPromo': false,
					'promo': 0,
					'info': 'Descendez en enfer et explorez un monde hilarant et sympathique, plein de dangereux monstres. Sortez avec un squelette, dansez avec un robot, faites la cuisine avec une femme-poisson... ou détruisez sur place tous ceux que vous rencontrez. C\'est à vous de décider de ce qui arrivera !',
					'developper': 'Toby Fox',
					'classification': 'pegi 12',
					'editor': 'Toby Fox',
					'img': '../img/games/card/undertale.jpg'
				},

				{
					'id': 10,
					'name': 'Life Is Strange',
					'price': 20,
					'isInPromo': true,
					'promo': 76,
					'info': 'Retracez l’histoire de Max Caulfield, une étudiante en photographie, qui découvre, en sauvant la vie de sa meilleure amie, Chloe Price, qu’elle peut remonter dans le temps. Les deux jeunes filles se retrouvent très vite à enquêter sur la mystérieuse disparition d’une autre étudiante, Rachel Amber, révélant le côté sordide d’Arcadia Bay. Pendant ce temps, Max va devoir apprendre que modifier le passé peut avoir des conséquences désastreuses sur l’avenir.',
					'developper': 'Dontnod Entertainment',
					'classification': 'pegi 18',
					'editor': 'Square Enix',
					'img': '../img/games/card/lifeisstrange.jpg'
				},

				{
					'id': 11,
					'name': 'Blood and Gold: Caribbean!',
					'price': 19.99,
					'isInPromo': false,
					'promo': 0,
					'info': 'Décidez de votre propre rôle et créez votre propre aventure dans Blood & Gold! Vous pourriez commencer comme mercenaire, accepter une mission d\'assassinat, récupérer votre récompense, entrer dans une taverne et tout dépenser dans une partie de blackjack. Réduisez-vous en esclavage et envoyez-vous travailler dans une mine, échappez-vous avec vos codétenus, battez tous les gardes, puis volez des convois avec une armée d\'anciens esclaves. Économisez de l\'or, achetez votre première plantation et devenez riche en échangeant du sucre.',
					'developper': 'Snowbird Games',
					'classification': 'pegi 12',
					'editor': 'Snowbird Games',
					'img': '../img/games/card/caribbean.jpg'
				},

				{
					'id': 12,
					'name': 'Katana ZERO',
					'price': 12.49,
					'isInPromo': false,
					'promo': 0,
					'info': 'Katana ZERO est un jeu de plate-formes à l\'ambiance très noire, bourré d\'action et de combats mortels. Faites parler votre lame et manipulez le temps pour découvrir votre passé dans un éblouissant ballet acrobatique et brutal.	Des combats exceptionnels : Terrassez vos adversaires quelle que soit la situation. Renvoyez les balles vers vos ennemis, esquivez leurs attaques et manipulez vos adversaires et votre environnement avec des pièges et des explosifs. Ne laissez aucun survivant.',
					'developper': 'Askiisoft',
					'classification': 'pegi 16',
					'editor': 'Devolver Digital',
					'img': '../img/games/card/katanazero.jpg'
				},

				{
					'id': 13,
					'name': 'Name',
					'price': 0,
					'isInPromo': false,
					'promo': 50,
					'info': 'lorem ipsum dolor sit amet...',
					'developper': 'developper-name',
					'classification': 'pegi ##',
					'editor': 'editor-name',
					'img': '../img/games/card/'
				},

				{
					'id': 14,
					'name': 'Name',
					'price': 0,
					'isInPromo': false,
					'promo': 50,
					'info': 'lorem ipsum dolor sit amet...',
					'developper': 'developper-name',
					'classification': 'pegi ##',
					'editor': 'editor-name',
					'img': '../img/games/card/'
				},

				{
					'id': 15,
					'name': 'Name',
					'price': 0,
					'isInPromo': false,
					'promo': 50,
					'info': 'lorem ipsum dolor sit amet...',
					'developper': 'developper-name',
					'classification': 'pegi ##',
					'editor': 'editor-name',
					'img': '../img/games/card/'
				},

				{
					'id': 16,
					'name': 'Name',
					'price': 0,
					'isInPromo': false,
					'promo': 50,
					'info': 'lorem ipsum dolor sit amet...',
					'developper': 'developper-name',
					'classification': 'pegi ##',
					'editor': 'editor-name',
					'img': '../img/games/card/'
				},

				{
					'id': 17,
					'name': 'Name',
					'price': 0,
					'isInPromo': false,
					'promo': 50,
					'info': 'lorem ipsum dolor sit amet...',
					'developper': 'developper-name',
					'classification': 'pegi ##',
					'editor': 'editor-name',
					'img': '../img/games/card/'
				},

				{
					'id': 18,
					'name': 'Name',
					'price': 0,
					'isInPromo': false,
					'promo': 50,
					'info': 'lorem ipsum dolor sit amet...',
					'developper': 'developper-name',
					'classification': 'pegi ##',
					'editor': 'editor-name',
					'img': '../img/games/card/'
				},

				{
					'id': 19,
					'name': 'Name',
					'price': 0,
					'isInPromo': false,
					'promo': 50,
					'info': 'lorem ipsum dolor sit amet...',
					'developper': 'developper-name',
					'classification': 'pegi ##',
					'editor': 'editor-name',
					'img': '../img/games/card/'
				},

				{
					'id': 20,
					'name': 'Name',
					'price': 0,
					'isInPromo': false,
					'promo': 50,
					'info': 'lorem ipsum dolor sit amet...',
					'developper': 'developper-name',
					'classification': 'pegi ##',
					'editor': 'editor-name',
					'img': '../img/games/card/'
				},

				{
					'id': 21,
					'name': 'Name',
					'price': 0,
					'isInPromo': false,
					'promo': 50,
					'info': 'lorem ipsum dolor sit amet...',
					'developper': 'developper-name',
					'classification': 'pegi ##',
					'editor': 'editor-name',
					'img': '../img/games/card/'
				},

				{
					'id': 22,
					'name': 'Name',
					'price': 0,
					'isInPromo': false,
					'promo': 50,
					'info': 'lorem ipsum dolor sit amet...',
					'developper': 'developper-name',
					'classification': 'pegi ##',
					'editor': 'editor-name',
					'img': '../img/games/card/'
				},

				{
					'id': 23,
					'name': 'Name',
					'price': 0,
					'isInPromo': false,
					'promo': 50,
					'info': 'lorem ipsum dolor sit amet...',
					'developper': 'developper-name',
					'classification': 'pegi ##',
					'editor': 'editor-name',
					'img': '../img/games/card/'
				},

				{
					'id': 24,
					'name': 'Name',
					'price': 0,
					'isInPromo': false,
					'promo': 50,
					'info': 'lorem ipsum dolor sit amet...',
					'developper': 'developper-name',
					'classification': 'pegi ##',
					'editor': 'editor-name',
					'img': '../img/games/card/'
				},

				{
					'id': 25,
					'name': 'Name',
					'price': 0,
					'isInPromo': false,
					'promo': 50,
					'info': 'lorem ipsum dolor sit amet...',
					'developper': 'developper-name',
					'classification': 'pegi ##',
					'editor': 'editor-name',
					'img': '../img/games/card/'
				},

				{
					'id': 26,
					'name': 'Name',
					'price': 0,
					'isInPromo': false,
					'promo': 50,
					'info': 'lorem ipsum dolor sit amet...',
					'developper': 'developper-name',
					'classification': 'pegi ##',
					'editor': 'editor-name',
					'img': '../img/games/card/'
				},

				{
					'id': 27,
					'name': 'Name',
					'price': 0,
					'isInPromo': false,
					'promo': 50,
					'info': 'lorem ipsum dolor sit amet...',
					'developper': 'developper-name',
					'classification': 'pegi ##',
					'editor': 'editor-name',
					'img': '../img/games/card/'
				},

				{
					'id': 28,
					'name': 'Name',
					'price': 0,
					'isInPromo': false,
					'promo': 50,
					'info': 'lorem ipsum dolor sit amet...',
					'developper': 'developper-name',
					'classification': 'pegi ##',
					'editor': 'editor-name',
					'img': '../img/games/card/'
				},

				{
					'id': 29,
					'name': 'Name',
					'price': 0,
					'isInPromo': false,
					'promo': 50,
					'info': 'lorem ipsum dolor sit amet...',
					'developper': 'developper-name',
					'classification': 'pegi ##',
					'editor': 'editor-name',
					'img': '../img/games/card/'
				},
			];