---
sidebar_position: 7
---

# Adventure map

Your character (represented by your Discord profile photo), is always located somewhere among the **12 zones** of the island of Enderia.

When you start playing EnderBot, you will automatically be located at the beach.

![advmap_multi.png](/img/commands_example/advmap_multi.png)

The following twelve zones are:
- The beach.
- Lake.
- The village (this is where you have to go if you want to buy something in the shop).
- The mine.
- The forest.
- The farm.
- Factory.
- The volcano.
- The Tundra.
- The desert.
- Tower.
- The capital.

### Change your location on the map (`>move NomDeLaLocalisation`)
If you want to **move zone** on the map, you must **move to an adjacent zone** on the map.

If you ever no longer remember the names of the different areas on the map, simply perform the command without putting a name in order to obtain the list of the different places available.

![move_success.png](/img/commands_example/move_success.png)

Once you have chosen a destination, simply do the command `>moveZoneName`.

![move_no_args.png](/img/commands_example/move_no_args.png)

:::tip TIP
The bot considers that your character is always in a zone, even if you are moving, as long as your journey is not completely finished, the bot will consider that you are still in your original zone for commands that are affected by your location.
:::

The commands affected by localization are:
- `>work`
- `>shrine` (gives a boost if you are in the village or capital area).
- `>shop` (requires being in the village).
- `>exploration` (as this is its own mechanic, click here).