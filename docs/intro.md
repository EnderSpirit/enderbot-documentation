---
sidebar_position: 1
---

# <u>Guide du débutant:</u>

Si vous êtes nouveau sur EnderBot ou vous êtes perdus vis à vis du bot, cette page est faite pour vous!

# <u>**Préambule:**</u>
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
# <u>Les commandes communes:</u>                           

# <u>Comment jouer?</u>
EnderBot se décompose en deux sous-systèmes de jeu majeurs : **la partie RPG** et **la partie de collecte de cartes**. Ces deux systèmes sont indépendents mais se rejoignent à haut niveau, **vous pouvez choisir de jouer** à seulement l'un ou l'autre, ou les deux !



# <u>Commande `>hourly` (`>hr`)</u>
La commande `>hourly` permet de récupérer des récompenses toutes les heures.
Cette commande a un cooldown de 60 minutes et donne des récompenses pour avancer plus vite dans le jeu, n'hésitez pas à l'utiliser dès qu'elle est disponible si vous souhaitez avancer rapidement.
Cette commande a également **une mécanique de combo**, si vous récupérez un `>hourly` 90 minutes après avoir récupéré votre dernier `>hourly` vous gagnerez un peu plus de ressources, les récompenses n'augmentent plus après le combo 10. **Pour optimiser la production de ressources il est donc préférable de les enchainer**.


Sur le screeen ci-dessous, on voit 4 récompenses conférées par cette commande dans l'ordre:

• **XP** (points d'expérience permettant de monter en niveau).

• **Mana** (permet de faire des actions sur le RPG).

• **EnderCoin** (monnaie du jeu permettant d'acheter d'acheter des licence d'échange ou d'échanger des cartes/ressources avec les autres joueurs).

• **Carte essence** (pour rénitiatliser le temps d'attente pour invoquer des cartes ou récupérer des cartes).

# <u>Commande `>daily` (`>da`)</u>
La commande `>daily` est très similaire à la commande `>hourly` exceptée qu'elle n'est faisable qu'une fois par jour, donne plus de récompenses et n'a pas de système de combo.

# <u>Commande `>shrine` (`>shr`)</u>
La commande `>shrine` permet de lancer un rituel et d'obtenir des récompenses.
Après avoir utilisé `>shrine start` (`>shr s`), vous devez **attendre 4 heures** avant de récupérer vos récompenses à l'aide de la commande `>shrine claim` (`>shr c`). Une fois les 4 heures passées vous avez **1 heure pour récupérer** vos récompenses. Une fois ce délais passé, vous ne pourrez plus récupérer de récompenses et votre shrine sera **cassé pour les 24 prochaines heures**.

Par exemple, si vous **lancez un rituel à 10h**, vous devrez le **récupérer entre 14h et 15h** pour obtenir les récompenses.
:::tip INFORMATION
N'importe laquelle de nos souscriptions premium permet de réduire le temps d'attente si jamais vous cassez votre shrine.
:::

# <u>Commande `>treasure` (`>tr`)</u>
Le trésor est **une mécanique compétitive** et globale sur le bot, il s'agit d'une mécanique nécessitant **un style de jeu actif**.
Le trésor est une récompense disponible **toutes les quelques minutes**, la particularité étant que cette récompense ne sera donnée qu'au joueur le plus rapide à effectuer la commande lorsque le trésor sera disponible. (Ça se joue usuellement à quelques millisecondes et à la chance !)

:::tip INFORMATION
Ça se joue usuellement à quelques millisecondes et à la chance. Donc à vous d'être le plus rapide à envoyer la commande lorsqu'il est disponible!
:::

Lorsque vous effectuez la commande `>treasure`, vous verrez probablement un message de la sorte :

Si le trésor est indisponible (ce qui est le cas dans 99% des cas lorsque vous effectuez la commande),
la commande vous donnera plusieurs informations tels que:

• **Le pseudo du dernier joueur** ayant pris le dernier trésor.

• **Le nom de son organisation** si jamais il en a une.

• **Le temps restant** avant que le prochain trésor soit disponible.
:::tip INFORMATION
Un joueur ne peut récupérer que **10 trésors par jour** afin d'éviter qu'un monopole de joueurs capturent les trésor et ainsi vous donner plus de chances d'en capturer un. Vous pouvez consulter **combien vous avez pris de trésor** au cours de 24 dernières heures avec la commande `>treasure limit` (`>tr l`).
:::

# <u>Commande `>cooldown` (`>cd`)</u>
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

# <u>Les commandes RPG:</u>      
# <u>Commande `>invotory` (`>inv`)</u>
L'inventaire vous permet de voir tout ce que vous possédez sur le bot:

• **Sur la première page** vous pourrez y trouver **toutes les informations générales** à propos de votre compte de jeu Enderbot. 

• **Sur la seconde page** vous pourrez y trouver **toutes les ressources** que vous possédez sur le bot.

• **Sur la troisième page** vous pourriez y trouver **toutes les ressources spéciales** afin de réaliser certaines potions.

• **Sur la quatrième page** vous pourrez y trouver **toutes les potions** que vous avez fabriquées.

• **Sur la cinquième page** vous pourrez y trouver **tous les outilsùù que vous possédez sur le bot.

# <u>Commande `>craft` (`>cra`)</u>
La commande `>craft` est utilisée pour la fabrication d'outils et de potions.

Si vous ne préciser pas d'arguments, le bot vous proposera d'ouvrir l'interface du menu de craft :

Pour les outils, il est possible de rapidement fabriquer le prochain tier d'outil en se basant sur votre outil actuellement équippé, les arguments possibles sont :


# <u>Commande `>forge` (`>for`)</u>

# <u>Commande `>exploration` (`>exp`)</u>
La commande `>exploration` permet de récupérer de l'XP, des EnderCoins et des ressources d'exploration spécifique à une zone (utile pour les alchimistes).
La commande peut être lancée jusqu'à six joueurs en simultané pour un petit boost de récompenses.


# Markdown Features

Docusaurus supports **[Markdown](https://daringfireball.net/projects/markdown/syntax)** and a few **additional features**.

## Front Matter

Markdown documents have metadata at the top called [Front Matter](https://jekyllrb.com/docs/front-matter/):

```text title="my-doc.md"
// highlight-start
---
id: my-doc-id
title: My document title
description: My document description
slug: /my-custom-url
---
// highlight-end

## Markdown heading

Markdown text with [links](./hello.md)
```

## Links

Regular Markdown links are supported, using url paths or relative file paths.

```md
Let's see how to [Create a page](/create-a-page).
```

```md
Let's see how to [Create a page](./create-a-page.md).
```

**Result:** Let's see how to [Create a page](./create-a-page.md).

## Images

Regular Markdown images are supported.

You can use absolute paths to reference images in the static directory (`static/img/docusaurus.png`):

```md
![Docusaurus logo](/img/docusaurus.png)
```

![Docusaurus logo](/img/docusaurus.png)

You can reference images relative to the current file as well. This is particularly useful to colocate images close to the Markdown files using them:

```md
![Docusaurus logo](./img/docusaurus.png)
```

## Code Blocks

Markdown code blocks are supported with Syntax highlighting.

````md
```jsx title="src/components/HelloDocusaurus.js"
function HelloDocusaurus() {
  return <h1>Hello, Docusaurus!</h1>;
}
```
````

```jsx title="src/components/HelloDocusaurus.js"
function HelloDocusaurus() {
  return <h1>Hello, Docusaurus!</h1>;
}
```

## Admonitions

Docusaurus has a special syntax to create admonitions and callouts:

```md
:::tip My tip

Use this awesome feature option

:::

:::danger Take care

This action is dangerous

:::
```

:::tip My tip

Use this awesome feature option

:::

:::danger Take care

This action is dangerous

:::

## MDX and React Components

[MDX](https://mdxjs.com/) can make your documentation more **interactive** and allows using any **React components inside Markdown**:

```jsx
export const Highlight = ({children, color}) => (
  <span
    style={{
      backgroundColor: color,
      borderRadius: '20px',
      color: '#fff',
      padding: '10px',
      cursor: 'pointer',
    }}
    onClick={() => {
      alert(`You clicked the color ${color} with label ${children}`)
    }}>
    {children}
  </span>
);

This is <Highlight color="#25c2a0">Docusaurus green</Highlight> !

This is <Highlight color="#1877F2">Facebook blue</Highlight> !
```

export const Highlight = ({children, color}) => (
  <span
    style={{
      backgroundColor: color,
      borderRadius: '20px',
      color: '#fff',
      padding: '10px',
      cursor: 'pointer',
    }}
    onClick={() => {
      alert(`You clicked the color ${color} with label ${children}`);
    }}>
    {children}
  </span>
);

This is <Highlight color="#25c2a0">Docusaurus green</Highlight> !

This is <Highlight color="#1877F2">Facebook blue</Highlight> !
