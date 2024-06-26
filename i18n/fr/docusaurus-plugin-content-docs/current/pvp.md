
---
sidebar_position: 12
---

# PvP

Le PvP se déroule sur une carte de guerre que vous pouvez retrouver ci-dessous. Elle est de forme radius 11. Chaque carte est localisée par une coordonnée qui permet de la situer. Le but du PvP est que votre organisation et vous même possédez un chateau afin de posséder un chateau et aller expendre votre territoires au maximum tout en affrontant les autres organisations. Vous affronterez les autres organisations avec des golems. Le PvP ne sert pas seulement à affronter les autres organisations mais débloque également une ressource exclusive en fonction du territoire que vous possédez. Il s'agit de la magie noire.

![pvp_warmap.png](/img/commands_example/pvp_warmap.png)

### Prérequis pour pouvoir participer sur la carte de guerre
Pour pouvoir participer sur la carte de guerre vous devez impérativement avoir les éléments suivants:
- Une organisation possédant un chateau sur la carte de guerre.
- Un général pour pouvoir poser des golems sur la carte de guerre.
- Des golems.

## Les différentes cases sur la carte de guerre
Sur la carte de guerre, vous pouvez retrouver 4 types de cases qui ont des fonctionnalités.

### Le chateau
Chaque organisation possède un chateau qui se situe à un endroit fixe sur la carte. Le chateau a plusieurs points forts que ne possède pas les autres cases. Les spécificités du chateau sont les suivants:
- Toutes les troupes étant dans le chateau sont protégées et ne peuvent pas être attaquées par des organisations adverses.
- Chaque général que vous décidez de mettre sur la carte de guerre doit passer par le chateau.

![castle_hex.png](/img/warmap/tiles/castle_hex.png)

:::info INFORMATION
Pour posséder un chateau vous devez être dans le top 16 organisations ayant des améliorations.
:::

### La friche
La friche est une case qui permet de séparer les différentes runes entre elles et qui permet de produire un petit peu de magie noire. Uniquement les 5 joueurs ayant le plus de troupes sur la rune produisent de la magie noire. La répartition de la production se déroule comme ceci:La répartition de la production se déroule comme ceci:
- +0.25 :darkmana: Magie Noir/heure pour le premier joueur ayant le plus de troupes sur la rune.
- +0.17 :darkmana: Magie Noire/heure pour le deuxième joueur ayant le plus de troupes sur la rune.
- +0.13 :darkmana: Magie Noire/heure pour le troisième ayant le plus de troupes sur la rune.
- +0.10 :darkmana: Magie Noire/heure pour le quatrième ayant le plus de troupes sur la rune.
- +0.08 :darkmana: Magie noire/heure pour le cinquiète ayant le plus de troupes sur la rune.

![grass_hex.png](/img/warmap/tiles/grass_hex.png)

### La suprême rune
Il s'agit de la rune centrale sur la carte. Cette rune est différente des autres car les 5 joueurs ayant le plus de troupes sur cette case produisent 1 de magie noire par heure. C'est donc une rune qui s'avère beaucoup plus productive que les autres runes.

![supreme_rune_hex.png](/img/warmap/tiles/supreme_rune_hex.png)

### Les runes
Les runes sont des cases sur la carte qui permettent de produire de la magie noire. Il y en a 17 sur la carte. Uniquement les 5 joueurs ayant le plus de troupes sur la rune produisent de la magie noire. La répartition de la production se déroule comme ceci:
- +1.00 :darkmana: Magie Noir/heure pour le premier joueur ayant le plus de troupes sur la rune.
- +0.50 :darkmana: Magie Noire/heure pour le deuxième joueur ayant le plus de troupes sur la rune.
- +0.33 :darkmana: Magie Noire/heure pour le troisième ayant le plus de troupes sur la rune.
- +0.25 :darkmana: Magie Noire/heure pour le quatrième ayant le plus de troupes sur la rune.
- +0.20 :darkmana: Magie noire/heure pour le cinquiète ayant le plus de troupes sur la rune.

![rune_hex.png](/img/warmap/tiles/rune_hex.png)


:::warning ATTENTION
Si vous êtes en dehors du top 5 vous ne produisez pas de magie noire.
:::

### Promouvoir un général et le placer sur la carte de guerre
Pour promouvoir un général, vous devez faire la commande `>card promote IdentifiantDeLaCarte.` Une fois promu, il vous suffit de cliquer sur le chateau de votre organisation et de cliquer sur "Spawn Forces". Un menu va alors s'ouvrir et il vous suffit de sélectionner votre général et de valider. Une fois votre général dans votre chateau vous pourrez alors le déplacer à votre guise et pouvoir faire apparaître des golems quand ce dernier est stationné sur une case.

![pvp_promote.png](/img/commands_example/pvp_promote.png)

:::warning ATTENTION
Vous devez posséder 6600 points de puissance de carte pour pouvoir promouvoir un général.
:::

### Explications sur les golems et leur utilisation
Les golems sont comme vos troupes sur la carte de guerre. Le calcul de votre production de golem est basée sur votre nombre de cartes uniques possédées ainsi que votre niveau.
Lorsque vous souhaitez mettre des golems sur la carte de guerre (pour rappel vous êtes obligés de les placer via un général), vous avez alors le choix de les placer soit en attaque, soit en défense. Vous l'aurez compris, les golems attaquants servent à attaquer les défenses ennemies et les défenseurs savent à défendrent contre les attaques ennemies.

Pour placer vos golems il suffit de suivre la procédure suivant:
- Cliquez sur la case où vous souhaitez faire apparaître vos golems (avec un général bien évidemment).
- Cliquez sur "Spawn forces".
- Déterminer combien de troupes vous souhaitez faire apparaître autant en attaque qu'en défense.
- Valider.
- Attendre le chargement et vos golems seront déployés fur et à mesure du temps.

![pvp_spawn.gif](/img/commands_example/pvp_spawn.gif)

### Déplacer des golems
Si vous le souhaitez, vous pouvez déplacer des golems sur une autre case. Gardez à l'esprit que vous ne pouvez pas téléporter des golems. Si vous souhaitez les bouger de plusieurs cases, vous devrez passer par toutes les cases qui séparent la case où se trouvent les golems et la case de destinations.

Pour déplacer vos golems il suffit de suivre la procédure suivant:
- Cliquez sur la case où vous souhaitez faire déplacer vos golems (vous pouvez également faire déplacer un général si vous le souhaitez).
- Cliquez sur "Move forces".
- Déterminer combien de troupes vous souhaitez déplacer autant en attaque qu'en défense.
- Valider.
- Attendre le chargement et il vous faudra attendre 1 heure pour qu'ils se déplacent d'une case à une autre. Les golems en déplacement sont représentés par une flèche de couleur rouge.

![pvp_moves.gif](/img/commands_example/pvp_moves.gif)

### Etude d'une case
Par exemple, sur la capture d'écran ci-dessous, nous allons nous concentrer sur le menu de gauche.  Nous pouvons voir que la rune a les coordonnées suivante (0, 9, -9) et que cette dernière est possédée par l'organisation railgun. Au total il y a 38200 golems attaquants de postés sur la rune ainsi que 66200 golems défenseurs.

Plus bas, nous pouvons voir que le joueur starducks. possède un général ainsi que 4924 attaquants et 32400 défenseurs. Ensuite, si nous continuons de faire défiler le menu, nous pouvons voir les informations sur les autres joueurs.

![pvp_info.png](/img/commands_example/pvp_info.png)

:::tip ASTUCE
Vous pouvez consulter votre production de golem sur votre inventaire `>inv`.
:::
:::info INFORMATION
Lorsque vous placez des golems sur une case, uniquement vous pouvez voir combien de golems vous placez.
:::
:::warning ATTENTION
Si vous êtes plusieurs à faire apparaître des golems sur la même case, le temps d'attente pour qu'ils soient placés sera rallongé.
:::