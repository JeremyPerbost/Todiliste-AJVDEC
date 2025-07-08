# Todiliste-AJVDEC

TO-do liste : 
Openclasseroom : javscript : www3school, apprendre javascript, 

Todoliste : ajouter une tache, supprimer une tache, modifier une tache, afficher la liste des taches par jour. Node.js avec express. API,
From scrach, sans ia

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
