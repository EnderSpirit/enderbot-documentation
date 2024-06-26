---
sidebar_position: 12
---

# PvP

PvP takes place on **a war map** which you can find below. It has the shape **radius 11**. Each card is **located by a coordinate** which allows it to be located. The goal of PvP is that **your organization** and **yourself** own **a castle** and expand your territories as much as possible while **confronting** other organizations. You will face other organizations with golems. PvP **is not only used to face other organizations** but also unlocks an exclusive resource depending on the territory you own. This is **dark mana**.

![pvp_warmap.png](/img/commands_example/pvp_warmap.png)

### Prerequisites to participate in the war map
To be able to participate on the war map you must have the following elements:
- **An organization** with a castle on the war map.
- **A general** to be able to place golems on the war map.
- **Golems**.

## The different territory on the war map
On the war map, you can find **4 types of territory** which have different functionalities.

### The castle
Each organization has **a castle** which is located in a fixed location on the map. The castle has **several strong points** that the other boxes do not have. The specific features of the castle are as follows:
- **All troops in the castle are protected** and **cannot be attacked** by opposing organizations.
- Each general you decide to put on the war map **must go through the castle**.

![castle_hex.png](/img/warmap/tiles/castle_hex.png)

:::info INFORMATION
To own a castle you must be in **the top 16 organizations** with improvements.
:::

### The grass
The grass is a space which allows you to **separate the different runes from each other** and which allows you to **produce a little bit** of dark mana. Only the 5 players with the most troops on the rune produce dark mana. The distribution of production goes like this:
- +0.25 :darkmana: Dark Mana/hour for the first player with the most troops on the rune.
- +0.17 :darkmana: Dark Mana/hour for the second player with the most troops on the rune.
- +0.13 :darkmana: Dark Mana/hour for the third with the most troops on the rune.
- +0.10 :darkmana: Dark Mana/hour for the fourth with the most troops on the rune.
- +0.08 :darkmana: Dark Mana/hour for the worrywart with the most troops on the rune.

![grass_hex.png](/img/warmap/tiles/grass_hex.png)

### The supreme rune
This is **the central rune** on the card. This rune is different from the others because the 5 players with the most troops on this space produce **1 dark mana** per hour. It is therefore a rune that turns out to be **much more productive** than the other runes.

![supreme_rune_hex.png](/img/warmap/tiles/supreme_rune_hex.png)

### The runes
Runes are spaces on the map that allow you to produce dark magic. There are 17 on the map. Only the 5 players with the most troops on the rune produce dark mana. The distribution of production goes like this:
- +1.00 :darkmana: Dark Mana/hour for the first player with the most troops on the rune.
- +0.50 :darkmana: Dark Mana/hour for the second player with the most troops on the rune.
- +0.33 :darkmana: Dark Mana/hour for the third with the most troops on the rune.
- +0.25 :darkmana: Dark Mana/hour for the fourth with the most troops on the rune.
- +0.20 :darkmana: Dark Mana/hour for the worrywart with the most troops on the rune.
![rune_hex.png](/img/warmap/tiles/rune_hex.png)


:::warning WARNING
If you are outside the top 5 you are not producing dark mana.
:::

### Promote a general and place him on the war map
To promote a general, you must do the command `>card promoteCardID.` Once promoted, simply click on your organization's castle and click on "Spawn Forces". A menu will then open and you just need to select your general and validate. Once your general is in your castle, you can then move him as you wish and be able to make golems appear when he is stationed on a territory.

![pvp_promote.png](/img/commands_example/pvp_promote.png)

:::warning WARNING
You must have 6600 card power points to promote a general.
:::

### Explanations on golems and their use
Golems are like your troops on the war map. The calculation of your golem production is based on your number of unique cards possessed as well and your level.
When you want to place golems on the war map (as a reminder, you are obliged to place them via a general), you then have the choice of placing them either in attack or in defense. As you will have understood, attacking golems are used to attack enemy defenses and defenders know how to defend against enemy attacks.

To place your golems, simply follow the following procedure:
- Click on the box where you want your golems to appear (with a general of course).
- Click on "Spawn forces".
- Determine how many troops you want to appear in both attack and defense.
- To validate.
- Wait for loading and your golems will be deployed over time.

![pvp_spawn.gif](/img/commands_example/pvp_spawn.gif)

### Moving golems
If you wish, you can move golems to another square. Keep in mind that you cannot teleport golems. If you want to move them several squares, you will have to go through all the squares which separate the square where the golems are located and the destination square.

To move your golems, simply follow the following procedure:
- Click on the box where you want to move your golems (you can also move a general if you wish).
- Click on “Move forces”.
- Determine how many troops you want to move both in attack and defense.
- To validate.
- Wait for loading and you will have to wait 1 hour for them to move from one space to another. Moving golems are represented by a red arrow.

![pvp_moves.gif](/img/commands_example/pvp_moves.gif)

### Study of a territory
For example, in the screenshot below, we will focus on the left menu. We can see that the rune has the following coordinates (0, 9, -9) and that it is owned by the railgun organization. In total there are 38,200 attacking golems posted on the rune as well as 66,200 defending golems.

Further down we can see that the player starducks. has a general as well as 4924 attackers and 32400 defenders. Then, if we continue to scroll down the menu, we can see information about other players.

![pvp_info.png](/img/commands_example/pvp_info.png)

:::tip TIP
You can view your golem production on your `>inv` inventory.
:::
:::info INFORMATION
When you place golems on a square, only you can see how many golems you place.
:::
:::warning WARNING
If several of you make golems appear on the same square, the waiting time for them to be placed will be extended.
:::