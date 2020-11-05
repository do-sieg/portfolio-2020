---
title: "Créer une requête d'insertion"
type: 0
date: '2020-11-05'
published: true
---

# Leçon 13 - Créer une requête d'insertion

Nous avons une route et une fonction de contrôle dont la tâche est de récupérer tous les utilisateurs.

Mais nous n'avons **aucun utilisateur**...


## A. Étape 1 - Créer la fonction de contrôle

Commençons par créer la fonction qui va se charger d'ajouter un utilisateur dans notre table `users`.

Dans **control/users.js**, ajoutez la fonction suivante :

```js
export async function addUser(email, password, firstName, lastName) {
    try {
        const result = await sqlQuery(`INSERT INTO users (
            email, password, first_name, last_name
        )
        VALUES (
            '${email}',
            '${password}',
            '${firstName}',
            '${lastName}'
        )`);
        return result.insertId;
    } catch (err) {
        throw err;
    }
}
```

N'ayez pas peur de l'apparence de la requête SQL. Elle est organisée ainsi pour faciliter les modifications.  
Son comportement est similaire à `getAllRows` de **database/mysql.js** :
- lancement d'une requête SQL avec la fonction `sqlQuery`
- récupération et renvoi d'une donnée
- gestion de l'erreur en cas de problème

Cette ligne est intéressante :

```js
return result.insertId;
```

Une requête SQL comme `INSERT`, qui ne récupère pas des données de la table, va renvoyer un objet contenant des informations :

```js
OkPacket {
    fieldCount: 0,
    affectedRows: 1,
    insertId: 1,
    serverStatus: 2,
    warningCount: 0,
    message: '',
    protocol41: true,
    changedRows: 0
}
```

Toutes ces données ne nous sont pas nécessaires, mais `insertId`, l'id de l'utilisateur une fois créé, pourrait servir. Nous renvoyons donc cette donnée.


## B. Étape 2 - Tester la fonction de contrôle

Avant de créer une route, testons notre fonction pour être sûr que tout va bien.

Dans **control/users.js**, ajoutez ces lignes :
```js
// Test (à supprimer)
addUser('aaa@email.com', 'aaa', 'Alphonse', 'Robert')
.then(id => console.log('Utilisateur créé : ' + id));
```

Lancez le serveur et vérifiez que le message apparaît. Vérifiez la table `users` et votre utilisateur devrait y être apparu.

Supprimez le dernier code et passons à l'étape suivante.
