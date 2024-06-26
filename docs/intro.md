---
sidebar_position: 1
---

# Beginner's Guide

If you are new to EnderBot or you are lost about the bot, this page is for you!

# **Préambule:**
Once you have accepted the game rules, you can start playing the bot.

Please note that for all documentation, commands are prefixed with EnderBot's default prefix which is `>`. However, you can still customize the bot prefix if it does not contain you with the `>prefix` command (Only server administrators can change the bot prefix).
:::tip INFORMATION
For example the `>ping` command can also be executed by typing `ebping` or even as a slash command with `/ebping`.
Most commands in the game can be executed as a slash command.
:::

However, most players prefer to use prefix commands because they are much more convenient than slash commands.

:::tip ADVICE
Do not hesitate to use abbreviations as much as possible in order to save as much time as possible!
:::
# Common commands:                           

# How to play?
EnderBot is broken down into two major game subsystems: **the RPG part** and **the card collecting part**. These two systems are independent but come together at high level, **you can choose to play** only one or the other, or both!

# Command `>hourly` (`>hr`)
The `>hourly` command allows you to collect rewards every hour.
This command has a 60 minute cooldown and gives rewards for advancing faster in the game, don't hesitate to use it as soon as it becomes available if you want to advance quickly.
This command also has **a combo mechanic**, if you collect an `>hourly` 90 minutes after collecting your last `>hourly` you will gain a little more resources, the rewards no longer increase after combo 10 . **To optimize the production of resources it is therefore preferable to chain them**.

On the screeen below, we see 4 rewards conferred by this command in order:

• **XP** (experience points allowing you to level up).

• **Mana** (allows you to perform actions on the RPG).

• **EnderCoin** (in-game currency allowing you to purchase exchange licenses or exchange cards/resources with other players).

• **Essence card** (to reset the waiting time to summon cards or collect cards).

![hourly_cooldown.png](/img/commands_example/hourly_cooldown.png)
![hourly_success.png](/img/commands_example/hourly_success.png)

# Command `>daily` (`>da`)
The `>daily` command is very similar to the `>hourly` command except that it can only be done once per day, gives more rewards and has no combo system.

![daily_cooldown.png](/img/commands_example/daily_cooldown.png)

# Command `>shrine` (`>shr`)
The `>shrine` command allows you to launch a ritual and obtain rewards.
After using `>shrine start` (`>shr s`), you must **wait 4 hours** before claiming your rewards using the `>shrine claim` (`>shr c`) command. Once the 4 hours have passed you have **1 hour to collect** your rewards. Once this deadline has passed, you will no longer be able to collect rewards and your shrine will be **broken for the next 24 hours**.

![shrine_start_cooldown.png](/img/commands_example/shrine_start_cooldown.png)
![shrine_claim.png](/img/commands_example/shrine_claim.png)
![shrine_break.png](/img/commands_example/shrine_break.png)

For example, if you **cast a ritual at 10 a.m.**, you will need to **collect it between 2 p.m. and 3 p.m.** to get the rewards.
:::tip INFORMATION
Any of our premium subscriptions can reduce waiting time if you ever break your shrine.
:::

# Command `>treasure` (`>tr`)
Treasure is **a competitive** and global mechanic on the bot, it is a mechanic requiring **an active play style**.
The treasure is a reward available **every few minutes**, the particularity being that this reward will only be given to the player fastest to complete the order when the treasure is available. (It usually comes down to a few milliseconds and luck!)
:::tip INFORMATION
It usually comes down to a few milliseconds and luck. So it's up to you to be the quickest to send the order when it's available!
:::

When you run the `>treasure` command, you will probably see a message like this:
![treasure_not_available.png](/img/commands_example/treasure_not_available.png)

If the treasure is unavailable (which is the case in 99% of cases when you place the order),
the command will give you several information such as:

• **The nickname of the player** who took the last treasure.

• **The name of his organization** if he has one.

• **The time remaining** before the next treasure becomes available.
:::tip INFORMATION
A player can only collect **10 treasures per day** in order to avoid a monopoly of players capturing treasures and thus giving you more chances of capturing one. You can check **how much treasure you have taken** in the last 24 hours with the `>treasure limit` (`>tr l`) command.

![treasure_limit.png](/img/commands_example/treasure_limit.png)
:::

# Command `>cooldown` (`>cd`)
The cooldown command allows you to easily visualize most of the cooldowns on your different commands, such as:

• Waiting time for the `>hourly` command.

• Waiting time for the `>daily` command.

• Waiting time for the order before collecting a new card.

• Waiting time for the `>summon` command.

• Waiting time for the `>shrine` command.

• Waiting time for the `>vote` command.

• Waiting time for the `>exploration` command.

• Waiting time for the `>move` command (if you are traveling on the map).

• Waiting time for the `>ritual` command (if you are participating in a ritual).

![cooldown.png](/img/commands_example/cooldown.png)


# The RPG commands:      
# Command `>inventory` (`>inv`)
The inventory allows you to see everything you own on the bot:

• **On the first page** you can find **all the general information** about your Enderbot game account.
![inventory_general.png](/img/commands_example/inventory_general.png)

• **On the second page** you will be able to find **all the resources** that you have on the bot.
![inventory_common.png](/img/commands_example/inventory_common.png)

• **On the third page** you could find **all the special resources** to make certain potions.

![inventory_exploration.png](/img/commands_example/inventory_exploration.png)

• **On the fourth page** you can find **all the potions** that you have made.
![inventory_alchemy.png](/img/commands_example/inventory_alchemy.png)

• **On the fifth page** you can find **all the tools** that you have on the bot.
![inventory_items.png](/img/commands_example/inventory_items.png)


# Command `>craft` (`>cra`)
The `>craft` command is used for crafting tools and potions.

![craft_menu.png](/img/commands_example/craft_menu.png)
:::info INFORMATION
If you need more information about explorations click here.
:::

# Command `>forge` (`>for`)
The `>forge` command is improved the statistics of your items depending on the chosen job. There are 5 levels of item improvement. If you would like to know more information click here.
![forge_pickaxe.png](/img/commands_example/forge_pickaxe.png)

# Command `>exploration` (`>exp`)
The `>exploration` command allows you to recover XP, EnderCoins and exploration resources specific to an area (useful for alchemists).
The command can be launched with up to six players simultaneously for a small boost in rewards.
![advmap_solo.png](/img/commands_example/advmap_solo.png)
:::info INFORMATION
If you need more information about explorations click here.
:::