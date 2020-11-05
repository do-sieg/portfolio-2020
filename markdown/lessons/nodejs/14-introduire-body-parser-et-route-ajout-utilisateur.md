---
title: "Introduire Body-parser et créer une route d'ajout d'utilisateur"
type: 0
date: '2020-11-05'
published: true
---

# Leçon 14 - Introduire Body-parser et créer une route d'ajout d'utilisateur

Nous en étions restés à la création de la fonction d'ajout d'utilisateur. Il faut maintenant passer à la route qui va lancer cette fonction.


## A. Étape 1 - Créer la route

Ouvrez **routes/usersRouter.js** et ajoutez ce code à la fin, avant l'export :

```js
router.post("/register", async (req, res, next) => {
    try {
        const result = await addUser(
            req.body.email,
            req.body.password,
            req.body.firstName,
            req.body.lastName,
        );
        res.status(200).json({ data: { id: result }, message: "Utilisateur créé" });

    } catch (err) {
        console.error(err);
        res.status(500).json({ data: null, message: "Erreur interne du serveur" });
    }
});
```

N'oubliez pas d'importer `addUser`.

La route est plutôt simple : on lance la fonction `addUser` en lui donnant les paramètres qui arrivent dans le corps de la requête (`req.body`). Si tout se passe bien, on renvoie un message avec l'id retourné par `addUser`.

Essayons maintenant de tester la route... et on ne peut pas !


## B. La spécificité des requêtes POST

La route `/users/register`, contrairement à `/users`, est une route **POST**.

**GET** et **POST** sont très utilisés, et voici les différences concrètes entre les deux :
- **GET** passe ses paramètres par l'url : `http://.....?param1=valeur&param2=valeur`. Ces paramètres arrivent côté serveur dans `req.params`.
- **POST** ne passe pas ses paramètres par l'url. Ils arrivent côté serveur dans `req.body`. Cela est utile quand on ne veut pas exposer les données sensibles (mot de passe, etc...).

Du coup, puisque les requêtes POST ne passent pas leurs paramètres par l'url, le navigateur ne va pas nous être très utile ici...

Reste **Postman**. Postman permet d'envoyer toutes sortes de requêtes avec des paramètres.

Mais il faut changer un peu le projet pour pouvoir correctement recevoir le corps, ou **body** de la requête.


## C. Étape 2 - Retoucher le code pour gérer les requêtes avec body

En l'état, Express ne reconnaît pas `req.body`. Il faut ajouter un module qui va l'aider : **body-parser**.

**Body-parser** est souvent une prise de tête pour les développeurs NodeJS. En effet, très régulièrement, soit il est inclus avec Express, soit il dégage à la version suivante. Et rebelote...

À l'heure où cette leçon est rédigée, il n'est **plus inclus dans Express**. Nous allons donc devoir l'installer séparément.

```
npm i body-parser
```

Ensuite, ouvrez **index.js/server.js**, et ajoutez au début :

```js
import bodyParser from 'body-parser';
```

Plus bas, **AVANT** le routage :

```js
const server = http.createServer(withRoutes(app));
```

Ajoutez ces deux lignes :

```js
app.use(bodyParser.json()); // pour les corps de requête JSON
app.use(bodyParser.urlencoded({ extended: false })); // pour les corps de requête x-www-form-url
```

> Il est très important que ces lignes apparaissent avec la création de la constante `server` et de son routage (fonction `withRoutes`). Sans cela, `req.body` ne sera pas reconnu sur vos routes.


## D. Étape 3 - Tester la route avec Postman

Dans Postman, créez une autre route. Appelez-la `addUser`, et mettez comme url `http://localhost:3088/users/register`.

Changez **GET** pour **POST**.

Ensuite, sélectionnez **Body**, et **x-www-form-urlencoded** en dessous pour avoir un formulaire propre.

Dans le formulaire, entrez les 4 clés et valeurs qui vont être nécessaires à la création de notre utilisateur :
- `email` : mail@mail.com
- `password` : aaa
- `firstName` : Bob
- `lastName` : Ryan

Appuyez sur le bouton d'envoi, et vous devriez recevoir une réponse dans Postman :
```json
{
    "data": {
        "id": 54
    },
    "message": "Utilisateur créé"
}
```

Nous avons donc une route `/users/register` qui semble fonctionner.

Mais il reste encore des choses à faire. Rendez-vous à la prochaine leçon.