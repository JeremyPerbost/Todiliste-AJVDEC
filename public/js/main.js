function chargerListe() {
    fetch('/recuperer')//envoye d'une requete GET pour recuperer les taches
        .then(response => {
            //console.log(response);
            //console.log(response.json);
            return response.json();//Convertit la réponse en JSON
        })
        .then(data => {
            //console.log(data);
            const liste = document.getElementById('liste');
            liste.innerHTML = '';//supprimer le contenu existant de la liste
            data.forEach((item, index) => {
                creer_tache(item, index, liste);
            });
        })
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
    fetch('/ajouter',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'//corps de la requete en JSON
        },
        body: JSON.stringify({ texte_area: texte_area.value })//envoye les données au serveur
    })
    creer_tache(texte_area.value, 0 , document.getElementById('liste'));
}
function Modifier(index) {
    const texte_area = document.getElementById('text_area_tache');
    fetch('/modifier/' + index, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ texte_area: texte_area.value })
    })
    .then(() => chargerListe());
}
function creer_tache(item, index, liste) {
    const li = document.createElement('li');
    li.textContent = item;
    const boutton_croix = document.createElement('button');
    const boutton_modifier = document.createElement('button');
    boutton_modifier.textContent = '✏️​​';
    boutton_croix.textContent = '❌​​';
    boutton_modifier.onclick =()=>Modifier(index);
    boutton_croix.onclick = () => Supprimer(index);
    li.appendChild(boutton_croix);
    li.appendChild(boutton_modifier);
    liste.appendChild(li);
}

//document fait reference a l'objet DOM
document.addEventListener('DOMContentLoaded', chargerListe);