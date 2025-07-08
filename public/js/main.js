function chargerListe() {
    fetch('/recuperer')//envoye d'une requete GET pour recuperer les taches
        .then(response => {
            console.log(response); // Log the response object to the console
            console.log(response.json);
            return response.json();//Convertit la réponse en JSON
        })
        .then(data => {
            console.log(data);
            const liste = document.getElementById('liste');
            liste.innerHTML = '';//supprimer le contenu existant de la liste
            data.forEach((item, index) => {
                creer_tache(item, index, liste);
            });
        })
    .catch(error => console.error('Error fetching tasks:', error));
}
function Supprimer(index) {
    fetch('/supprimer/' + index, {
        method: 'DELETE'
    })
    .then(() => {
        chargerListe(); // Recharger la liste après suppression
    });
}
function Supprimer_tout() {
    fetch('/supprimer-tout', {
        method: 'DELETE'
    })
    .then(() => chargerListe());
}
function Ajouter(){
    const texte_area = document.getElementById('text_area_tache');
    fetch('/ajouter', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'//corps de la requete en JSON
        },
        body: JSON.stringify({ texte_area: texte_area.value })//envoye les données au serveur
    })
    creer_tache(texte_area.value, liste.children.length, document.getElementById('liste'));

}
function creer_tache(item, index, liste) {
    const li = document.createElement('li');
    li.textContent = item;
    const button = document.createElement('button');
    button.textContent = '❌​​';
    button.id = `T${index + 1}`;
    button.onclick = () => Supprimer(index);
    li.appendChild(button);
    liste.appendChild(li);
}