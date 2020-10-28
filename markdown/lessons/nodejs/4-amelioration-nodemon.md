---
title: 'Amélioration : Nodemon'
type: 0
date: '2020-10-18'
published: true
---

# Leçon 4 - Amélioration : Nodemon

Après les deux appartés sur les dépendances et les environnements, il est temps de passer à la suite du projet.

Dans son état actuel, le projet nécessite une relance manuelle à chaque modification du code et :
- c'est une horreur pour les doigts
- ça rend le travail très fastidieux.

Heureusement, il existe un outil que nous allons installer, **Nodemon**, dont la tâche sera de **redémarrer automatiquement le serveur à chaque changement du code**.


## A. Nodemon, le gourmand

Nodemon est très pratique, et on voit difficilement comment s'en passer. Mais en contrepartie de faciliter la vie du développeur, il consomme beaucoup puisqu'il **tourne en permanence**.  

On appelle ce genre d'outils des _watchers_, car ils agissent comme une sentinelle toujours en observation.

Lors de l'étude sur les environnements et les builds, on a vu que certains outils nécessaires au développement n'ont **aucune utilité en production**.  

Et Nodemon est l'un de ces outils.

L'auto-rafraîchissement du serveur est vital en développement, mais absolument inutile en production, puisqu'**on ne touche pas au code en production**.

Un autre problème est tout simplement qu'il rajoute une **couche supplémentaire** à l'application, ce qui peut potentiellement créer des bugs.  

Il faut donc s'en passer en production.


## B. Les dépendances de développement

Heureusement, Node gère la différence entre les **dépendances de production et celles de développement**.

On peut donc dire au projet de ne pas installer nodemon quand on exporte le projet pour la production.

Normalement, pour installer un module, on utilise le code suivant :

```-
npm install ...
```

qu'on peut aussi raccourcir en :

```-
npm i ...
```

Pour spécifier que le module ne sera là qu'au développement, on va utiliser le code suivant :

```-
npm i --save-dev ...
```

## C. Installation et activation de nodemon

Commençons par ajouter Nodemon au projet.

```-
npm i --save-dev nodemon
```

Une fois le message de fin d'installation reçu, vous pouvez ouvrir **package.json** et vérifier la présence d'un nouveau champ, `devDependencies` :

```js
    "devDependencies": {
        "nodemon": "^2.0.4"
    }
```

Mais il faut maintenant dire à l'application d'utiliser Nodemon.

Toujours dans **package.json**, nous allons ajouter un autre script, `dev` :

```js
    "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1",
        "start": "node index.js",
        "dev": "nodemon index.js"
    },
```
On peut voir que la seule différénce d'avec le script `start`, c'est qu'on utilise `nodemon` au lieu de `node`.

Désormais, votre projet peut se lancer de deux façons :
- `npm start` pour le lancement sans nodemon
- `npm run dev` pour le lancement avec nodemon.

Pourquoi ajouter `run` ? Parce que la commande `npm dev` existe déjà. Le terme `run` avant le nom du script précise juste qu'on veut bien lancer un script.

Lancez donc le projet avec les deux commandes (Ctrl+C pour le stopper), et vous verrez que dans un cas, on a quelques messages supplémentaires indiquant que Nodemon est actif :

```-
[nodemon] 2.0.4
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `node index.js`
Server started on port 3088
```

Essayez de changer du code dans votre projet et sauvegardez le fichier. Vous devriez voir un message dans la console :
```-
[nodemon] restarting due to changes...
[nodemon] starting `node index.js`
Server started on port 3088
```

Vous pouvez aussi redémarrer manuellement le projet en entrant `rs` dans la console.

Félicitations, vous venez d'intégrer un des meilleurs outils de développement pour Node.