/**
 * Code de base, ne pas modifier
 */

// Définition
const boutonVoyageHTML = document.querySelector(".btn-voyage");
const localisationEpoqueHTML = document.querySelector(".localisation_epoque");
const listeArtefactHTML = document.querySelector(".liste_artefacts");
const formChoixEpoqueHtml = document.querySelector(".form__choix_epoque");
const formRechercheArtefact = document.querySelector(
  ".form__recherche_artefact"
);

const epoques = {
  romaine: "Romaine",
  medievale: "Médievale",
  jurassique: "Jurassique",
};

const creerLesChoixEpoque = (epoques) => {
  const selectHtml = formChoixEpoqueHtml.querySelector("select");
  Object.entries(epoques).forEach(([id_epoque, nom_epoque]) => {
    const option = document.createElement("option");
    option.value = id_epoque;
    option.text = nom_epoque;
    selectHtml.appendChild(option);
  });
};

function generationNombreAleatoireEntre(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const afficherDestination = (nomEpoque) =>
  (localisationEpoqueHTML.textContent = nomEpoque);

// Execution
formChoixEpoqueHtml.addEventListener("submit", (event) => {
  event.preventDefault();
  const epoque = new FormData(formChoixEpoqueHtml).get("epoque");

  if (!epoque) {
    alert("Choisie une époque de voyage temporel Chronos !");
    return;
  }

  quandEpoqueChoisie(epoque);
});

formRechercheArtefact.addEventListener("submit", (event) => {
  event.preventDefault();
  const artefact = new FormData(formRechercheArtefact).get("artefact");
  quandRechercheArtefact(artefact);
});

const afficherRechercheArtefact = ({ artefact, epoque, success = true }) => {
  const li = document.createElement("li");
  li.textContent = `${success ? "✅" : "❌"} ${artefact} (Epoque ${epoque})`;
  listeArtefactHTML.appendChild(li);
};

/**
 * Votre partie commence ici, la partie modifiable par vos soins
 */
let nomEpoqueActuelle;



creerLesChoixEpoque(epoques);

// Fonction appelée plus haut quand le formulaire de voyage temporel est soumis
// et qu'une époque de destination du voyage temporel a été choisi
function quandEpoqueChoisie(nomEpoque) {
  nomEpoqueActuelle = nomEpoque;
  // Utilisation de votre fonction voyagerTemps
}

// Fonction appelée plus haut quand le formulaire de recherche d'artefact est soumis
function quandRechercheArtefact(artefact) {
  // Utilisation de votre fonction collecterArtefact
}

// exercice 1
const chargement = document.querySelector(".voyage_en_cours");
const localisation = document.querySelector(".localisation_epoque");

function voyagerTemps(destination, callback) {chargement.style.display = "block"; localisation.style.display = "none";
  setTimeout (() => {
    chargement.style.display = "none";
    localisation.style.display = "block";
    callback(destination)},generationNombreAleatoireEntre(1000, 3000));
}
voyagerTemps(epoques["romaine"], afficherDestination);
