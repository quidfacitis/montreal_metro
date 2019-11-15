//FIGURE OUT WHICH LINE COLOR THE STATION BELONGS TO -- GET INDEX OF STATION

const premiereStationIndex = (station) => {
  if (premiereStation.classList.contains('orange-background')) {
    return {
      index: ligneOrange.indexOf(station),
      ligne: "orange"
    };
  } else if (premiereStation.classList.contains('bleue-background')) {
    return {
      index: ligneBleue.indexOf(station),
      ligne: "bleue"
    };
  } else if (premiereStation.classList.contains('verte-background')) {
    return {
      index: ligneVerte.indexOf(station),
      ligne: "verte"
    };
  } else if (premiereStation.classList.contains('jaune-background')) {
    return {
      index: ligneJaune.indexOf(station),
      ligne: "jaune"
    };
  }
};

const derniereStationIndex = (station) => {
  if (derniereStation.classList.contains('orange-background')) {
    return {
      index: ligneOrange.indexOf(station),
      ligne: "orange"
    };
  } else if (derniereStation.classList.contains('bleue-background')) {
    return {
      index: ligneBleue.indexOf(station),
      ligne: "bleue"
    };
  } else if (derniereStation.classList.contains('verte-background')) {
    return {
      index: ligneVerte.indexOf(station),
      ligne: "verte"
    };
  } else if (derniereStation.classList.contains('jaune-background')) {
    return {
      index: ligneJaune.indexOf(station),
      ligne: "jaune"
    };
  }
};
