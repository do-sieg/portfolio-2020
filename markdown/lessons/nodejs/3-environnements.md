---
title: 'Apparté : les environnements'
type: 1
date: '2020-10-13'
published: true
---

# Leçon 3 - Apparté : les environnements

L'environnement est une notion essentielle en programmation.


## A. Développement et production

Il existe plusieurs étapes dans la conception d'un projet. On ne met pas entre les mains des utilisateurs un site ou une application qui n'est pas encore viable.  

Les deux étapes principales sont le **développement** (quand vous travaillez sur l'appli) et la **production** (quand le projet est mis à disposition du public).

Si au début, on peut considérer les deux environnement comme des étapes successives, en réalité, il va arriver un moment où deux versions du projet vont **coexister en parallèle**.

Typiquement, le public aura accès à la version 1.0 (ou une béta), alors que le développeur continuera de son côté sur une version 1.1 par exemple.  
Les mises à jour remettront à niveau le projet en production.

On ne parle d'étapes, mais de **builds**.


## B. Les spécificités concrètes des environnements

Les projets en développement, avec les technologies modernes, sont presque toujours **plus lourds** que la version en production.

Ils sont surtout **moins bien optimisés** (voire pas du tout). Certaines portions de code sont juste là pour les tests, ou pour accélérer le développement. Elles deviennent inutiles en production.

Les machines utilisées en développement sont puissantes, alors que celles des utilisateurs, en production, peuvent varier en puissance.

Mais ce qui va nous intéresser pour la suite, c'est que certaines **dépendances** sont là uniquement pour le développement, et n'ont rien à faire dans le projet en production.
