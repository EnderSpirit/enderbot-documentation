---
sidebar_position: 1
---

# Introduction
Si vous êtes complétement perdu et confus à propos d'EnderBot, cette page est un bon début.

## Préambule

Après avoir accepté les règles du jeu, vous pourrez commencer à jouer.
Veuillez noter que dans cette documentation, les commandes sont préfixées par des `>`, cependant il ne s'agit pas de la seule manière d'éxécuter des commandes et le préfixe peut-être modifié par les administrateurs du serveur avec la commande `>prefix`. Par exemple `>ping` peut aussi être éxécuté en tapant `ebping` ou alors en utilisant la "Slash command" `/ebping` via la nouvelle interface Discord. La plupart des commandes du jeu ont une version slash si vous préférez. Beaucoup de joueurs préferent cependant la manière historique avec un préfixe `>` ou `eb` puisque cela permet d'abbréger les commandes, il est d'ailleurs conseillé d'utiliser les abbréviations autant que possible pour gagner du temps.

# Comment jouer

EnderBot se décompose en deux sous-systèmes de jeu majeurs : la partie RPG et la partie de collecte de cartes. Ces deux systèmes sont indépendents mais se rejoignent à haut niveau, vous pouvez choisir de jouer à seulement l'un ou l'autre, ou les deux ! 

## Commandes communes

Beaucoup de commandes d'EnderBot sont communes aux deux systèmes de jeu. La plupart des commandes décrites dans cette sous-section ont tendance à avoir plus d'intérêt pour les joueurs du RPG mais ont quand même une utilité aux joueurs de cartes.

### Commande `>hourly` (`>hr`)

La commande `>hourly` permet de récupérer des récompenses toutes les heures. 
Cette commande a un cooldown de 60 minutes et donne des récompenses pour avancer plus vite dans le jeu, n'hésitez pas à l'utiliser dès qu'elle est disponible si vous souhaitez avancer rapidement. 
Cette commande a également une mécanique de combo, si vous récupérez un `>hourly` 90 minutes après avoir récupéré votre dernier `>hourly` vous gagnerez un peu plus de ressources, les récompenses n'augmentent plus après le combo 10. Pour optimiser la production de ressources il est donc préférable de les enchainer.

![hourly_cooldown.png](/img/commands_example/hourly_cooldown.png)
![hourly_success.png](/img/commands_example/hourly_success.png)

Sur le screen ci-dessus, on voit 4 récompenses conférées par cette commande, dans l'ordre :
- XP, points d'expérience permettant de monter en niveau
- Mana, permet de faire des actions sur le RPG
- EnderCoins, monnaie du jeu 
- Card Essence ("essence de carte"), pour invoquer des cartes

Ces ressources sont expliquées plus en détails plus bas dans ce guide. (Voir la section concernant la commande `>inventory` pour une explication de toutes les ressources)

### Commande `>daily` (`>da`)

La commande `>daily` est très similaire à la commande `>hourly` exceptée qu'elle n'est faisable qu'une fois par jour, donne plus de récompenses et n'a pas de système de combo.

![daily_cooldown.png](/img/commands_example/daily_cooldown.png)
![treasure_success.png](/img/commands_example/treasure_success.png)

### Commande `>shrine` (`>shr`)	

La commande `>shrine` permet de lancer un rituel et d'obtenir des récompenses.
Après avoir utilisé `>shrine start` (`>shr s`), vous devrez utiliser la commande `>shrine claim` (`>shr c`) 4 heures après mais en faisant, attention : vous n'aurez qu'une heure pour récupérer vos récompenses, sinon vous les perdrez et la commande `>shrine` ne vous sera plus disponible pendant 24 heures. Par exemple, si vous lancez un rituel à 10h, vous devrez le récupérer entre 14h et 15h pour obtenir les récompenses. 

![shrine_start_cooldown.png](/img/commands_example/shrine_start_cooldown.png)
![shrine_claim.png](/img/commands_example/shrine_claim.png)
![shrine_break.png](/img/commands_example/shrine_break.png)


### Commande `>treasure` (`>tr`)

Le trésor est une mécanique compétitive et globale sur le bot, il s'agit d'une mécanique  nécessitant un style de jeu actif.
Le trésor est une récompense disponible toutes les quelques minutes, la particularité étant que cette récompense ne sera donnée qu'à un seul joueur à travers l'entiété d'EnderBot : le premier joueur qui fera la commande `>tr` dès l'appartition du trésor. (Ça se joue usuellement à quelques millisecondes et à la chance !)


Lorsque vous effectuez la commande `>treasure`, vous verrez probablement un message de la sorte : 
![treasure_not_available.png](/img/commands_example/treasure_not_available.png)
Si le trésor est indisponible (ce qui est le cas dans 99% de cas où la commande est éxécutée), la commande `>treasure` indiquera le nom du joueur ayant pris le dernier trésor, le nom de son organisation s'il en a une et surtout le temps restant avant le prochain trésor.

Si vous souhaitez tenter de récupérer des trésors, lorsque le timer arrivera très proche de zéro il faudra tenter votre chance en envoyant une rapide vague de commandes `>tr` pour tenter d'être le premier joueur qui éxécutera la commande dès que le trésor deviendra disponible ! Vous n'y parviendrez probablement pas dès le premier trésor mais en perserverant c'est possible.

Un joueur ne peut capturer que 10 trésors par jour pour éviter un monopole de quelques joueurs, votre limite de trésors est affichable avec la commande `>treasure limit` (`>tr l`)
![treasure_limit.png](/img/commands_example/treasure_limit.png)

![treasure_success.png](/img/commands_example/treasure_success.png)


### Commande `>cooldown` (`>cd`)

La commande de cooldown permet de facilement visualiser la plupart des cooldowns sur vos différentes commandes.
![cooldown.png](/img/commands_example/cooldown.png)


Notamment : 
- Cooldown de la commande `>hourly`
- Cooldown de la commande `>daily`
- Cooldown de la commande `>summon`
- Cooldown du fait de pouvoir claim une carte sur la commande `>summon`
- Cooldown de la commande `>shrine`
- Cooldown de la commande `>vote`
- Cooldown de la commande `>exploration`
- Cooldown de la commande `>move` (si présent)
- Cooldowns de la commande `>ritual` (si présent)

## RPG

### Commande `>inventory` (`>inv`, `>i`)

L'inventaire se décompose en 5 pages :

#### Page d'inventaire générale

![inventory_general.png](/img/commands_example/inventory_general.png)

##### Niveau & XP

L'expérience se gagne en faisant des actions sur le bot, quasiment toutes les commandes en donnent. Certains systèmes de jeu avancés nécessitent un haut niveau général.

##### Mana

Le mana est l'une des ressource centrale du système RPG, toutes les actions de production de ressources et de craft en nécessitent. Le mana maximum augmente en fonction du votre niveau. La formule du mana maximum est la suivante : 

$$
    Mana_{max} = 299 + Niveau
$$
La régénération naturelle de mana est de 1 point par minute (peut être augmenté pour les joueurs Premium).

Si vous voulez plus de mana pour faire plus d'action, la meilleure manière n'est cependant pas juste d'attendre mais de faire des commandes pour en gagner davantage. Notamment les commandes `>daily`, `>hourly`, `>treasure` et `>shrine`, mais il existe encore plus de systèmes permettant de ganger du mana.

##### EnderCoins

Les EnderCoins sont la monnaie principale d'EnderBot, à l'heure actuellement cela permet:
 - Acheter et améliorer sa license d'échange ("Trading license") au magasin (commande `>shop`)
 - Acheter une license magique ("Magic license") au magasin
 - Acheter des parts dans les structures (commande `>structure`)

##### License d'échange (Trading License)
La license d'échange se décompose en 10 niveaux achetables qui permettent d'améliorer votre capacité d'échange. Cette license s'achète au magasin (`>shop`).
Voir l'article dédiée aux échanges pour plus de détails. 

##### Dark Mana & Golems
Systèmes de jeu avancé liés au PvP, nécessite au moins le niveau 666 et permet de lancer des `>spell`, ne sera pas détaillé ici.

#### Page d'inventaire de ressources

Utilisez `>inventory common` (`>i c`) ou `>inventory resources` (`>i r`) pour accéder directement à la page de ressources communes, ces ressources constituent le coeur du système RPG et servent à quasiment tout dans le jeu.

![inventory_common.png](/img/commands_example/inventory_common.png)

#### Page d'inventaire d'exploration

Utilisez `>inventory exploration` (`>i e`) pour accéder directement à la page d'exploration, ces ressources s'obtiennent à l'aide de la commande `>exploration` et permettent de faire des potions pour certaines recettes avancées.![inventory_exploration.png](/img/commands_example/inventory_exploration.png)

#### Page d'inventaire d'alchimie

Utilisez `>inventory alchemy` (`>i a`) pour accéder directement à la page d'alchimie afin de lister vos potions, celles-ci sont fabriquées par des joueurs alchimistes.

![inventory_alchemy.png](/img/commands_example/inventory_alchemy.png)

#### Page d'inventaire d'outils

Utilisez `>inventory items` pour accéder directement à la page d'outils pour lister vos objets uniques, les outils s'obtiennent par des joueurs forgerons.
Si vous beaucoup d'outils, la page d'outils se décomposera en plusieurs sous-pages, utilisez les contrôles en bas pour naviguer.

![inventory_items.png](/img/commands_example/inventory_items.png)

### Commande `>craft` (`>cra`)

La commande `>craft` est utilisée pour la fabrication d'outils et de potions.

Si vous ne préciser pas d'arguments, le bot vous proposera d'ouvrir l'interface du menu de craft : 
![craft_no_args.png](/img/commands_example/craft_no_args.png)

#### Sous-commmande `>craft menu`

`>craft menu` (`>cra m`) peut aussi être utilisé pour ouvrir le menu directement :
![craft_menu.png](/img/commands_example/craft_menu.png)

Bien que quasiment tout peut être fait avec le menu, il est plus rapide de taper les commandes directement si vous savez ce que vous souhaitez crafter.

#### Sous-commande `>craft next`

Pour les outils, il est possible de rapidement fabriquer le prochain tier d'outil en se basant sur votre outil actuellement équippé, les arguments possibles sont : 
![craft_next_axe.png](/img/commands_example/craft_next_axe.png)


#### Sous-commande `>craft direct`

#### Fabrication d'outils

Il existe 5 types d'outils :
- Hache (`axe`) pour les bûcherons (`lumberjack`)
- Pioche (`pickaxe`) pour les mineurs (`miner`)
- Pelle (`shovel`) pour les pelleteurs (`digger`)
- Canne à pêche (`fishingrod`) pour les pecheurs (`fisher`)
- Houe (`hoe`) pour les fermiers (`farmer`)

#### Fabrication de potions

### Commande `>forge`

La commande `>forge` permet d'améliorer un outil déjà forgé. Chaque niveau de forge augmentera la puissance de l'outil de 5%. L'intérêt de forger des outils, au delà de simplement les améliorer, est de gagner des points d'expérience dans le métier de forgeron. Si vous souhaitez gagner des niveaux dans le métier de forgeron, l'utilisation en mana par point XP d'obtenu ne changera pas mais cela permettra d'utiliser moins de ressources.

![forge_pickaxe.png](/img/commands_example/forge_pickaxe.png)

### Commande `>jobs` (`>jo`)

![jobs.png](/img/commands_example/jobs.png)

![jobs_2.png](/img/commands_example/jobs_2.png)

### Commandes `>advmap` (`>ad`) et `>move` (`>mo`)

![advmap_solo.png](/img/commands_example/advmap_solo.png) ![advmap_multi.png](/img/commands_example/advmap_multi.png)

Votre personnage est toujours localisé quelque part sur l'une des 12 zones de l'île d'Enderia, quand vous commencez votre aventure, vous vous trouvez à la plage.
Si vous faites la commande `>advmap` sur un serveur, les avatars de d'autres joueurs ayant été actifs récemment seront aussi affichés à leur endroit respectif.

La douze zones sont les suivantes :
- Beach (Plage)
- Lake (Lac)
- Village
- Mine
- Forest (Forêt)
- Farm (Ferme)
- Factory (Usine)
- Volcano (Volcan)
- Tundra
- Desert 
- Tower (Tour)
- Capital (Capitale)

Si vous souhaitez bouger d'un endroit à un autre, vous devez bouger vers une zone adjacente sur la map, si vous ne vous souvenez plus du nom d'une zone, faites simplement `>move` pour les lister : 

![move_no_args.png](/img/commands_example/move_no_args.png)

Une fois que vous avez choisi votre destination, faites `>move [Nom de la zone]` pour bouger : 

![move_success.png](/img/commands_example/move_success.png)

Astuce : le bot considère que votre personnage est toujours dans une zone, même si vous êtes en déplacement, tant que votre trajet n'est pas entièrement fini, le bot considéra que vous êtes toujours dans votre zone d'origine pour les commandes qui sont affecté par votre localisation.

Les commandes étant impactés par la locasation sont : 
- `>work` (`>chop`, `>mine`, `>dig`, `>fish`, `>farm`) : certaines ressources ne sont disponibles que dans certaines zones et certaines zones donnent un boost de productivité à certains métiers
- `>shrine` : donne un boost si vous êtes dans la zone village ou capitale
- `>shop` : nécessite d'être au village
- `>exploration` : (voir plus bas)

### Commande `>exploration` (`>ex`)

La commande `>exploration` permet de récupérer de l'XP, des EnderCoins et des ressources d'exploration spécifique à une zone (utile pour les alchimistes).
La commande peut être lancée jusqu'à six joueurs en simultané pour un petit boost de récompenses.

![exploration_start.png](/img/commands_example/exploration_start.png) ![exploration_result.png](/img/commands_example/exploration_result.png)

## Collection de cartes

### Commande `>summon` (`>su`)

Pour invoquer des cartes, utilisez la commande `>summon`, vous aurez alors le choix entre 3 cartes et vous pourrez en choisir une parmis les trois en cliquant sur le bouton correspondant. (appelé "faire un claim")

![summon.png](/img/commands_example/summon.png)

Le cooldown entre deux invocations est de une heure et le cooldown entre deux claims est de 20 minutes.


### Commande `>card collection` (`>car c`)

Pour visualiser votre collection sous forme d'image, vous pouvez utiliser la commande `>card collection` :
![card_collection.png](/img/commands_example/card_collection.png)

Vous pouvez également appliquer de nombreux filtres. Voir la page correspondantes pour plus de détails.

### Commande `>card show` (`>car sh`)

![card_show.png](/img/commands_example/card_show.png)

### Commande `>card list` (`>car l`)

![card_list.png](/img/commands_example/card_list.png)

### Commande `>card search` (`>car se`)

![card_search.png](/img/commands_example/card_search.png)

### Profil web

Lorsque votre collection commence à devenir conséquente, la meilleure manière de visualiser votre collection est d'utiliser le site web du bot, utilisez la commande `>web` pour avoir un lien vers votre profil (vous pouvez mentionner quelqu'un ou marquer un pseudo en argument pour obtenir le lien vers le profil de quelqu'un d'autre)

![web_command.png](/img/commands_example/web_command.png)
![web_profile.png](/img/commands_example/web_profile.png)

La version web permet d'appliquer des filtres (recherche par nom de personnage ou d'anime, filtrage par nombre d'étoiles) pour facilement visualiser vos cartes.
Si vous avez activé l'affichage des ID, vous pouvez ensuite faire un clic droit sur un ID pour le copier/coller facilement dans le presse-papier si vous souhaitez par exemple l'échanger ensuite.

## Pour aller plus loin

Ce guide couvre déjà une grosse partie de bot mais il existe encore d'autres très gros systèmes de jeu qui n'ont pas été mentionnés dans ce guide, notamment : 
- Le système d'organisation (`>organization`).
- Le système PvP (`>warmap`).
