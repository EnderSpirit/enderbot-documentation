---
sidebar_position: 11
---

# Structures

Les structures sont directement reliées aux serveur. Un serveur est considéré comme une structure. Vous pouvez faire évoluer votre structure en fonction de votre activité sur EnderBot avec votre magie et vos invocations de cartes.

Lorsque vous commencez à investir dans une structure, vous devez dépenser 100 000 points de magie au total ou 250 invocations de carte pour faire gagner un niveau à votre structure.

Une action permet de vous donner des ressources sur le bot. Le nombre de ressources données tout dépend de la productivité du serveur. Plus la productivité sera haute, plus votre action vous donnera de ressources.

La productivité du serveur est basée sur les données suivantes:
- Le nombre total d' :endercoin: Endercoins investis sur la structure.
- Le nombre de membres présents sur la structure (les bots ne comptent pas).
- L'activité du serveur.
- Le hasard.
- Autres facteurs que nous gardons secrets.

:::info INFORMATION
Les serveurs comptant de nombreux membres commencent avec un niveau légèrement supérieur.
:::
:::warning ATTENTION
Plus votre structure augmente en niveaux, vous vous devrez dépenser de magie et faire des invocations de cartes pour faire évoluer cette dernière.
:::

### Consulter les informations d'une structure (`>structure info`)
Lorsque vous effectuez la commande (`>structure info`), vous pouvez retrouver les informations principales sur cette dernière comme:
- Le nom de la structure.
- Le niveau de la structure.
- Le nombre de membres de la structure.
- La productivité de la structure.

- Le nombre de shares total de la structure.
- Le nombre de shares disponibles de la structure.
- Le nombre de shares achetés de la structure.

Plus-bas vous retrouvez d'autres informations complémentaires comme:
- Le détail du nombre de shares possédés par chaque membre.
- La contribution de chaque joueur sur la structure (ressources collectées et invocations faites).

Enfin, tout en bas vous pouvez retrouver l'avancée avant de faire gagner la structure en niveaux:
- Le nombre de magie dépensée avant l'objectif.
- Le nombre d'invocation faites avant l'objectif.

![structures_info.png](/img/commands_example/structures_info.png)

### Acheter des shares (`>str buy`)
Les shares sont un peu comme des actions à la bourse. Plus votre structure gagne en niveaux, plus il y aura des shares de disponibles.

Vous pouvez alors acheter des shares sur la structure pour 100 :endercoin: Enderdoins avec la commande (`>str buy`).

![structures_buy.png](/img/commands_example/structures_buy.png)

:::tip ASTUCE
Pensez à collecter des ressources et à faire des invocations de cartes pour mettre vos actions à l'abris des autres joueurs qui seraient tentés de vous les voler.
:::
:::warning ATTENTION
Vous pouvez acheter des actions sur la même structure tous les 16 heures.
:::

### Revendre des shares (`>str sell`)
Si vous souhaitez revendre vos actions pour diverses raisons, il vous suffit de faire la commande (`>str sell`).

![structures_sell.png](/img/commands_example/structures_sell.png)

:::info INFORMATION
Une fois que vous avez revendus vos actions, vous ne récupérez pas immédiatement vos :endercoin: Endercoins. Vous devez attendre qu'un autre joueur rachète vos actions pour les récupérer.
:::

### Forcer les actions d'un autre joueur (`>str forcebuy`)
Si jamais il n'y a plus d'actions de disponibles sur le serveur, vous pouvez toujours forcer les actions des autres joueurs avec la commande `>str forcebuy`. Il faut cependant certains crytères pour forcer les actions des autres joueurs:
- Avoir 2 fois plus de ressources produites que le joueur visé sur la structure.
- Avoir 2 fois plus d'invocations ue le joueur visé sur la structure.

![structures_force.png](/img/commands_example/structures_force.png)

### Réclamer vos actions (`>str dividends`)
Pour réclamer vos actions sur une structure, il vous suffit de faire la commande `>str dividens`.

Vous obtiendez alors les récompenses suivantes:
- :cardessence: Essence de cartes.
- :mana: Magie.
- :endercoin: Endercoins.
- :golem: Golems.

![structures_dividends.png](/img/commands_example/structures_dividends.png)

:::info INFORMATION
Vous pouvez consulter votre liste d'actions sur les différentes structures avec la commandes `>str `
:::

### Réclamer vos actions à distance (`>str dividends NomDeLaStructure`)
Vous pouvez également réclamer vos récompenses de dividendes à distance si par exemple vous n'avez plus accès au serveur. Pour cela il suffit de faire la commande `>str dividends NomDeLaStructure`.

![structures_div_away.png](/img/commands_example/structures_div_away.png)

:::warning ATTENTION
Même si vous pouvez réclamer vos actions à distance, vos actions peuvent toujours être forcés par d'autres joueurs.
:::

### Consulter vos actions sur les différents serveurs (`>str list`)
Vous pouvez consulter votre liste d'actions sur les différentes structures avec la commandes `>str `

Vous pouvez alors retrouver plusieurs informations comme:
- La productivité du serveur.
- Le nombre d'actions que vous avez sur le serveur.
- Le nom de la structure (serveur).
- Si les dividendes sont prêtes à être réclamées ou non.

![structures_list.png](/img/commands_example/structures_list.png)

:::info INFORMATION
Vous pouvez réclamer les récompenses de vos actions sur les différentes structures une fois par semaine. La rénitialisation des récompenses s'effectue une fois par semaine le lundi à 2h.
::: 

### Activer la structure sur un serveur (`>str enable`)
Si vous souhaitez faire de votre serveur une structure évolutive il vous suffit de faire (`>str enable`) afin que la magie dépensée et les invocations de cartes soient comptabilisés pour faire évoluer la structure.

### Désactiver la structure sur un serveur (`>str disable`)
Si vous le souhaitez désactiver la structure sur votre serveur il vous suffit de faire la commande `>str disable`. La magie dépensée ainsi que les invocations de cartes sur le serveur ne seront alors plus comptabilisés pour faire evoluer la structure.