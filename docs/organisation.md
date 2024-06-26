---
sidebar_position: 6
---

# Organizations

Organizations **are made up of groups of players** who decide to join forces in order to **play together** (if you prefer, you can call them "guilds").

**Each organization** is organized by **a hierarchical structure**.

The different **members of the organization** contribute to it by **paying taxes**. The resources collected through taxes can only be used by the head of the organization and the administrators who have been chosen by him. They can **purchase improvements** which will give **bonuses** to all members of the organization.

:::info INFORMATION
Each organization also comes together for a common goal for the PvP part which you can find here.
:::

## Available actions:
All organization actions are done with the `>organization` (or `>org`) command.

### Create your organization (`>org create`)
You can create your own organization with the command `>org create <OrganizationName>` (replace `<OrganizationName>`) with the name you want to give it.

![organization_create.png](/img/commands_example/organization_create.png)

:::info INFORMATION
Creating an organization is not free, you will need **100 EnderCoins to create it**.
:::

### View organization details (`>org info`)
If you want to see the details of an organization, simply do the command `>org info <OrganizationName>`.

You can find some informations there such as:

- The head of the organization.
- The total number of members in the organization.
- The date the organization was created.
- The organization's EnderCoins capital.
- The overall tax imposed on members of the organization.
- The total number of improvements of the organization.

You can also find the list of members there.

![organization_command_info.png](/img/commands_example/organization_command_info.png)

### Promote and dismiss a member (`>org promote`)
In order for the organization to function as best as possible, it is made up of a hierarchical structure. Each rank gives different powers which you can find below:

- **Rank 6 - Leader** (he can do all actions available in the organization, there can only be one).
- **Rank 5 - Sub-leader** (he has the same rights as the leader except that he cannot delete the organization).
- **Rank 4 - Administrator** (he can purchase upgrades and promote/remove lower ranking members of the organization).
- **Rank 3 - Moderator** (he can expel members).
- **Rank 2 - Recruiter** (he can invite new members to the organization).
- **Rank 1 - Member** (basic rank).
- **Rank -1 - Slave** (he does not benefit from the organization's bonuses and all the resources collected go to the organization).

![organization_promote.png](/img/commands_example/organization_promote.png)

### Invite players to the organization (`>org invite`)
If you are a recruiter of the organization (or higher rank), you can invite new players with the command `>org invite <OrganizationName> @Player`.

![organization_invite.png](/img/commands_example/organization_invite.png)

### Kick players out of the organization (`>org kick`)
If you are a moderator of the organization (or higher rank), you can kick players lower in rank than you with the command `>org kick <OrganizationName> @Player`.
:::warning WARNING
This action has consequences for the PvP part which you can find here.
:::

![organization_kick.png](/img/commands_example/organization_kick.png)

### Delete organization (`>org disband`)
If you want to delete the organization, simply issue the command `>org disband <OrganizationName>`.

![organization_disband.png](/img/commands_example/organization_disband.png)

:::info INFORMATION
Only the leader can delete the organization. All resources in the bank will return to their respective player's inventory.
:::
:::warning WARNING
This action is irreversible.
:::

### See its list of organizations (`>org list`)
You can join multiple organizations if you wish. However, if you join several organizations you will have to choose a main organization among all those you have joined.

![organization_list.png](/img/commands_example/organization_list.png)

:::info INFORMATION
If you want more information on what it's like to join multiple organizations, click here.
:::

## See an organization's improvements
There are 30 upgrades available:

### Emplois (Jobs)

- **Jobs (J)**
- **Lumberjack (JLU)**
- **Miner (JMI)**
- **Digger (JDI)**
- **Fisher (JFI)**
- **Farmer (JFA)**
- **Forgeron (JTO)**
- **Alchemist (JAL)**

### Cards (Cards)

- **Cards (C)**

### Mana

- **Mana (M)**

### Daily (Daily)

- **Mana Daily Guaranteed (MDG)**
- **Mana Daily Probabilistic (MDP)**

### Cards
- **Cards Daily Guaranteed (CDG)**
- **Cards Daily Probabilistic (CDP)**

### Hourly (Hourly)

- **Mana Daily Guaranteed (MDG)**
- **Mana Daily Probabilistic (MDP)**
- **Cards Daily Guaranteed (CDG)**
- **Cards Daily Probabilistic (CDP)**

### Shrine

- **Mana Shrine Guaranteed  (MSG)**
- **Mana Trésor Probabilistic (MDP)**

### Trésor (Treasure)

- **Mana Treasure Guaranteed (MDG)**
- **Mana Trésor Probabilistic (MDP)**

### Cards
- **Cards Treasure Guaranteed (CDG)**
- **Cards Treasure Probabilistic (CDP)**

---

#### Légende :

- **Jobs (J) :** Options related to the types of jobs available in the organization.
- **Mana (M) :** Options related to mana generation.
- **Cards (C) :** Options related to cards.
- **Daily (D) :** Improvements applied daily.
- **Hourly (H) :** Improvements applied every hour.
- **Shrine (S) :** Improvements related to shrines.
- **Treasure (T) :** Improvements related to treasures.

![organization_upgrades.png](/img/commands_example/organization_upgrades.png)

There are therefore several types of improvements, improvements **J**, **M**, **C**, **D**, **H**, **S** and ** T** are prerequisites: **purchasing** upgrades does not give **any bonus** in itself but they are **necessary to be able to purchase other upgrades** afterwards.

An improvement level **can only be purchased** if all the improvements preceding it in the tree are at **a higher level**. For example, to purchase the level 5 MHG improvement, at least the M and H improvements must also be level 5.

Job improvements:
The improvements **JLU**, **JMI**, **JDI**, **JFI** and **JFA** increase the production of resources respectively of the commands `>chop`, `>mine`, ` >dig`, `>fish` and `>farm`.

The improvements **JAL** and **JTO** reduce the mana consumption of crafts for **alchemists** and **blacksmiths**. This improvement only has an effect if the player's crafting job is **at least 100 levels above** the item in question.
For example for a "Medium Mining Potion" which has a required alchemist level of 200, the mana cost of the improvement **JAL** will only be applied if the alchemist in question is **at least level 300 ** in his job.
