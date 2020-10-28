---
title: 'Gérer une base de données (MySQL)'
type: 0
date: '2020-10-28'
published: true
---

# Leçon 8 - Gérer une base de données (MySQL)

> **Attention** :  
La suite du projet nécessite une compréhension basique des **bases de données** et des **requêtes SQL**.  
**Wampserver** doit aussi être configuré.


## A. Étape 1 - Créer une base de données

Lancez **Wampserver**, cliquez sur son icône dans la barre de notification, et sélectionnez **phpMyAdmin**.

Un onglet va apparaître dans votre navigateur, demandant un nom d'utilisateur et un mot de passe. Mettez `root` pour le premier et laissez le second vide.

Une fois après avoir accédé à phpMyAdmin, vous verrez une liste de bases de données à gauche. Créez une nouvelle base qu'on appellera **cours_node**. Changez l'encodage pour `utf8_general_ci`.


## B. Étape 2 - Créer la table users

Sélectionnez votre base de données fraîchement créée. Un champ apparaît pour y ajouter une table. Entrez `users`, augmentez le nombre de colonnes et continuez.

Entrez les champs suivants :
- `id` :
    - type `INT`
    - `AUTO_INCREMENT` (`A_I`) coché
    - index `PRIMARY`
- `email`, `password`, `first_name` et `last_name` :
    - type `VARCHAR`
    - length 255
- `created_date` :
    - type `DATETIME`
    - default `CURRENT_TIMESTAMP`

Validez et votre table devrait être créée.


## C. Étape 3 - Ouvrir une connection MySQL

Installez le module `mysql` :
```
npm i mysql
```
Ce module va nous servir à gérer les interactions avec les bases de données MySQL. Chaque type de base de données a un module correspondant.

Dans la racine du projet, créez un dossier **database** et ajoutez-y un fichier **mysql.js**, avec ce code :

```js
import mysql from 'mysql';

const config = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'cours_node',
};

const connection = mysql.createConnection(config);
connection.connect((err) => {
    if (err) {
        console.error("Impossible de se connecter", err.message);
        return;
    }
    console.log("Connecté à la base de données");
});
```

Le code est assez simple :
- on importe le module `mysql`
- on définit la configuration de la base de données :
    - `host`: l'hôte (ip ou localhost)
    - `user`: le nom d'utilisateur pour se connecter à la base de données
    - `password`: le mod de passe pour se connecter à la base de données
    - `database`: le nom de la base de données ciblée
- on crée une connexion avec cette configuration

Lancez le serveur pour vérifier que vous obtenez bien le message _Connecté à la base de données_.  
Changez ensuite le nom de la base de données (**cours_node**) pour voir si une erreur sera affichée.

Une fois l'erreur vérifiée, rétablissez le nom de la base de données.


## D. Étape 4 - Gérer un pool de connexions

Il existe deux façons de gérer les connexions à la base de données :
- Ouvrir et fermer une connexion.
- Utiliser le _pooling_ pour limiter le nombre de connections et recycler celles ouvertes précédemment.

La dernière option (**pooling**) est préférée pour des sites présentant le risque d'avoir beaucoup de connexions entrantes à la base de données d'un coup.

On va donc changer le code pour gérer le pooling. Dans **mysql.js**, supprimez/désactivez les lignes suivantes :

```js
const connection = mysql.createConnection(config);
connection.connect((err) => {
    if (err) {
        console.error("Impossible de se connecter", err.message);
        return;
    }
    console.log("Connecté à la base de données");
});
```

Et ajoutez :

```js
const pool = mysql.createPool(config);
pool.getConnection((err, connection) => {
    if (err) {
        console.error("Impossible de se connecter", err.message);
        return;
    }
    console.log("Connecté à la base de données");
});
```

Une dernière modification consiste à mettre des options supplémentaires dans `config`, comme suit :

```js
const config = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'cours_node',
    connectionLimit: 20, // Limite de connections simultanées au pool (10 par défaut)
};
```

Lancez le serveur et vérifiez que le message de connexion apparaît.

Nous avons donc réussi à établir une connection de base.



## E. Fermer les connexions

Les deux codes que nous avons utilisé (**connection** et **pool**) ne sont pas vraiment pratiques car normalement, nous devrions fermer (connection normale) ou renvoyer (pooling) la connection comme suit :

```js
// Connection
const connection = mysql.createConnection(config);
connection.connect((err) => {
    if (err) {
        console.error("Impossible de se connecter", err.message);
        return;
    }
});
// Requêtes, etc...
connection.end() // Fermeture de la connection

// Pooling
const pool = mysql.createPool(config);
pool.getConnection((err, connection) => {
    if (err) {
        console.error("Impossible de se connecter", err.message);
        return;
    }
    // Requêtes, etc...
    connection.release(); // Retour de la connection au pool
});
```

Fort heureusement, les créateurs du module mysql donnent une alternative : les fonctions de requête (que nous allons utiliser à la leçon suivante) **gèrent l'ouverture et la fermeture de connection automatiquement**.

On peut donc nettoyer le code de **mysql.js** pour ne conserver que :

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