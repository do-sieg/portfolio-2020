---
title: 'Créer une route users'
type: 0
date: '2020-10-28'
published: true
---

# Leçon 10 - Créer une route users

Dans la leçon précédente, nous avons créé une fonction de récupération de données, `getAllRows`. Nous allons l'utiliser pour créer une route qui va obtenir la liste de tous les utilisateurs.


## A. Étape 1 - Créer le contrôleur d'utilisateurs

Dans la racine du projet, créez un dossier **control**. Dans ce dossier, créez un fichier **users.js**.

Dans ce fichier, ajoutez le code suivant :

```js
export function getAllUsers() {
    return getAllRows('users');
}
```

Nous venons de créer une fonction `getAllUsers` qui n'est qu'un renvoi vers `getAllRows` avec un paramètre de nom de table.

Deux raisons pour passer par une telle fonction au lieu de directement appeler `getAllRows` :
- La **sémantique** : je sais d'un coup d'oeil à quoi me sert ma fonction en voyant son nom.
- L'**anticipation** : la fonction `getAllUsers` est appelée à évoluer par la suite et être plus qu'un simple appel vers l'autre fonction. Il vaut mieux la créer dès maintenant par souci d'organisation.


## B. Étape 2 - Définir la route users

Ouvrez le fichier **router.js** à la racine du projet.

Ajoutez ce code en haut :

```js
import usersRouter from './routes/usersRouter';
```

Ensuite, plus bas, dans la fonction `withRoutes`, ajoutez avant `return app;` la ligne suivante :

```js
app.use('/users', usersRouter);
```

Dans le dossier **routes** du projet, créez un nouveau fichier **usersRouter.js** et ajoutez le code suivant :

```js
import express from 'express';
import { getAllUsers } from '../control/users';

const router = express.Router();

router.get("/", async (req, res, next) => {
    try {
        const rows = await getAllUsers();
        res.status(200).json({ data: rows });
    } catch (err) {
        console.error(err); // On affiche l'erreur côté serveur
        res.status(500).json({ data: null, message: "Erreur interne du serveur" }); // L'erreur renvoyée est générique
    }
});

export default router;
```

Il est temps maintenant d'expliquer ce qu'on vient de faire.
- Tout comme la route `/test` que nous avions créée lors de l'introduction d'Express, nous avons ajouté une route `/users`, qui est un routeur créé dans **usersRouter.js** et qu'on appelle dans **router.js**.
- Le chemin racine de cette route fait un appel à notre fonction de contrôle `getAllUsers` et gère les réponses selon le succès ou l'échec de cet appel.


## C. Étape 3 - Tester la route users

Dans le navigateur, entrez `http://localhost:3088/users`. Le message suivant devrait s'afficher :
```
{"data":[]}
```

Pour vérifier ce qui arrive en cas d'erreur, allez dans **control/users.js** et changez :

```js
export function getAllUsers() {
    return getAllRows('users');
}
```

en :

```js
export function getAllUsers() {
    return getAllRows('userz');
}
```

Retournez dans le navigateur et rafraîchissez la fenêtre. Vous obtiendrez :

```
{"data":null,"message":"Erreur interne du serveur"}
```

Et la console affichera une erreur.

Rétablissez le code de **control/users.js** avant de sauvegarder. Nous allons expliquer quelques notions de renvoi de données à la leçon suivante.