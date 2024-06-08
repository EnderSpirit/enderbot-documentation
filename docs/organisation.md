---
sidebar_position: 6
---

# Les organisations

Les organisations **sont composées de groupes de joueurs** qui décident de réunir leurs forces afin **de jouer ensemble** (si vous préférez, vous pouvez les appeler "guildes").

**Chaque organisation** est organisée par **une structure hiérarchique**.

Les différents **membres de l'organisation** contribuent à celle-ci en y **payant des taxes**. Les ressources collectées à travers les taxes peuvent uniquement être utilisées par le chef de l'organisation ainsi que les administrateurs qui ont été choisis par celui-ci. Il peuvent **acheter des améliorations** qui donneront **des bonus** à tous les membres de l'organisation.

:::info INFORMATION
Chaque organisation se réunit également dans un but commun pour la partie PvP que vous pouvez retrouver ici.
:::

## Actions possibles:
Toutes les actions de l'organisation se font avec la commande `>organisation` (ou `>org`).

### Créer son organisation (`>org create`)
Vous pouvez créer votre propre organisation avec la commande `>org create <NomOrganisation>` (remplacez `<NomOrganisation>`) par le nom que vous souhaitez lui donner.

![organization_create.png](/img/commands_example/organization_create.png)

:::info INFORMATION
Créer une organisation n'est pas gratuit, il vous faudra **100 EnderCoins pour la créer**.
:::

### Voir les détails d'une organisation (`>org info`)
Si vous souhaitez voir les détails d'une organisations il vous suffit de faire la commande `>org info <NomOrganisation>`.

Vous pourrez y trouver certaines informations comme:

- Le chef de l'organisation.
- Le nombre total de membres dans l'organisation.
- La date de création de l'organisation.
- Le capital d'EnderCoins de l'organisation.
- La taxe global imposée aux membres de l'organisation.
- Le nombre d'amélioration total de l'organisation.

Vous pourrez aussi y retouver la liste des membres.

![organization_command_info.png](/img/commands_example/organization_command_info.png)

### Promouvoir et distituer un membre (`>org promote`)
Afin que l'organisation fonctionne au mieux, elle est composée d'une structure hiérarchique. Chaque grade donne des pouvoirs différents que vous pouvez retrouver ci-dessous:

- **Rang 6 - Chef** (il peut faire toutes les actions disponibles dans l'organisation, il ne peut y en avoir qu'un seul).
- **Rang 5 - Sous-chef** (il a les mêmes droits que le chef sauf qu'il ne peut pas supprimer l'organisation).
- **Rang 4 - Administrateur** (il peut acheter des améliorations et promouvoir/destituer les membres de l'organisation de rang inférieur).
- **Rang 3 - Modérateur** (il peut expulser des membres).
- **Rang 2 - Recruteur** (il peut inviter de nouveaux membres dans l'organisation).
- **Rang 1 - Membre** (rang de base).
- **Rang 1 - Esclave** (il ne bénéficie pas des bonus de l'organisation et toutes les ressources récoltées vont pour l'organisation).

![organization_promote.png](/img/commands_example/organization_promote.png)

### Inviter des joueurs dans l'organisaion (`>org invite`)
Si vous êtes recruteur de l'organisation (ou rang plus élevé), vous pouvez inviter de nouveaux joueurs avec la commande `>org invite <NomOrganisation> @Joueur`.

![organization_invite.png](/img/commands_example/organization_invite.png)

### Expulser des joueurs de l'organisation (`>org kick`)
Si vous êtes modérateur de l'organisation (ou rang plus élevé), vous pouvez expulser des joueurs de rang inférieur à vous avec la commande `>org kick <NomOrganisation> @Joueur`.
:::warning ATTENTION
Cette action a des conséquences pour la partie PvP que vous pouvez retrouver ici.
:::

![organization_kick.png](/img/commands_example/organization_kick.png)

### Supprimer l'organisation (`>org disband`)
Si vous souhaitez supprimer l'organisation, il vous suffit de faire la commande `>org disband <NomOrganisation>`.

![organization_disband.png](/img/commands_example/organization_disband.png)

:::info INFORMATION
Uniquement le chef peut supprimer l'organisation. L'ensemble des ressources dans la banque retourneront dans l'inventaire de leur joueur respectif. 
:::
:::warning ATTENTION
Cette action est irréversible.
:::

### Voir sa list d'organisations (`>org list`)
Vous pouvez rejoindre plusieurs organisations si vous le souhaitez. Cependant, si vous venez à rejoindre plusieurs organisations vous devrez choisir une organisation principale parmis toutes celles que vous avez rejoint.

![organization_list.png](/img/commands_example/organization_list.png)

:::info INFORMATION
Si vous voulez plus d'informations sur comment se passe le fait de rejoindre plusieurs organisations, cliquez ici.
:::

### Voir les améliorations d'une organisation (`>org upgrades`)
Il y a 30 améliorations disponibles:

J : Jobs\
JLU : Jobs/Lumberjack (Bûcheron)\
JMI : Jobs/Miner (Mineur)\
JDI : Jobs/Digger (Pelleteur)\
JFI : Jobs/Fisherman (Pêcheur)\
JFA : Jobs/Farmer (Fermier)\
JTO : Jobs/Toolsmith (Forgeron)\
JAL : Jobs/Alchemist (Alchimiste)

C : Cards\
M : Mana

D : Daily\
MDG : Mana/Daily/Guaranteed\
MDP : Mana/Daily/Probabilistic\
CDG : Cards/Daily/Guaranteed\
CDP : Cards/Daily/Probabilistic

H : Hourly\
MDG : Mana/Hourly/Guaranteed\
MDP : Mana/Hourly/Probabilistic\
CDG : Cards/Hourly/Guaranteed\
CDP : Cards/Hourly/Probabilistic

S : Shrine\
MDG : Mana/Treasure/Guaranteed\
MDP : Mana/Treasure/Probabilistic\
CDG : Cards/Treasure/Guaranteed\
CDP : Cards/Treasure/Probabilistic

T : Treasure\
MDG : Mana/Treasure/Guaranteed\
MDP : Mana/Treasure/Probabilistic\
CDG : Cards/Treasure/Guaranteed\
CDP : Cards/Treasure/Probabilistic

![organization_upgrades.png](/img/commands_example/organization_upgrades.png)

Il y a donc plusieurs types d'améliorations, les améliorations **J**, **M**, **C**, **D**, **H**, **S** et **T** sont des pré-requis : **acheter** des améliorations ne donne **aucun bonus** en soit mais elles sont **nécessaires pour pouvoir acheter d'autres améliorations** ensuite.

Un niveau amélioration **ne peut être acheté** que si toutes les améliorations qui la précédent dans l'arbre sont à **un niveau supérieur**. Par exemple pour acheter l'amélioration MHG de niveau 5, il faut au moins que les améliorations M et H soient aussi au niveau 5.

Les améliorations de métier:
Les améliorations **JLU**, **JMI**, **JDI**, **JFI** et **JFA** augmentent la production des ressources respectivement des commandes `>chop`, `>mine`, `>dig`, `>fish` et `>farm`.

Les améliorations **JAL** et **JTO** diminuent la consommation en mana des crafts pour **les alchimistes** et **les forgerons**. Cette amélioration n'a d'effet que si le métier de craft du joueur est **au moins 100 niveaux au dessus** de l'objet considéré.
Par exemple pour une "Medium Mining Potion" qui a un niveau d'alchimiste requis de 200, la décôte de mana de l'amélioration **JAL** ne sera appliquée que si l'alchmiste en question est **au moins niveau 300** dans son métier.