---
title: 'Introduire Express'
type: 0
date: '2020-10-18'
published: true
---

# Leçon 6 - Introduire Express

Il est temps de passer aux choses sérieuses avec **Express**.

Oui, Express. Il s'agit d'un outil très efficace pour simplifier le travail avec des endpoints, et tout ce qui concerne le routage, les requêtes, etc...

Si vous travaillez avec Node, il est presque impossible d'échapper à ce module.


## A. Étape 1 - Intégrer Express

Pour installer Express, nous allons utiliser un des codes suivants :

```-
npm install express
```

ou

```-
npm i express
```

Ouvrez **package.json** et vérifiez que le module est correctement enregistré. Vous devriez voir une nouvelle clé `dependencies` qui inclut Express.

```js
    "dependencies": {
        "express": "^4.17.1"
    },
```

Contrairement à Nodemon, Express est une dépendance qui sera utilisée en production. C'est pour cela qu'il n'est pas dans `devDependencies`.


## B. Étape 2 - Définir Express comme middleware du serveur

Le titre est un peu pompeux mais le code que nous allons ajouter est simple.

Ouvrez **index.js/server.js**. Nous allons **réécrire tout le code**.

```js
// Modules
import express from 'express';

// Mise en place du serveur
const app = express();

// Écoute du port
const PORT = 3088;
app.listen(PORT, () => console.log(`Serveur actif sur le port ${PORT}`));
```

On notera que tout ce qu'on a fait, c'est créer une constante `app`, qui est une instance d'express.

Dorénavant, tout le travail qu'on effectuera avec express sera ciblé sur cette constante `app`.


## C. Étape 3 - Créer des routes

Pour vérifier que ça fonctionne, nous allons créer deux routes. Ajoutez ceci en fin de code :

```js
// Test (à supprimer)
app.get("/route_1", async (req, res, next) => {
    res.send('Bienvenue sur la route 1.');
});

app.get("/route_2", async (req, res, next) => {
    res.send('Bienvenue sur la route 2.');
});
```

Ouvrez votre navigateur et entrez les url `http://localhost:3088/route_1` et `http://localhost:3088/route_2`. Vous devriez voir les messages apparaître.

Express fonctionne correctement, mais nous avons un petit problème...

Un des principes en programmation Javascript, c'est de diviser le code en parties dont chacune va gérer une chose en particulier.

Par exemple, **transpiler.js** se charge de la transpilation (et rien d'autre) et **index.js/server.js** est le serveur.

Sauf que... en introduisant les routes dans ce fichier, nous avons commencé à mélanger les choses.

Le **routage** est une partie de l'application assez importante pour mériter son script à part, ne serait-ce que par souci d'organisation. Si on constate un problème dans les routes, on ne veut pas avoir :
- la définition du serveur
- la définition du routage
- et les routes

...dans le même fichier.

Nous allons donc réorganiser le code.


## D. Étape 4 - Isoler le routage

Tout d'abord, supprimez d'**index.js/server.js** le code des deux routes que nous avons ajouté en dernier.

Créez un dossier **routes**. Dans celui-ci, on va créer un fichier **test.js**.

Dans **test.js**, on va écrire le code suivant :

```js
import express from 'express';

const router = express.Router();

router.get("/", async (req, res, next) => {
    res.send('Bienvenue sur la route de test.');
});

export default router;
```

Vous venez d'appeler une instance de routeur, qui vient avec Express. L'objet router est comme une sous-app qui gère ses propres routes.

On crée donc une instance de routeur, on lui ajoute une route `GET` et on l'exporte.

Passons maintenant à la suite : lier le routeur au serveur express.

À la **racine du projet**, créez un fichier **router.js**.

Ajoutez-y ce code :

```js
// Modules
import express from 'express';

// Importation des routes
import testRouter from './routes/testRouter';

// Création du routeur
const router = express.Router();

// Route de base
router.get("/", async (req, res, next) => {
    res.send('Bienvenue sur mon application.');
});

// Insérer les routes ici
router.use('/test', testRouter);

export default router;
```

Enfin, dans **index.js/server.js**, après :

```js
import express from 'express';
```
on ajoute :
```js
import router from './router';
```

Puis, en fin de fichier, ajoutez :

```js
// Routage
app.use(router);
```

Pour vérifier que tout fonctionne, entrez `http://localhost:3088/test` dans le navigateur et si vous obtenez le message, tout fonctionne.

Résumons ce que nous avons fait :
- Nous avons introduit **Express** sous la forme de la constante `app` pour faciliter la mise en place des routes.
- Nous avons séparé notre code pour le rendre plus facile à maintenir, grâce notamment au fichier **router.js** qui va gérer les routes localement.  
Cette étape n'était pas obligatoire mais elle rend les choses plus simples en distinguant le routage du reste de la logique du serveur.
- Enfin, nous avons créé un sous-routeur dans **routes/testRouter.js**, qui gérera toutes les routes commençant par `/test/`.
