---
title: 'Apparté : les dépendances'
type: 1
date: '2020-10-13'
published: true
---

# Leçon 2 - Apparté : les dépendances

Faisons une pause théorique pour discuter de la façon dont un projet Node est bâti.

Un projet Node ne peut pas exister sans **dépendances**. Les dépendances sont des modules pré-existants ou qu'on installe, et qui permettent de se connecter à des bases de données, de simplifier les requêtes serveur, etc...

Ils composeront une partie de votre projet, et vous allez bâtir votre site, votre application, à partir de ces dépendances.


## A. Apprendre à dépendre

Une des erreurs que vous entendrez les gens mentionner TRÈS souvent est de vouloir **réinventer la roue**, c'est-à-dire de vouloir **tout coder soi-même**.

Si ça peut être intéressant sur un projet personnel, il en est autrement en milieu professionnel :
- Vous n'aurez **pas le temps** de tout faire. Le client ne va pas vous payer pendant 3 ans pour un site qu'il veut lancer dans les mois, voire les semaines qui suivent.
- Vous n'avez **pas les compétences** pour tout faire. Des outils existent, fiables, sécurisés et efficaces. Ils ont pris des années à en arriver où ils sont, et sont souvent le fruit de collaborations entre des développeurs chevronnés. Il est très probable que ce que vous obtiendrez n'arrivera pas à la cheville de l'outil existant.


## B. Apprendre à ne pas trop dépendre

Il ne faut vouloir tout faire soi-même (et c'est impossible de toute façon), mais attention à ne pas empiler les dépendances par dizaines...

Quand quelqu'un installe votre projet, les dépendances sont **installées avec**. Elles font **partie intégrante** du projet.

Cela signifie que :
- Les problèmes des dépendances deviendront des problèmes de votre projet. Et peu de modules sont exempts de bugs.
- Si la dépendance nécessite une mise à jour pour telle ou telle raison (une faille de sécurité par exemple), il est possible que votre projet ne soit plus compatible et vous devez recoder certaines parties.
- Si la dépendance **n'est plus mise à jour**, et qu'elle devient incompatible avec le reste des modules, ou qu'elle présente une faille de sécurité, vous aurez à chercher un remplacement, ce qui sera une grosse perte de temps et nécessitera de refaire certaines parties du projet (car le nouveau module fonctionnera différemment).

Ajoutons à cela que les dépendances ont elles-mêmes des dépendances, et le problème grandit de façon **exponentielle**.

Une des histoires les plus incroyables est celle de **left-pad**, ou comment un programmeur a retiré son module suite à un contentieux et [a mis en danger des milliers de projets](https://www.theregister.com/2016/03/23/npm_left_pad_chaos/).

Left-pad est le symptôme d'une génération de programmeurs qui ajoutent des modules pour n'importe quoi. Voici le code entier de left-pad :
```js
module.exports = leftpad;

function leftpad (str, len, ch) {
    str = String(str);
    var i = -1;
    if (!ch && ch !== 0) ch = ' ';
    len = len - str.length;
    while (++i < len) {
        str = ch + str;
    }
    return str;
}
```
Comme le soulève [l'article suivant](https://www.davidhaney.io/npm-left-pad-have-we-forgotten-how-to-program/), il existe même des packages pour une fonction d'une seule ligne !


## C. Trouver l'équilibre

Ainsi, tout comme il est impossible de tout voiloir coder soi-même, il faut éviter d'**installer un module pour tout et n'importe quoi**.

Il faut trouver un équilibre entre les deux. Certains modules sont nécessaires, comme on verra dans la leçon suivante. D'autres sont purement inutiles, et on peut s'en passer.

Cette problématique est plus importante en frontend, avec React, mais il faut l'avoir en tête quand on parle de dépendances en général.

