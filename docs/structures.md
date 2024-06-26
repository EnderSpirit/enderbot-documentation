---
sidebar_position: 11
---

# Structures

The structures are directly connected to the servers. A server is considered a structure. You can evolve your structure based on your activity on EnderBot with your mana and card summons.

When you start investing in a structure, you must spend 100,000 mana points in total or 250 card summons to level up your structure.

An action gives you resources on the bot. The number of resources given all depends on the productivity of the server. The higher the productivity, the more resources your action will give you.

Server productivity is based on the following data:
- The total number of :endercoin: Endercoins invested on the structure.
- The number of members present on the structure (bots do not count).
- Server activity.
- Chance.
- Other factors that we keep secret.

:::info INFORMATION
Servers with many members start at a slightly higher level.
:::
:::warning WARNING
The more your structure increases in levels, you will have to spend mana and summon cards to make it evolve.
:::

### Consult information about a structure (`>structure info`)
When you perform the command (`>structure info`), you can find the main information about it like:
- The name of the structure.
- The level of the structure.
- The number of members of the structure.
- The productivity of the structure.

- The total number of shares of the structure.
- The number of shares available in the structure.
- The number of shares purchased from the structure.

Further down you will find other additional information such as:
- Details of the number of shares owned by each member.
- The contribution of each player to the structure (resources collected and summons made).

Finally, at the very bottom you can find the progress before gaining the structure in levels:
- The number of mana spent before the objective.
- The number of summons made before the objective.

![structures_info.png](/img/commands_example/structures_info.png)

### Buy shares (`>str buy`)
Shares are a bit like shares on the stock market. The more levels your structure gains, the more shares there will be available.

You can then buy shares on the structure for 100 :endercoin: Enderdoins with the command (`>str buy`).

![structures_buy.png](/img/commands_example/structures_buy.png)

:::tip TIP
Remember to collect resources and summon cards to protect your actions from other players who would be tempted to steal them from you.
:::
:::warning WARNING
You can buy shares on the same structure every 16 hours.
:::

### Resell shares (`>str sell`)
If you want to resell your shares for various reasons, simply make the command (`>str sell`).

![structures_sell.png](/img/commands_example/structures_sell.png)

:::info INFORMATION
Once you have sold your shares, you do not immediately get your :endercoin: Endercoins back. You must wait for another player to buy your shares to get them back.
:::

### Force another player's actions (`>str forcebuy`)
If there are no more actions available on the server, you can always force the actions of other players with the `>str forcebuy` command. However, some criteria are required to force the actions of other players:
- Have twice as many resources produced as the targeted player on the structure.
- Have twice as many summons as the targeted player on the structure.

![structures_force.png](/img/commands_example/structures_force.png)

### Claim your shares (`>str dividends`)
To claim your shares on a structure, simply use the command `>str dividends`.

You then get the following rewards:
- :cardessence: Card essence.
- :mana: Mana.
- :endercoin: Endercoins.
- :golem: Golems.

![structures_dividends.png](/img/commands_example/structures_dividends.png)

:::info INFORMATION
You can consult your list of actions on the different structures with the command `>str`.
:::

### Claim your shares remotely (`>str dividends NomDeLaStructure`)
You can also claim your dividend rewards remotely if for example you no longer have access to the server. To do this, simply issue the command `>str dividendsStructureName`.

![structures_div_away.png](/img/commands_example/structures_div_away.png)

:::warning WARNING
Even though you can claim your actions remotely, your actions can still be forced by other players except if your shares are protected.
:::

### Consult your actions on the different servers (`>str list`)
You can consult your list of actions on the different structures with the command `>str`.

You can then find several information such as:
- Server productivity.
- The number of shares you have on the server.
- The name of the structure (server).
- Whether dividends are ready to be claimed or not.

![structures_list.png](/img/commands_example/structures_list.png)

:::info INFORMATION
You can claim the rewards of your shares on the different structures once a week. Rewards are reset once a week on mondays at 2 a.m.
::: 

### Enable structure on a server (`>str enable`)
If you want to make your server an evolving structure, you just need to do (`>str enable`) so that the mana spent and the invocations of cards are counted to evolve the structure.

### Disable the structure on a server (`>str disable`)
If you wish to disable the structure on your server, simply issue the command `>str disable`. The mana spent as well as the summons of cards on the server will then no longer be counted to evolve the structure.