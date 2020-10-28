---
title: 'Première requête MySQL'
type: 0
date: '2020-10-28'
published: true
---

# Leçon 9 - Première requête MySQL

Si tout va bien, le code du fichier **mysql.js** que vous devriez avoir en fin de leçon précédente est :

```js
import mysql from 'mysql';

const config = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'cours_node',
    connectionLimit: 20,
};

const pool = mysql.createPool(config);
```


## A. Étape 1 - Créer la fonction de requête

Dans **mysql.js**, ajoutez cette fonction :

```js
export function sqlQuery(queryString) {
    return new Promise(async (resolve, reject) => {
        pool.query(queryString, (err, result) => {
            if (err) reject(err);
            resolve(result);
        });
    });
}
```

Nous allons utiliser cette fonction pour tout ce qui concerne la récupération de données de nos tables.  
Elle fonctionne sur la base d'une promesse résolue (ou rejetée) qui englobe la fonction `pool.query` et son callback.

La fonction `pool.query` est pratique car elle nous évite de devoir gérer l'ouverture et la fermeture des connections : **tout est géré automatiquement**.

Nous exportons la fonction sqlQuery car elle servira ailleurs dans le futur.


## B. Étape 2 - Créer la fonction de récupération des lignes

Créons, toujours dans **mysql.js**, la fonction suivante :

```js
export async function getAllRows(tableName) {
    try {
        const rows = await sqlQuery(`SELECT * FROM ${tableName}`);
        return rows;
    } catch (err) {
        throw err;
    }
}
```

C'est une fonction qui va récupérer les lignes d'une table, ou concrètement, si on a une table d'utilisateurs, elle va récupérer tous les utilisateurs.

Puisque c'est une fonction qui peut servir dans n'importe quelle table, nous la plaçons ici pour l'appeler au besoin.

Les termes `try` et `catch` sont ce qu'on appelle du "sucre syntaxique". Ils facilitent la lecture (et l'écriture) de promesses.

Le même code sans try/catch donnerait :

```js
export function getAllRows(tableName) {
    return new Promise(async (resolve, reject) => {
        sqlQuery(`SELECT * FROM ${tableName}`)
            .then((rows) => {
                resolve(rows);
            })
            .catch((err) => {
                reject(err);
            });
    });
}
```


## C. Explications
Prenons nos deux fonctions :

```js
export function sqlQuery(queryString) {
    return new Promise(async (resolve, reject) => {
        pool.query(queryString, (err, result) => {
            if (err) reject(err);
            resolve(result);
        });
    });
}

export async function getAllRows(tableName) {
    try {
        const rows = await sqlQuery(`SELECT * FROM ${tableName}`);
        return rows;
    } catch (err) {
        throw err;
    }
}
```

- `getAllRows` tente (`try`) d'appeler `sqlQuery` avec une requête SQL sous forme de chaîne de caractères.
- `sqlQuery` prend cette chaîne et envoie une requête à la base de données.
- Si la requête échoue, la promesse est rejetée (`reject`) et on revient alors dans le `catch` de `getAllRows`.
- Si la requête réussit, la promesse est résolue (`resolve`) et on retourne les lignes (`result`) à `getAllRows` qui va retourner ces mêmes lignes à son tour sous la forme de `rows`.


## D. Étape 3 - Tester les fonctions

Pour tester nos fonctions, utilisons la ligne qui suit quelque part dans **mysql.js** :

```js
// Test (à supprimer ensuite)
getAllRows('users')
.then(rows => console.log(rows))
.catch(err => console.error(err.message));
```

La console devrait afficher `[]` (la table `users` est vide).

Changeons le paramètre pour un nom de table qui n'existe pas :

```js
// Test (à supprimer ensuite)
getAllRows('userz')
.then(rows => console.log(rows))
.catch(err => console.error(err.message));
```
La console va renvoyer une erreur au lieu des données.

Une fois les tests terminés, supprimez ces lignes de code.



