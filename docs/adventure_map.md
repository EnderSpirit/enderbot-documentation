---
sidebar_position: 7
---

# Carte d'aventure 

Votre personnage (représenté par votre photo de profile Discord), est toujours localisé quelque part parmis les **12 zones** de l'île d'Enderia.

Lorsque vous commencez à jouer à EnderBot, vous serez automatiquement situé à la plage.

![advmap_multi.png](/img/commands_example/advmap_multi.png)

Les douzes zones suivantes sont:
- La plage.
- Le lac.
- Le village (c'est là que vous devez vous rendre si vous voulez acheter quelque chose dans le shop).
- La mine.
- La forêt.
- La ferme.
- L'usine.
- Le volcan.
- Le Toundra.
- Le désert.
- La tour.
- La capitale.

### Changer votre localisation sur la carte (`>move NomDeLaLocalisation`)
Si vous souhaitez **bouger de zone** sur la carte, vous devez obligatoirement **bouger vers une zone adjacente** sur la map.

Si jamais vous ne vous souvenez plus des noms des différentes zones sur la carte, il vous suffit d'effectuer la commande sans mettre de nom afin d'obtenir la liste des différents lieux disponibles.

![move_success.png](/img/commands_example/move_success.png)

Une fois que vous avez choisi une destination, il vous suffit de faire la commande `>move NomDeLaZone`

![move_no_args.png](/img/commands_example/move_no_args.png)

:::tip ASTUCE
Le bot considère que votre personnage est toujours dans une zone, même si vous êtes en déplacement, tant que votre trajet n'est pas entièrement fini, le bot considéra que vous êtes toujours dans votre zone d'origine pour les commandes qui sont affectées par votre localisation.
:::

Les commandes affectées par la localisation sont:
- `>work`
- `>shrine` (donne un boost si vous êtes dans la zone du village ou de la capitale).
- `>shop` (nécessite d'être au village).
- `>exploration` (comme il s'agit d'une mécanique qui lui est propre cliquez ici).