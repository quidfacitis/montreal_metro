//STATION ARRAYS BY "LIGNE"

const ligneOrange = ["Montmorency", "De-La-Concorde", "Cartier", "Henri-Bourassa", "Sauvé", "Crémazie",
  "Jarry", "Jean-Talon", "Beaubien", "Rosemont", "Laurier", "Mont-Royal", "Sherbrooke", "Berri-UQAM",
  "Champ-De-Mars", "Place-d'Armes", "Square-Victoria-OACI", "Bonaventure", "Lucien-L'Allier", "Georges-Vanier",
  "Lionel-Groulx", "Place-Saint-Henri", "Vendôme", "Villa-Maria", "Snowdon", "Côte-Sainte-Catherine", "Plamondon",
  "Namur", "De-La-Savane", "Du-Collège", "Côte-Vertu"];

const ligneBleue = ["Saint-Michel", "D'Iberville", "Fabre", "Jean-Talon", "De-Castelnau", "Parc", "Acadie", "Outremont",
  "Édouard-Montpetit", "Université-De-Montréal", "Côte-Des-Neiges", "Snowdon"];

const ligneVerte = ["Honoré-Beaugrand", "Radisson", "Langelier", "Cadillac", "Assomption", "Viau", "Pie-Ix",
  "Joliette", "Préfontaine", "Frontenac", "Papineau", "Beaudry", "Berri-UQAM", "Saint-Laurent", "Place-Des-Arts",
  "McGill", "Peel", "Guy-Concordia", "Atwater", "Lionel-Groulx", "Charlevoix", "Lasalle", "De-l'Église", "Verdun",
  "Jolicoeur", "Monk", "Angrignon"];

const ligneJaune = ["Berri-UQAM", "Jean-Drapeau", "Longueuil-Université-De-Sherbrooke"];

//STATION SELECTORS

const premiereStation = document.getElementById("premiere-station");
const derniereStation = document.getElementById("derniere-station");

//DOTS BELOW STATION SELECTORS

const orange1 = document.getElementById("orange-1");
const bleue1 = document.getElementById("bleue-1");
const verte1 = document.getElementById("verte-1");
const jaune1 = document.getElementById("jaune-1");

const orange2 = document.getElementById("orange-2");
const bleue2 = document.getElementById("bleue-2");
const verte2 = document.getElementById("verte-2");
const jaune2 = document.getElementById("jaune-2");


//"SPAN" WHERE ESTIMATED ARRIVAL TIME IS SHOWN

const travelTime = document.getElementById('result');

//SET DEFAULT STATION OPTIONS TO LIGNEORANGE

if (!premiereStation.selectedOptions[0]) {
  orange1.classList.add('selected');
  premiereStation.classList.add('orange-background');
  for (let i=0; i < ligneOrange.length; i++) {
    premiereStation.options[i] = new Option(ligneOrange[i], ligneOrange[i]);
  }
}

if (!derniereStation.selectedOptions[0]) {
  orange2.classList.add('selected');
  derniereStation.classList.add('orange-background');
  for (let i=0; i < ligneOrange.length; i++) {
    derniereStation.options[i] = new Option(ligneOrange[i], ligneOrange[i]);
  }
}
