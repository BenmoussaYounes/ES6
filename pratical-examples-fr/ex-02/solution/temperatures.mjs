import { Temperature } from "./exampletemperatures.mjs";

function ligneMoisHTML(Temperature) {
  return Array.from(Temperature.mois, (moi) => `<th>${moi}</th>`).join("");
};

function ligneVilleHTML (tville) {
  return `<tr><th>${tville.ville}</th>${Array.from(
    tville.temperatures,
    (t) => `<td>${t}</td>`
  ).join("")}</tr>`;
};

function temperaturesFromTable(t) {
  return `<table>
  <caption>${t.descriptions}</caption>
  <thead>
    <tr><td></td>${ligneMoisHTML(t)}</tr>
  </thead>
  <tbody>
    ${t.villes.map((v) => ligneVilleHTML(v)).join("")}
  </tbody>
</table>`;
};

function afficherTemperatures(t, id) {
  const element = document.getElementById(id);
  element.innerHTML = temperaturesFromTable(t);
}





function init() {
  const boutonCharger = document.getElementById("charger");
  const boutonDiagramme = document.getElementById("diagramme");

  boutonCharger.disabled = true;
  boutonDiagramme.disabled = true;
  
  const inputFichier = document.getElementById("fichier-temperatures");
  inputFichier.addEventListener("change", onFichierChange);
  boutonCharger.addEventListener("click", onCharger);
}

function onFichierChange(event) {
  const boutonCharger = document.getElementById("charger");
  const fichier = event.target.files[0];
  
  if (fichier) {
    boutonCharger.disabled = false;
  } else {
    boutonCharger.disabled = true;
  }
}

function onCharger() {
  const inputFichier = document.getElementById("fichier-temperatures");
  const fichier = inputFichier.files[0];
  
let temperatures = {
  descriptions: "",
  mois: [],
  villes: []
};

  const reader = new FileReader();  
  reader.onload = function(e) {
    try {
      temperatures = JSON.parse(e.target.result);
      
  
      afficherTemperatures(temperatures, "tableau-temperatures");
      
      const boutonDiagramme = document.getElementById("diagramme");
      boutonDiagramme.disabled = false;
      
    } catch (error) {
      alert("Erreur lors de la lecture du fichier JSON : " + error.message);
      console.error(error);
    }
  };
  
  reader.onerror = function() {
    alert("Erreur lors de la lecture du fichier");
  };
  
  reader.readAsText(fichier);
}


init();


export { afficherTemperatures };
