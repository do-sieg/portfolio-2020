---
title: 'Apparté : modules, installation et migration'
type: 1
date: '2020-10-18'
published: true
---

# Leçon 7 - Apparté : modules, installation et migration

Faisons une autre pause théorique pour parler des dépendances, mais d'un point de vue plus technique cette fois.


## A. Le dossier node_modules

Une fois que vous installez des dépendances, un dossier **node_modules** est créé dans votre projet.

Ce dossier est assez embêtant puisqu'il peut rapidement atteindre des **centaines** de dosiers et des **milliers** de fichiers.

Il va donc poser un sacré handicap si on veut **copier le projet**, que ce soit manuellement dans l'explorateur ou avec git pour une sauvegarde en ligne.

C'est là qu'intervient la commande `npm install`.


## B. L'installation des modules

La commande `npm install` est celle qu'on utilise pour intégrer des modules, des dépendances, dans le projet.

On l'utilise comme suit :

```-
npm install nom_du_module
```

On peut utiliser `npm i` pour aller plus vite :

```-
npm i nom_du_module
```

On peut installer **plusieurs modules** à la fois en les séparant avec des espaces :

```-
npm install module_1 module_2 ...
```

Chaque module installé est enregistré dans l'objet `dependencies` de **package.json**.

Jusqu'à la version 5 de Node, il fallait ajouter `--save` pour obtenir ce résultat. Depuis, cela se fait automatiquement.  
Désormais, il faut ajouter `--no-save` pour ne pas enregistrer le module comme une dépendance.

Pour installer des **dépendances de développement**, il faut ajouter `--sav-dev` pour enregistrer le module dans l'objet `devDependencies` de **package.json**.

La désinstallation se fait au moyen de la commande `npm uninistall` ou `npm u`. Elle fonctionne de la même manière que `npm install`.

```-
npm uninstall nom_du_module
```


## C. Migration du projet

Revenons au dossier **node_modules**. Chaque module installé dans le projet va peupler ce dossier. Or, pour ne pas perdre de temps, on ne sauvegardera pas ce dossier avec le reste.

Cela signifie que si on transfère le projet ailleurs, le dossier **node_modules** ne sera plus là. Et on aura une erreur parce qu'on appelle ces modules dans le code du projet...

Il faut donc **installer les modules de nouveau**. Heureusement, on n'aura pas à le faire manuellement pour chaque module.

Une fois le projet dénué de **node_modules**, on va juste lancer la commande `npm install` (ou `npm i`) **sans préciser de nom de module**.

```-
npm install
```

Utilisée ainsi, la commande va installer les modules manquants, **en se référant tout simplement à package.json**. C'est pour cela qu'il est primordial :
- D'**enregistrer les modules nécessaires** au projet dans **package.json** (la tâche est devenue plus facile depuis la version 5.0.0).
- De veiller à **ne pas garder les modules inutiles** dans ce même fichier. Utilisez la commande `npm uninstall` si vous n'allez plus vous servir de certains modules.

