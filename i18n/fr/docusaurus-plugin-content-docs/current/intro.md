---
sidebar_position: 1
---

# Guide du débutant:

Si vous êtes nouveau sur EnderBot ou vous êtes perdus vis à vis du bot, cette page est faite pour vous!

# **Préambule:**
Une fois que vous avez accepté les règles du jeu, vous pouvez commencer à jouer au bot.

Veuillez noter que pour toute la documentation, les commandes sont préfixées par le préfixe par défaut d'EnderBot qui est `>`. Cependant, vous pouvez toujours personnaliser le prefix du bot s'il ne vous contient pas avec la commande `>prefix` (Uniquement les administrateurs du serveur peuvent modifier le préfixe du bot).
:::tip INFORMATION
Par exemple la commande `>ping` peut aussi être exécutée en tapant `ebping` ou même en commande slash avec `/ebping`.
La plupart des commandes du jeu peuvent être exécutées en commande slash.
:::

Cependant, la plupart des joueurs préfèrent utiliser les commandes avec préfixes car elles restent beaucoup plus pratiques que les commandes en slash.

:::tip CONSEIL
N'hésitez pas à utiliser un maximum les abbréviations autant que possible afin de gagner un maxium de temps !
:::
# Les commandes communes:                           

# Comment jouer?
EnderBot se décompose en deux sous-systèmes de jeu majeurs : **la partie RPG** et **la partie de collecte de cartes**. Ces deux systèmes sont indépendents mais se rejoignent à haut niveau, **vous pouvez choisir de jouer** à seulement l'un ou l'autre, ou les deux !



# Commande `>hourly` (`>hr`)
La commande `>hourly` permet de récupérer des récompenses toutes les heures.
Cette commande a un cooldown de 60 minutes et donne des récompenses pour avancer plus vite dans le jeu, n'hésitez pas à l'utiliser dès qu'elle est disponible si vous souhaitez avancer rapidement.
Cette commande a également **une mécanique de combo**, si vous récupérez un `>hourly` 90 minutes après avoir récupéré votre dernier `>hourly` vous gagnerez un peu plus de ressources, les récompenses n'augmentent plus après le combo 10. **Pour optimiser la production de ressources il est donc préférable de les enchainer**.


Sur le screeen ci-dessous, on voit 4 récompenses conférées par cette commande dans l'ordre:

• **XP** (points d'expérience permettant de monter en niveau).

• **Mana** (permet de faire des actions sur le RPG).

• **EnderCoin** (monnaie du jeu permettant d'acheter d'acheter des licence d'échange ou d'échanger des cartes/ressources avec les autres joueurs).

• **Carte essence** (pour rénitiatliser le temps d'attente pour invoquer des cartes ou récupérer des cartes).

![hourly_cooldown.png](/img/commands_example/hourly_cooldown.png)
![hourly_success.png](/img/commands_example/hourly_success.png)

# Commande `>daily` (`>da`)
La commande `>daily` est très similaire à la commande `>hourly` exceptée qu'elle n'est faisable qu'une fois par jour, donne plus de récompenses et n'a pas de système de combo.

![daily_cooldown.png](/img/commands_example/daily_cooldown.png)

# Commande `>shrine` (`>shr`)
La commande `>shrine` permet de lancer un rituel et d'obtenir des récompenses.
Après avoir utilisé `>shrine start` (`>shr s`), vous devez **attendre 4 heures** avant de récupérer vos récompenses à l'aide de la commande `>shrine claim` (`>shr c`). Une fois les 4 heures passées vous avez **1 heure pour récupérer** vos récompenses. Une fois ce délais passé, vous ne pourrez plus récupérer de récompenses et votre shrine sera **cassé pour les 24 prochaines heures**.

![shrine_start_cooldown.png](/img/commands_example/shrine_start_cooldown.png)
![shrine_claim.png](/img/commands_example/shrine_claim.png)
![shrine_break.png](/img/commands_example/shrine_break.png)

Par exemple, si vous **lancez un rituel à 10h**, vous devrez le **récupérer entre 14h et 15h** pour obtenir les récompenses.
:::tip INFORMATION
N'importe laquelle de nos souscriptions premium permet de réduire le temps d'attente si jamais vous cassez votre shrine.
:::

# Commande `>treasure` (`>tr`)
Le trésor est **une mécanique compétitive** et globale sur le bot, il s'agit d'une mécanique nécessitant **un style de jeu actif**.
Le trésor est une récompense disponible **toutes les quelques minutes**, la particularité étant que cette récompense ne sera donnée qu'au joueur le plus rapide à effectuer la commande lorsque le trésor sera disponible. (Ça se joue usuellement à quelques millisecondes et à la chance !)

:::tip INFORMATION
Ça se joue usuellement à quelques millisecondes et à la chance. Donc à vous d'être le plus rapide à envoyer la commande lorsqu'il est disponible!
:::

Lorsque vous effectuez la commande `>treasure`, vous verrez probablement un message de la sorte :
![treasure_not_available.png](/img/commands_example/treasure_not_available.png)

Si le trésor est indisponible (ce qui est le cas dans 99% des cas lorsque vous effectuez la commande),
la commande vous donnera plusieurs informations tels que:

• **Le pseudo du dernier joueur** ayant pris le dernier trésor.

• **Le nom de son organisation** si jamais il en a une.

• **Le temps restant** avant que le prochain trésor soit disponible.
:::tip INFORMATION
Un joueur ne peut récupérer que **10 trésors par jour** afin d'éviter qu'un monopole de joueurs capturent les trésor et ainsi vous donner plus de chances d'en capturer un. Vous pouvez consulter **combien vous avez pris de trésor** au cours de 24 dernières heures avec la commande `>treasure limit` (`>tr l`).

![treasure_limit.png](/img/commands_example/treasure_limit.png)
:::

# Commande `>cooldown` (`>cd`)
La commande de cooldown permet de facilement visualiser la plupart des cooldowns sur vos différentes commandes comme par exemple:

• Temps d'attente de la commande `>hourly`.

• Temps d'attente de la commande `>daily`.

• Temps d'attente de la commande avant de récupérer une nouvelle carte.

• Temps d'attente de la commande `>summon`.

• Temps d'attente de la commande `>shrine`.

• Temps d'attente de la commande `>vote`.

• Temps d'attente de la commande `>exploration`.

• Temps d'attente de la commande `>move` (si vous êtes en voyage sur la carte).

• Temps d'attente de la commande `>ritual` (si vous participez à un rituel).

![cooldown.png](/img/commands_example/cooldown.png)

# Les commandes RPG:      
# Commande `>inventory` (`>inv`)
L'inventaire vous permet de voir tout ce que vous possédez sur le bot:

• **Sur la première page** vous pourrez y trouver **toutes les informations générales** à propos de votre compte de jeu Enderbot.
![inventory_general.png](/img/commands_example/inventory_general.png)

• **Sur la seconde page** vous pourrez y trouver **toutes les ressources** que vous possédez sur le bot.
![inventory_common.png](/img/commands_example/inventory_common.png)

• **Sur la troisième page** vous pourriez y trouver **toutes les ressources spéciales** afin de réaliser certaines potions.
![inventory_exploration.png](/img/commands_example/inventory_exploration.png)

• **Sur la quatrième page** vous pourrez y trouver **toutes les potions** que vous avez fabriquées.
![inventory_alchemy.png](/img/commands_example/inventory_alchemy.png)

• **Sur la cinquième page** vous pourrez y trouver **tous les outilsùù que vous possédez sur le bot.
![inventory_items.png](/img/commands_example/inventory_items.png)

# Commande `>craft` (`>cra`)
La commande `>craft` est utilisée pour la fabrication d'outils et de potions pour chaque métier disponible. Il existe 5 niveaux d’amélioration des objets.
![craft_menu.png](/img/commands_example/craft_menu.png)
:::info INFORMATION
Si vous souhaitez plus d'informations cliquez ici.
:::

# Commande `>forge` (`>for`)
La commande `>forge` améliore les statistiques de vos objets en fonction du job choisi. Il existe 5 niveaux d’amélioration des objets.
![forge_pickaxe.png](/img/commands_example/forge_pickaxe.png)
:::info INFORMATION
Si vous souhaitez plus d'informations cliquez ici.
:::

# Commande `>exploration` (`>exp`)
La commande `>exploration` permet de récupérer de l'XP, des EnderCoins et des ressources d'exploration spécifique à une zone (utile pour les alchimistes).
La commande peut être lancée jusqu'à six joueurs en simultané pour un petit boost de récompenses.
![advmap_solo.png](/img/commands_example/advmap_solo.png)
:::info INFORMATION
Si vous souhaitez plus d'informations cliquez ici.
:::
