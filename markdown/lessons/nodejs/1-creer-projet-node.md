---
title: 'Créer un projet NodeJS'
type: 0
date: '2020-10-13'
published: true
---

# Leçon 1 - Créer un projet NodeJS

## Étape 1 - Initialisation

Créez un **nouveau dossier**. Ensuite, ouvrez la console dans ce dossier (Shift + Clic droit, _Ouvrir la fenêtre Powershell_).

Entrez au choix :
- `npm init` pour procéder à la création du projet pas à pas
- `npm init --yes` pour sauter les étapes

Une fois la commande entrée, Node va initialiser le projet en créant des fichiers. Après cette initialisation, vous aurez un fichier **package.json**. Ouvrez-le pour vérifier les données.

Le fichier package.json va contenir les informations du projet. Des champs comme `name` ou `version` sont assez simples à comprendre.

Le champ qui va nous intéresser pour le moment est `scripts`. Par défaut, il devrait ressembler à ceci :

```-
    "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1"
    },
```

Nous allons maintenant configurer le lancement du projet.


## Étape 2 - Configurer le projet (démarrage)

Avant de continuer, il faut créer le fichier qui va lancer notre serveur, là où tout commence. Par convention, on préférera **index.js** ou **server.js**, un peu plus explicite.  

Ce fichier doit être créé à la **racine** du projet, au même niveau que **package.json**.

Une fois le nom choisi, ouvrons de nouveau **package.json** et ajoutons un script `start` comme suit :

```-
    "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1",
        "start": "node index.js"
    },
```

> Si vous avez choisi un autre nom, mettez ce nom.

Une fois que c'est fait, ouvrez le fichier de lancement (index.js/server.js) et mettez-y un simple code :

```js
console.log("Hey !")
```

Allez dans la **console** et tapez `npm start` pour lancer votre projet. Vous devriez voir le message s'afficher.


## Étape 3 - Créer le serveur

Dans **index.js/server.js**, effacez le log et copiez ce code :

```js
// Modules
const http = require('http');

// Mise en place du serveur
const server = http.createServer();

// Écoute du port
const PORT = 3000;
server.listen(PORT);
server.on('listening', () => console.log(`Serveur actif sur le port ${PORT}`));
```

Lancez votre serveur avec `npm start` et vous devriez voir s'afficher le message de la dernière ligne. La différence cette fois, c'est que **le script reste actif**. Votre serveur tourne tant que vous ne l'arrêtez pas (Ctrl+C dans la console de commande).

Un conseil : il vaut mieux **changer le port du serveur**. 3000 est trop fréquemment utilisé et pour éviter de perdre du temps, on va préférer utiliser un port différent.

```js
const PORT = 3088;
```

Ce sera tout pour le moment. Avant de continuer plus loin, on va passer par des petits détours, puis améliorer le projet.
