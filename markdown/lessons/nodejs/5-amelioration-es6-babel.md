---
title: 'Amélioration : ES6 et Babel'
type: 0
date: '2020-10-18'
published: true
---

# Leçon 5 - Amélioration : ES6 et Babel

Javascript est un langage qui a pas mal évolué et le nouveau standard est l'**ES6**, qui redéfinit pas mal de choses au niveau de la syntaxe.

La plupart des bibliothèques ou des frameworks utilisent l'ES6 par défaut. Mais Node est encore en CommonJS, ou "JS classique".

Par souci de cohérence, nous allons passer le projet en ES6, pour ne pas avoir à jongler constamment entre deux syntaxes si on décide d'utiliser un client avec React ou de passer le projet sous NextJS, par exemple.


## A. Étape 1 - Intégrer Babel

Babel est un outil de **transpilation**. Il permet pour notre projet de convertir la syntaxe ES6 en CommonJS lors de l'exécution. En d'autres termes, vous codez en JS moderne, Babel le change en JS clasique pour que Node puisse se lancer normalement.

La première chose que nous allons faire, c'est d'installer trois modules de développement. Vous pouvez les installer d'une traite comme suit :

```-
npm i --save-dev babel-polyfill babel-preset-env babel-register
```

Une fois ces trois modules installés, nous allons créer un petit script dans le dossier du projet, à la racine, qu'on appelera **transpiler.js**.

Il contient le code suivant :

```js
// Transpile tout le code qui suit cette ligne avec Babel
require('babel-register')({ presets: ['env'] });
require('babel-polyfill');

// Importe le reste de l'application
module.exports = require('./index.js');
```

Comme l'indiquent les commentaires, ce script va transpiler/convertir le reste de l'application en ES6.  
**N'oubliez pas de changer le nom du fichier de la dernière ligne si vous n'utilsez pas index.js** !

Pour prendre en compte ce fichier, nous allons procéder à quelques changements dans la façon de lancer notre projet.

Dans **package.json**, trouvez les lignes suivantes :

```js
    "start": "node index.js",
    "dev": "nodemon index.js"
```

et changez-les pour :

```js
    "start": "node transpiler.js",
    "dev": "nodemon transpiler.js"
```

Lancez le projet et vérifiez que tout fonctionne comme avant.


## B. Étape 2 - Mettre à jour la syntaxe

Nous allons maintenant passer les _require_ d'**index.js/server.js** en _imports_ ES6.

Changez cette ligne :

```js
const http = require('http');
```

en :

```js
import http from 'http';
```

Le serveur devrait avoir redémarré et tout devrait fonctionner comme avant. Votre projet est donc conforme aux derniers standards du JavaScript.


## C. Point sur Node, et l'état actuel du projet
Nous sommes en fin 2020 quand j'écris ces lignes, et Node devrait supporter l'ES6 assez rapidement. Dans l'état actuel des choses, ce n'est pas encore très stable, et la transpilation demeure utile.

Quant au projet, avec Nodemon et Babel, on a un processus très simple :
- Nodemon lance le transpileur
- Le transpileur lance **index.js/server.js**
- **index.js/server.js** est le point d'entrée du reste de l'application.

La suite va nous mener à étoffer l'application.