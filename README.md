# Todiliste-AJVDEC
## 📋 SOMMAIRE

- [👨‍🔬 PRÉSENTATION](#-presentation-)
- [🔑 INSTALLATION ET PRÉREQUIS](#-installation-et-prerequis-)
  - [Système d'exploitation](#systeme-dexploitation)
  - [Installation](#installation)
- [📖 WIKI](#-wiki-)
  - [FROM SCRATCH](#from-scratch-)
  - [JAVASCRIPT](#javascript-)
  - [NODE JS](#node-js-)
  - [DOM](#dom-)
  - [MIDDLEWARE](#middleware-)
  - [CALLBACK](#callback-)
  - [FONCTION FLECHEE](#fonction-flechee-)
  - [EXPRESS](#express)
- [🔴 TECHNOLOGIES UTILISEES](#-technologies-utilisees)

TO-do liste : 
Openclasseroom : javscript : www3school, apprendre javascript, 

Todoliste : ajouter une tache, supprimer une tache, modifier une tache, afficher la liste des taches par jour. Node.js avec express. API,
From scrach, sans ia
# 👨‍🔬 PRESENTATION 🧑‍🔬
![image](https://github.com/user-attachments/assets/2e5a25de-b1e7-4d0d-8abd-730299f17fb0)

La todoliste AJVDEC vous permet d'ajouter des taches que vous pouvez faire dans la journée.

🗑️​ : permet de supprimer toutes les taches

✏️​​ : modifie la tache en la renplacant par le texte dans la zone de texte tout en bas

❌​​ : supprime la tache selectionnée

Le bouton "Charger la liste" permet d'afficher toute la liste

Le bouton "Ajouter Tache" permet d'ajouter une tache en prenant le texte dans la zone de texte en bas

# 🔑 INSTALLATION ET PREREQUIS🔑

## SYSTEME D'EXPLOITATION
Windows
## INSTALLATION
1- Installer Node.js depuis le site officiel : https://nodejs.org/
2- Cloner ou télécharger le projet
3- Ouvrir un terminal dans le dossier du projet
4- Installer les dépendances : ``npm install``
5- Lancer le serveur : ``node app.js``
6- Ouvrir votre navigateur et aller sur : http://localhost:3000

# 📖 WIKI 📖

## FROM SCRATCH : 
"From scratch" signifie **coder à partir de zéro**, c'est-à-dire sans utiliser de solutions préexistantes comme des bibliothèques externes ou des frameworks.

## JAVASCRIPT :

**JavaScript** est un langage de programmation qui permet de rendre un site web **dynamique**. Il permet de manipuler le [DOM](#dom-):

- **Modifier le HTML et le CSS** : Manipuler la structure de la page web et son style.
- **Insérer/Supprimer des éléments du site** : Ajouter ou retirer des éléments à la volée sans recharger la page.
- **Afficher des boîtes de dialogue** : Utiliser des fonctions comme `alert()`, `prompt()`, `confirm()` pour interagir avec l'utilisateur.
- **Modifier/Vérifier les éléments d'un formulaire** : Valider ou modifier les données d'un formulaire avant qu'il ne soit envoyé.
- **Récupérer des données JSON** : Obtenir des données sous format JSON (souvent via des appels API).
- **Utiliser des API externes** : Intégrer des services tiers pour récupérer ou envoyer des données, comme des informations météorologiques ou des bases de données externes.
- **Envoyer des requêtes asynchrones au serveur** : Utiliser AJAX pour charger des données sans recharger la page.
- **Authentifier les utilisateurs avec des JSON Web Tokens (JWT)** : Gérer l'authentification et la sécurité dans les applications web.

## NODE JS : 
Node Js est un environnement d'execution [javascript](#javascript-) qui permet d'écrire et manipuler des programmes du coté serveur avec du [javascript](#javascript-).
Node Js utilise le moteur V8 qui est utilisé par chrome.
Node Js n'utilise qu'un seul thread pour l'execution mais opere de facon asynchrone nottament grace à la librairie libuv écris en C (Entrée sortie non bloquant).

## DOM : 
Le DOM est un modèle pour représenter l'HTML d'un site. Le DOM transforme une page statique en espace dynamique ce qui permet de modifier une page sans la recharger.

## MIDDLEWARE : 
Un middleware est une fonction qui s'exécute pendant le traitement des requêtes HTTP.
Elles peuvent accéder à l'objet request (req) et a l'objet response (res)
Objet request : toutes les infos de l'utilisateur ==> données formulaire, url ...
Objet response : reponse http que l'application express enverra en retour a la partie cliente après une requete.

## CALLBACK : 
Permet ddes savoir quand une opération asynchrone est terminée.
## FONCTION FLECHEE : 
La fonction flechée permet d'écrire de manière plus courte les fonctions exemple :
``function ajouter(a, b) {return a + b;}``
avec la fonction flechée : 
``const ajouter = (a, b) => a + b;``
## EXPRESS 
Express est un framework pour [NodeJS](#node-js-)
Il simplifie énormément le processus de gestion des requêtes HTTP, des réponses, du routage, de la gestion des middleware 
# TECHNOLOGIES UTILISEES 
🔴
Node Js : version 22.14.0
NPM : version 10.9.2 
