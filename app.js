const express=require("express");//charge le module express
const path = require("path");//charge le module path pour gérer les chemins de fichiers
const app=express();//crée une instance de l'application express
const port=3000;//port d'écoute de l'application

//Création de la liste.
let liste = ["Vaissaille", "Faire a manger", "Dormir"];
//L'application va pouvoir traiter les requêtes HTTP qui contiennent des données JSON
app.use(express.json());
// Configuration des fichiers statiques
app.use(express.static(path.join(__dirname, "public")));
// Route pour la page d'accueil
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});
// Route pour recuperer les taches
app.get('/recuperer', (req, res) => {
    res.json(liste);  // Renvoie les tâches en JSON
});
// Route pour supprimer une tache
app.delete('/supprimer/:index', (req, res)=>{
    const index = parseInt(req.params.index, 10);//convertir le index (string) de l'url en entier (base 10)
    liste.splice(index, 1);//supprimer l'élément à l'index spécifié de la liste
    res.json(liste);//renvoie la liste mise à jour en JSON
})
// Route pour supprimer toutes les tâches
app.delete('/supprimer-tout', (req, res) => {
    liste = []; // Vide le tableau
    res.json(liste);
});
app.post('/ajouter', (req, res) => {
    const texte_area = req.body.texte_area; // Récupère le texte de la requête
    liste.push(texte_area); // Ajoute le texte à la liste
    res.json(liste); // Renvoie la liste mise à jour en JSON
});
//FONCTION DE CALLBACK POUR TRAITER LES REQUETES HTTP
//premier argument : port d'écoute
//deuxième argument : fonction de rappel (callback) qui sera exécutée lorsque le serveur sera prêt
app.listen(port, () => {
    console.log(`🆗 EN ECOUTE DU PORT ${port}`);
    console.log(`🆗 ADRESSE CREER : http://localhost:${port}`);
});
// Middleware
app.use((req, res)=>{
    res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});