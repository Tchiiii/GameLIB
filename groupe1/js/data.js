/*
 * data.js
 * Script qui a pour unique but de sauvegarder les
 * données des jeux.
 * Ses données seront par la suites manipulées
 * par d'autres scripts pour les afficher.
 *
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
					'img': 'img/games/card/wot.jpg'
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
					'name': 'Refunct',
					'price': 2.99,
					'isInPromo': false,
					'promo': 0,
					'info': 'L\'objectif du jeu est d\'atteindre des boutons rouges apparaissant au fur et à mesure de la partie. Chaque fois que le joueur appuie sur un bouton, une partie du monde du jeu émerge de l\'eau et un nouveau bouton est accessible. Le jeu se termine lorsque le joueur atteint le seul bouton jaune du jeu. Lorsque le joueur marche pour la première fois sur une plate-forme, celle-ci change de couleur. Il existe un pourcentage de complétion du jeu : il dépend du nombre de plate-formes touchées par le joueur, ainsi que du nombre de cubes rouges présents dans le monde qu\'il a obtenu.',
					'developper': 'Dominique Grieshofer',
					'classification': 'pegi 3',
					'editor': 'Dominique Grieshofer',
					'img': '../img/games/card/refunct.jpg'
				},

				{
					'id': 14,
					'name': 'Phasmophobia',
					'price': 11.59,
					'isInPromo': false,
					'promo': 0,
					'info': 'Phasmophobia est un jeu d\'horreur psychologique coopératif en ligne à 4 joueurs dans laquelle vous et les membres de votre équipe d\'enquêteurs paranormaux entrerez dans des lieux hantés remplis d\'activités paranormales et rassemblerez autant de preuves du paranormal que possible. Vous utiliserez votre équipement de chasse aux fantômes pour rechercher et enregistrer des preuves de tout fantôme qui hante l\'emplacement à vendre à une équipe de suppression de fantômes.',
					'developper': 'Kinetic Games',
					'classification': 'pegi 16',
					'editor': 'Kinetic Games',
					'img': '../img/games/card/phasmophobia.jpg'
				},

				{
					'id': 15,
					'name': 'Ori and the blind Forest',
					'price': 19.99,
					'isInPromo': false,
					'promo': 0,
					'info': 'La forêt de Nibel est mourante. Alors qu\'une puissante tempête déclenche des événements dévastateurs, Ori n\'a pas d\'autre choix que de se mettre en route et de rassembler le courage nécessaire pour affronter son ennemi juré et ainsi sauver la forêt de Nibel. Ori and the Blind Forest est une histoire profondément émouvante évoquant l\'amour, le sens du sacrifice et l\'espoir résidant en chacun de nous.',
					'developper': 'Moon Studios',
					'classification': 'pegi 7',
					'editor': 'Microsoft Studios',
					'img': '../img/games/card/oatbf.jpg'
				},

				{
					'id': 16,
					'name': 'The Binding of Isaac: Rebirth',
					'price': 14.99,
					'isInPromo': true,
					'promo': 15,
					'info': 'Lorsque la mère d\'Isaac commence à entendre la voix de Dieu exigeant qu\'un sacrifice soit fait pour prouver sa foi, Isaac s\'échappe dans le sous-sol face à des foules d\'ennemis dérangés, de frères et sœurs perdus, de ses peurs et finalement de sa mère.',
					'developper': 'Nicalis, Inc.',
					'classification': 'pegi 16',
					'editor': 'Nicalis, Inc.',
					'img': '../img/games/card/isaac.jpg'
				},

				{
					'id': 17,
					'name': 'Portal 2',
					'price': 8.19,
					'isInPromo': false,
					'promo': 0,
					'info': 'La partie solo de Portal 2 présente un ensemble de nouveaux personnages, de nouveaux éléments et de nouvelles chambres de test plus vastes. Les joueurs vont pouvoir parcourir des parties inconnues des laboratoires d\'Aperture Science et retrouver GLaDOS, l\'ordinateur maléfique du jeu original. Le mode de coopération du jeu comprend une campagne autonome avec une histoire spécifique, des chambres de test et deux nouveaux personnages. Ce nouveau mode va remettre en question vos connaissances des portals. Il va falloir non seulement agir mais également penser en mode coopératif.',
					'developper': 'Valve',
					'classification': 'pegi 12',
					'editor': 'Valve',
					'img': '../img/games/card/portal2.jpg'
				},

				{
					'id': 18,
					'name': 'Among Trees',
					'price': 15.99,
					'isInPromo': true,
					'promo': 5,
					'info': 'Ceci est votre petite cabane en bois. Située au cœur d\'une forêt luxuriante, la cabane est extensible : construisez de nouvelles salles et débloquez des mécanismes de jeu supplémentaires, notamment la cuisson des aliments, la culture de plantes et la fabrication d\'outils. Explorez un monde coloré et respirant, plein de vie. Des forêts denses aux grottes sombres.',
					'developper': 'FJRD Interactive',
					'classification': 'pegi 3',
					'editor': 'FJRD Interactive',
					'img': '../img/games/card/amongtrees.jpg'
				},

				{
					'id': 19,
					'name': 'FEZ',
					'price': 9.99,
					'isInPromo': false,
					'promo': 0,
					'info': 'Gomez est une créature 2D vivant dans un monde 2D. Enfin, c\'est ce qu\'il croit... Quand il découvre l\'existence d\'une mystérieuse troisième dimension, Gomez se lance dans une aventure qui le mènera aux confins du temps et de l\'espace. Utilise ta capacité à te déplacer dans des structures 3D à partir de 4 perspectives 2D classiques. Explore un vaste monde où sérénité et beauté règnent et qui abrite secrets, énigmes et trésors cachés. Révèle les mystères du passé et découvre la vérité sur la réalité et la perception. Change ta perspective et regarde le monde sous un angle différent. ',
					'developper': 'Polytron Corporation',
					'classification': 'pegi 3',
					'editor': 'Trapdoor',
					'img': '../img/games/card/fez.jpg'
				},

				{
					'id': 20,
					'name': 'Celeste',
					'price': 19.99,
					'isInPromo': false,
					'promo': 0,
					'info': 'Aidez Madeline à survivre à ses démons intérieurs au mont Celeste, dans ce jeu de plateformes ultra relevé fait à la main, réalisé par les créateurs du classique TowerFall. Une aventure solo portée par une histoire touchante, avec des personnages pleins de charme et toute l’émotion de la découverte de soi. Une énorme montagne avec plus de 700 écrans de défis ultra difficiles et de secrets sur plateformes. Chapitres Face B à débloquer, conçus pour les alpinistes les plus courageux.',
					'developper': 'Matt Makes Games Inc.',
					'classification': 'pegi 7',
					'editor': 'Matt Makes Games Inc.',
					'img': '../img/games/card/celeste.jpg'
				},

				{
					'id': 21,
					'name': 'The Witcher 3 Wild Hunt',
					'price': 29.99,
					'isInPromo': true,
					'promo': 12,
					'info': 'Porté par son scénario, The Witcher 3: Wild Hunt est un jeu de rôles en monde ouvert, dévoilant un univers fantastique visuellement bluffant et plein de choix déterminants. Dans The Witcher, vous incarnez Geralt de Riv, un chasseur de monstres professionnel chargé de retrouver l\'enfant de la prophétie dans un vaste monde ouvert, rempli de villes marchandes, d\'îles pirates, de cols montagneux dangereux et de cavernes oubliées à explorer. Incarnez un tueur de monstres professionnel extrêment bien entrainé, formés dès leur plus jeune âge et soumis à des mutations leur conférant des capacités, une force et des réflexes surhumains, les sorceleurs sont un contrepoids dans un monde infesté de monstres.',
					'developper': 'CD PROJEKT RED',
					'classification': 'pegi 18',
					'editor': 'CD PROJEKT RED',
					'img': '../img/games/card/thewitcherwh.jpg'
				},

				{
					'id': 22,
					'name': 'A Short Hike',
					'price': 6.59,
					'isInPromo': false,
					'promo': 0,
					'info': 'Randonnez, escaladez, et planez dans le Parc provincial de Hawk Peak, et découvrez ses paysages paisibles. Suivez les sentiers balisés pour atteindre le sommet, ou explorez le parc comme vous le voulez. En chemin, vous ferez la connaissance d\'autres randonneurs, découvrirez des trésors cachés, et profiterez de la nature environnante. Explorez l\'île comme vous le sentez. Suivez votre intuition, et voyez où ça vous mène. Qui sait ce que vous découvrirez !',
					'developper': 'adamgryu',
					'classification': 'pegi 3',
					'editor': 'adamgryu',
					'img': '../img/games/card/ashorthike.jpg'
				},

				{
					'id': 23,
					'name': 'Killing Floor 2',
					'price': 27.99,
					'isInPromo': true,
					'promo': 67,
					'info': 'Dans KILLING FLOOR 2, découvrez une Europe continentale ravagée et une Union européenne paralysée par une épidémie irrépressible, causée par les expérimentations ratées de Horzine Biotec. Un mois à peine après les événements du premier KILLING FLOOR, les clones des spécimens sont partout, la civilisation est plongée dans le chaos, toutes les tentatives de communication ont échoué, les gouvernements se sont effondrés et les forces militaires ont été éradiquées. Les Européens ont désormais un instinct de survie particulièrement affûté et les survivants chanceux sont parvenus à se cacher.',
					'developper': 'Tripwire Interactive',
					'classification': 'pegi 18',
					'editor': 'Tripwire Interactive',
					'img': '../img/games/card/killingfloor2.jpg'
				},

				{
					'id': 24,
					'name': 'Minit',
					'price': 9.99,
					'isInPromo': true,
					'promo': 60,
					'info': 'Minit est une petite aventure insolite, qui se joue par tranches de 60 secondes. Quittez le confort de votre maison pour venir en aide à toutes sortes d\'individus étranges, découvrir d\'innombrables secrets et combattre de dangereux ennemis, dans l\'espoir de lever cette improbable malédiction qui veut que chaque journée ne dure qu\'une minute.',
					'developper': 'JW',
					'classification': 'pegi 3',
					'editor': 'Devolver Digital',
					'img': '../img/games/card/minit.jpg'
				},

				{
					'id': 25,
					'name': 'The Alto Collection',
					'price': 7.99,
					'isInPromo': false,
					'promo': 0,
					'info': 'À travers un désert infini et en haut de terres alpines, deux voyages remplis de merveilles vous attendent. Choisissez votre chemin et engagez-vous dans une palpitante aventure sur snowboard ou planche des sables avec Alto et ses amis.',
					'developper': 'Team Alto',
					'classification': 'pegi 3',
					'editor': 'Snowman',
					'img': '../img/games/card/alto.jpg'
				},

				{
					'id': 26,
					'name': 'NieR: Automata',
					'price': 39.99,
					'isInPromo': false,
					'promo': 0,
					'info': 'NieR: Automata raconte l’histoire des androïdes 2B, 9S et A2 et leur combat féroce contre une dystopie régie par de puissantes machines. L\'humanité se trouve exilée de notre planète par des formes de vie mécaniques d\'un autre monde. La dernière chance pour la résistance humaine de reconquérir notre planète est d\'envoyer une horde de soldats androïdes pour détruire les envahisseurs. Maintenant, une guerre entre machines et androïdes fait rage. Une guerre qui va bientôt dévoiler les mystères longuement oubliés de ce monde…',
					'developper': 'Square Enix',
					'classification': 'pegi 18',
					'editor': 'Square Enix',
					'img': '../img/games/card/nierautomata.jpg'
				},

				{
					'id': 27,
					'name': 'Spiral Knights',
					'price': 0,
					'isInPromo': false,
					'promo': 0,
					'info': 'Faites équipe et battez vous comme des lions ! Spiral Knights est un jeu d’aventure en coopération dans un monde persistant où l’action est rapide. Armez-vous et rejoignez les rangs des Spiral Knights, laissés à eux-même dans un monde étrange. Ils vont devoir parcourir les moindres recoins de ce monde et atteindre son centre mystérieux.',
					'developper': 'Grey Havens, LLC',
					'classification': 'pegi 7',
					'editor': 'Grey Havens, LLC',
					'img': '../img/games/card/spiralknights.jpg'
				},

				{
					'id': 28,
					'name': 'Aura Kingdom',
					'price': 0,
					'isInPromo': false,
					'promo': 0,
					'info': 'Aura Kingdom offre pour chaque joueur un vaste et magnifique monde à explorer pourvu de superbes graphiques. En plus du choix d\'une classe parmi onze différentes, Aura Kingdom offre la possibilité aux joueurs de sélectionner une classe secondaire une fois le niveau 40 atteint, ce qui permet une infinité d\'options différentes. Les joueurs parcouront leur chemin accompagné de leurs Eidolons, interactifs et fidèles compagnons qui leur donneront le pouvoir de déchaîner de puissants combos.',
					'developper': 'X-Legend',
					'classification': 'pegi 12',
					'editor': 'Aeria Games',
					'img': '../img/games/card/aurakingdom.jpg'
				},

				{
					'id': 29,
					'name': 'Paws and Soul',
					'price': 9.99,
					'isInPromo': true,
					'promo': 33,
					'info': 'Paws & Soul est un jeu d\'aventure sur la Renaissance, dans lequel vous visitez la forêt mystérieuse dans l\'image d\'un loup. L\'histoire de la vie humaine, que vous verrez à travers les yeux d\'un prédateur, complète un gameplay addictif basé sur l\'étude du monde et la recherche d\'objets. Trouvez des indices sur votre vie passée, débloquez des histoires bonus sur d\'autres personnes et profitez des vues fascinantes. Ici, rien ne vous menace, alors détendez-vous et laissez votre curiosité! Découvrez comment le sort du loup et de l\'homme s\'est développé et découvrez le mystère de la transformation. ',
					'developper': 'Arkuda Inc.',
					'classification': 'pegi 7',
					'editor': 'Games Operators',
					'img': '../img/games/card/paws&soul.jpg'
				},

				{
					'id': 30,
					'name': 'Devil May Cry 5',
					'price': 24.99,
					'isInPromo': false,
					'promo': 0,
					'info': 'Le chasseur de démons ultime fait son grand retour dans le jeu que les fans d\'action attendent avec impatience ! Nouveau titre de la légendaire série de jeux d\'action et d\'aventure, Devil May Cry 5 associe un rythme effréné et de fantastiques personnages originaux aux prouesses technologiques de Capcom, pour vous offrir un chef-d\'œuvre aux graphismes époustouflants.',
					'developper': 'CAPCOM Co., Ltd.',
					'classification': 'pegi 18',
					'editor': 'CAPCOM Co., Ltd.',
					'img': '../img/games/card/devilmaycry5.jpg'
				},
			];