---
title: 'Apparté : les réponses au client'
type: 1
date: '2020-10-28'
published: true
---

# Leçon 11 - Apparté : les réponses au client

Dans la leçon précédente, nous avons créé une route qui retourne la liste complète d'utilisateurs de la table `users` de notre base de données.

Mais il y a certaines choses que nous n'avons pas expliquées.


## A. Le renvoi d'une requête avec succès

Ouvrons **routes/usersRouter.js** et examinons le code. Intéressons-nous à la ligne suivante :

```js
        res.status(200).json({ data: rows });
```

En fait, cette ligne est un enchaînement de deux commandes :

```js
        res.status(200);
        res.json({ data: rows });
```

- La commande `res.status` définit le code de statut html. **200** est la valeur qui dit que tout s'est bien passé. **404** par exemple serait le code pour un chemin non existant.

- `res.json` renvoie un objet JSON (`{ data: rows }`). Jusqu'ici, on utilisait un `res.send` qui gère parfaitement les objets JSON, mais `res.json` a quelques options supplémentaires.  
Pourquoi renvoyer un objet JSON ? Tout simplement parce que de plus en plus, nos serveurs sont utilisés pour communiquer avec du frontend comme **ReactJS**, ou tout simplement du **mobile**, et le format JSON est approprié pour la transmission de données pures qui seront utilisées, interprétées et mises en forme par le client.

Donc, cette ligne permet d'envoyer les données au client si tout a correctement fonctionné.

Mais que se passe-t-il en cas d'**échec** ?


## B. Gérer l'échec

Si `getAllUsers` a renvoyé une erreur, on arrive alors dans cette partie du code :

```js
    } catch (err) {
        console.error(err); // On affiche l'erreur côté serveur
        res.status(500).json({ data: null, message: "Erreur interne du serveur" }); // L'erreur renvoyée est générique
    }
```

Ici aussi, on envoie un objet (`{ data: null, message: "Erreur interne du serveur" }`).
- Les données sont non existantes
- et on a un message en plus.

Vous remarquerez qu'on n'envoie pas l'erreur exacte. On l'affiche côté serveur avec :

```js
console.error(err);
```

Mais le frontend ne reçoit jamais l'erreur exacte. On lui envoie juste un code d'erreur 500, indiquant qu'il y a un souci côté serveur.


## C. Être clair, mais pas trop

Pourquoi ne pas envoyer un message d'erreur plus précis ?
- L'erreur est strictement du côté serveur. Le client n'a aucun paramètre à envoyer et **ne peut rien faire pour résoudre le problème** côté serveur.
- On ne veut surtout pas communiquer ce qui se passe côté client. Ce serait une atteinte à la **sécurité** de l'appli.

On garde donc l'erreur exacte pour nous, et on indique juste au client qu'il y a un problème de notre côté. Il se chargera d'interpréter ce résultat.

Mais **il ne faut pas non plus ignorer le frontend**. Si l'erreur exacte ne le regarde pas, on peut quand même lui indiquer le type d'erreur. Ici, le frontend doit comprendre :
- qu'il n'y a pas de mauvaise requête de sa part (**400**)
- qu'il n'y a pas de problème d'authentification (**401**)
- qu'il n'y a pas de problème d'accès (**403**)
- qu'il n'a pas ciblé une route inexistante (**404**)

Le développeur backend doit communiquer le code d'erreur approprié au problème rencontré.

Il ne faut pas oublier que souvent, une appli backend va communiquer avec **plus d'une appli frontend**. La communication est essentielle.