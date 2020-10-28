---
title: 'Apparté : les endpoints et Postman'
type: 1
date: '2020-10-28'
published: true
---

# Leçon 12 - Apparté : les endpoints et Postman

Parlons un peu de nos routes. Jusqu'ici, nous en avons deux :
- `/test`
- `/users`

On les appelle aussi **endpoints**. Ce terme est plus indicatif de leur rôle.  

En effet, quand on débute, on pense que ces routes sont comme des url, ou des "pages" de notre site.

Mais la vérité est tout autre...


## A. Pas vraiment des pages...

Imaginons que vous décidiez de créer un jeu vidéo sur navigateur et que vous utilisiez Node comme serveur.

Dans ce jeu, le navigateur affiche des ennemis. En cliquant sur un ennemi, on active un bouton qui enregistre l'attaque.  
En réalité, l'attaque va envoyer une requête à l'endpoint `/attack` du serveur avec des paramètres tels que la cible, l'attaquant, etc...

Allons-nous charger une nouvelle page ? Non. Ce qui va se passer, c'est que le serveur va juste effectuer des calculs et envoyer un résultat au client qui va mettre à jour ce qui est affiché à l'écran (baisse de points de vie, mort de l'ennemi...).

L'endpoint n'est donc pas une page mais un **point d'accès** servant à un objectif précis.


## B. Postman, l'utilitaire pour tester les endpoints

Jusqu'ici, nous avons testé nos routes avec le navigateur. Si cela est possible pour des routes de type **GET**, il va en être tout autrement par la suite quand on attaquera des routes **POST**, par exemple.

Pour cela, on aura besoin d'un outil de test plus sophistiqué : **Postman**.

Pour commencez, télécharger l'application Postman à l'adresse suivante : https://www.postman.com/downloads/

Installez le programme, créez un compte, et une fois cela fait, vous aurez accès à toutes les fonctionnalités.

Commençons par créer une requête en cliquant le bouton coloré en haut à gauche.

> Il vous sera peut-être demande de créer une collection pour y sauvegarder la requête. Faites cela, et appelez-la **cours-node**. Sélectionnez-la pour continuer.

Appelez votre requête **getAllUsers**. Pour l'url, mettez `http://localhost:3088/users/`.

Appuyez sur le bouton d'envoi, et vous devriez recevoir la même réponse qu'avec le navigateur.

L'avantage de Postman est qu'on peut enregistrer et organiser les requêtes. Cet outil va être indispensable pour la suite.