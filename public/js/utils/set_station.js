
const ligneOrangeClicked = ["Montmorency", "De-La-Concorde", "Cartier", "Henri-Bourassa", "Sauvé", "Crémazie",
  "Jarry", "Jean-Talon", "Beaubien", "Rosemont", "Laurier", "Mont-Royal", "Sherbrooke", "Berri-UQAM",
  "Champ-De-Mars", "Place-dArmes", "Square-Victoria-OACI", "Bonaventure", "Lucien-LAllier", "Georges-Vanier",
  "Lionel-Groulx", "Place-Saint-Henri", "Vendôme", "Villa-Maria", "Snowdon", "Côte-Sainte-Catherine", "Plamondon",
  "Namur", "De-La-Savane", "Du-Collège", "Côte-Vertu"];

const ligneBleueClicked = ["Saint-Michel", "DIberville", "Fabre", "De-Castelnau", "Parc", "Acadie", "Outremont",
  "Édouard-Montpetit", "Université-De-Montréal", "Côte-Des-Neiges"];

const ligneVerteClicked = ["Honoré-Beaugrand", "Radisson", "Langelier", "Cadillac", "Assomption", "Viau", "Pie-Ix",
  "Joliette", "Préfontaine", "Frontenac", "Papineau", "Beaudry", "Saint-Laurent", "Place-Des-Arts",
  "McGill", "Peel", "Guy-Concordia", "Atwater", "Charlevoix", "Lasalle", "De-lÉglise", "Verdun",
  "Jolicoeur", "Monk", "Angrignon"];

const ligneJauneClicked = ["Jean-Drapeau", "Longueuil-Université-De-Sherbrooke"];

let firstStationClicked = false;
let firstStationName = '';

const setStation = (event) => {
  const stationName = event.target.id;

  if (!firstStationClicked) { // ASSIGN STYLES AND POPULATE PREMIERE STATION
    firstStationClicked = true;
    firstStationName = stationName;
    if (ligneOrangeClicked.includes(stationName)) {
      //SET DOT COLOR
      removePremiereStationStyles();
      orange1.classList.add('selected');
      //POPULATE STATION SELECTOR
      premiereStation.options.length = 0;
      for (let i=0; i < ligneOrange.length; i++) {
        premiereStation.options[i] = new Option(ligneOrange[i], ligneOrange[i]);
      }
      premiereStation.classList.add('orange-background');
      //SET CORRECT OPTION VALUE
      if (stationName === "Place-dArmes") {
        premiereStation.value = "Place-d'Armes";
      } else if (stationName === "Lucien-LAllier") {
        premiereStation.value = "Lucien-L'Allier";
      } else {
        premiereStation.value = stationName;
      }
    } else if (ligneBleueClicked.includes(stationName)) {
      //SET DOT COLOR
      removePremiereStationStyles();
      bleue1.classList.add('selected');
      //POPULATE STATION SELECTOR
      premiereStation.options.length = 0;
      for (let i=0; i < ligneBleue.length; i++) {
        premiereStation.options[i] = new Option(ligneBleue[i], ligneBleue[i]);
      }
      premiereStation.classList.add('bleue-background');
      //SET CORRECT OPTION VALUE
      if (stationName === "DIberville") {
        premiereStation.value = "D'Iberville";
      } else {
        premiereStation.value = stationName;
      }
    } else if (ligneVerteClicked.includes(stationName)) {
      //SET DOT COLOR
      removePremiereStationStyles();
      verte1.classList.add('selected');
      //POPULATE STATION SELECTOR
      premiereStation.options.length = 0;
      for (let i=0; i < ligneVerte.length; i++) {
        premiereStation.options[i] = new Option(ligneVerte[i], ligneVerte[i]);
      }
      premiereStation.classList.add('verte-background');
      //SET CORRECT OPTION VALUE
      if (stationName === "De-lÉglise") {
        premiereStation.value = "De-l'Église";
      } else {
        premiereStation.value = stationName;
      }
    } else {
      //SET DOT COLOR
      removePremiereStationStyles();
      jaune1.classList.add('selected');
      //POPULATE STATION SELECTOR
      premiereStation.options.length = 0;
      for (let i=0; i < ligneJaune.length; i++) {
        premiereStation.options[i] = new Option(ligneJaune[i], ligneJaune[i]);
      }
      premiereStation.classList.add('jaune-background');
      //SET CORRECT OPTION VALUE
      if (stationName === "De-lÉglise") {
        premiereStation.value = "De-l'Église";
      } else {
        premiereStation.value = stationName;
      }
    }
    //IF THERE IS A CURRENT ROUTE ILLUMINATED ON MAP, ELIMINATE IT
    clearCurrentRouteStyle();

    //TEMPORARILY ADD STYLE TO CLICKED STATION WHILE USER DECIDES ON SECOND STATION
    document.getElementById(stationName).classList.add('dot-selected');

    //WIPE DERNIERE STATION AND DOTS CLEAN
    removeDerniereStationStyles();
    derniereStation.options.length = 0;

    //DISABLE DERNIERE STATION
    derniereStation.disabled = true;

    //TEMPORARILY REMOVE EVENTLISTENERS ON DERNIERE STATION DOTS
    orange2.removeEventListener('click', setColors2);
    bleue2.removeEventListener('click', setColors2);
    verte2.removeEventListener('click', setColors2);
    jaune2.removeEventListener('click', setColors2);

    //DISABLE PREMIERE STATION
    premiereStation.disabled = true;

    //TEMPORARILY REMOVE EVENTLISTENERS ON PREMIERE STATION DOTS

    orange1.removeEventListener('click', setColors1);
    bleue1.removeEventListener('click', setColors1);
    verte1.removeEventListener('click', setColors1);
    jaune1.removeEventListener('click', setColors1);

  } else { //firstStationClicked = true -- therefore, the user must select a second station on the map
    firstStationClicked = false;

    if (ligneOrangeClicked.includes(stationName)) {
      //SET DOT COLOR
      removeDerniereStationStyles();
      orange2.classList.add('selected');
      //POPULATE STATION SELECTOR
      derniereStation.options.length = 0;
      for (let i=0; i < ligneOrange.length; i++) {
        derniereStation.options[i] = new Option(ligneOrange[i], ligneOrange[i]);
      }
      derniereStation.classList.add('orange-background');
      //SET CORRECT OPTION VALUE
      if (stationName === "Place-dArmes") {
        derniereStation.value = "Place-d'Armes";
      } else if (stationName === "Lucien-LAllier") {
        derniereStation.value = "Lucien-L'Allier";
      } else {
        derniereStation.value = stationName;
      }
    } else if (ligneBleueClicked.includes(stationName)) {
      //SET DOT COLOR
      removeDerniereStationStyles();
      bleue2.classList.add('selected');
      //POPULATE STATION SELECTOR
      derniereStation.options.length = 0;
      for (let i=0; i < ligneBleue.length; i++) {
        derniereStation.options[i] = new Option(ligneBleue[i], ligneBleue[i]);
      }
      derniereStation.classList.add('bleue-background');
      //SET CORRECT OPTION VALUE
      if (stationName === "DIberville") {
        derniereStation.value = "D'Iberville";
      } else {
        derniereStation.value = stationName;
      }
    } else if (ligneVerteClicked.includes(stationName)) {
      //SET DOT COLOR
      removeDerniereStationStyles();
      verte2.classList.add('selected');
      //POPULATE STATION SELECTOR
      derniereStation.options.length = 0;
      for (let i=0; i < ligneVerte.length; i++) {
        derniereStation.options[i] = new Option(ligneVerte[i], ligneVerte[i]);
      }
      derniereStation.classList.add('verte-background');
      //SET CORRECT OPTION VALUE
      if (stationName === "De-lÉglise") {
        derniereStation.value = "De-l'Église";
      } else {
        derniereStation.value = stationName;
      }
    } else {
      //SET DOT COLOR
      removeDerniereStationStyles();
      jaune2.classList.add('selected');
      //POPULATE STATION SELECTOR
      derniereStation.options.length = 0;
      for (let i=0; i < ligneJaune.length; i++) {
        derniereStation.options[i] = new Option(ligneJaune[i], ligneJaune[i]);
      }
      derniereStation.classList.add('jaune-background');
      //SET CORRECT OPTION VALUE
      if (stationName === "De-lÉglise") {
        derniereStation.value = "De-l'Église";
      } else {
        derniereStation.value = stationName;
      }
    }

    //REMOVE STYLE OF FIRST CLICKED STATION BEFORE RUNNING calculateTime()
    document.getElementById(firstStationName).classList.remove('dot-selected');

    //ENABLE DERNIERE STATION
    derniereStation.disabled = false;

    //ADD EVENTLISTENERS BACK TO DERNIERE STATION DOTS
    orange2.addEventListener('click', setColors2);
    bleue2.addEventListener('click', setColors2);
    verte2.addEventListener('click', setColors2);
    jaune2.addEventListener('click', setColors2);

    //ENABLE PREMIERE STATION
    premiereStation.disabled = false;

    //ADD EVENTLISTENERS BACK TO PREMIERE STATION DOTS

    orange1.addEventListener('click', setColors1);
    bleue1.addEventListener('click', setColors1);
    verte1.addEventListener('click', setColors1);
    jaune1.addEventListener('click', setColors1);

    calculateTime();

  }
};
