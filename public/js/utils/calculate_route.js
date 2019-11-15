//Array containing transfer stations
const transferStations = [
  {
    name: "Jean-Talon",
    lines: ["orange", "bleue"]
  },
  {
    name: "Berri-UQAM",
    lines: ["orange", "verte", "jaune"]
  },
  {
    name: "Lionel-Groulx",
    lines: ["orange", "verte"]
  },
  {
    name: "Snowdon",
    lines: ["orange", "bleue"]
  }
]

//ONLY IF THE LINES ARE NOT THE SAME COLOR && THEY ARE NOT BLUE-YELLOW, BLUE-GREEN
const findTransferMatches = (color1, color2) => {
  const transferMatches = [];
  for (let i=0; i < transferStations.length; i++) {
    if (transferStations[i].lines.includes(color1) && transferStations[i].lines.includes(color2)) {
        transferMatches.push(transferStations[i].name);
    }
  }
  return transferMatches;
}

//CALCULATE THE SHORTEST ROUTE FROM START TO TRANSFER AND FROM TRANSFER TO DESTINATION
//THIS FUNCTION IS ONLY RUN IF THE LIGNE COLORS ARE NOT THE SAME COLOR, BLEUE-JAUNE || BLEUE-VERTE

const calculateRoute = (start, end, transferMatches) => {

  //GET 'START TO TRANSFER' stations for routeArray1 & routeArray2
  let startIndex;
  let transferIndex1;

  const routeArray1 = [];
  const routeArray2 = [];

  for (let j = 0; j < transferMatches.length; j++) { //in order to calculate a maximum of two routes to pick the shortest one
    if (start.ligne === 'orange') {
      startIndex = ligneOrange.indexOf(start.station);
      transferIndex1 = ligneOrange.indexOf(transferMatches[j]);
      if (startIndex < transferIndex1) {
        for (let i = startIndex; i <= transferIndex1; i++) {
          j === 0 ? routeArray1.push(ligneOrange[i]) : routeArray2.push(ligneOrange[i]);
        }
      } else {
        for (let i = startIndex; i >= transferIndex1; i--) {
          j === 0 ? routeArray1.push(ligneOrange[i]) : routeArray2.push(ligneOrange[i]);
        }
      }
    } else if (start.ligne === 'bleue') {
      startIndex = ligneBleue.indexOf(start.station);
      transferIndex1 = ligneBleue.indexOf(transferMatches[j]);
      if (startIndex < transferIndex1) {
        for (let i = startIndex; i <= transferIndex1; i++) {
          j === 0 ? routeArray1.push(ligneBleue[i]) : routeArray2.push(ligneBleue[i]);
        }
      } else {
        for (let i = startIndex; i >= transferIndex1; i--) {
          j === 0 ? routeArray1.push(ligneBleue[i]) : routeArray2.push(ligneBleue[i]);
        }
      }
    } else if (start.ligne === 'verte') {
      startIndex = ligneVerte.indexOf(start.station);
      transferIndex1 = ligneVerte.indexOf(transferMatches[j]);
      if (startIndex < transferIndex1) {
        for (let i = startIndex; i <= transferIndex1; i++) {
          j === 0 ? routeArray1.push(ligneVerte[i]) : routeArray2.push(ligneVerte[i]);
        }
      } else {
        for (let i = startIndex; i >= transferIndex1; i--) {
          j === 0 ? routeArray1.push(ligneVerte[i]) : routeArray2.push(ligneVerte[i]);
        }
      }
    } else if (start.ligne === 'jaune') {
      startIndex = ligneJaune.indexOf(start.station);
      transferIndex1 = ligneJaune.indexOf(transferMatches[j]);
      if (startIndex < transferIndex1) {
        for (let i = startIndex; i <= transferIndex1; i++) {
          j === 0 ? routeArray1.push(ligneJaune[i]) : routeArray2.push(ligneJaune[i]);
        }
      } else {
        for (let i = startIndex; i >= transferIndex1; i--) {
          j === 0 ? routeArray1.push(ligneJaune[i]) : routeArray2.push(ligneJaune[i]);
        }
      }
    }
  }

  //GET 'TRANSFER TO END' stations for routeArray1 & routeArray2
  let transferIndex2;
  let endIndex;

  for (let j = 0; j < transferMatches.length; j++) { //in order to calculate a maximum of two routes to pick the shortest one
    if (end.ligne === 'orange') {
      endIndex = ligneOrange.indexOf(end.station);
      transferIndex2 = ligneOrange.indexOf(transferMatches[j]);
      if (transferIndex2 < endIndex) {
        for (let i = transferIndex2 + 1; i <= endIndex; i++) {
          j === 0 ? routeArray1.push(ligneOrange[i]) : routeArray2.push(ligneOrange[i]);
        }
      } else {
        for (let i = transferIndex2 - 1; i >= endIndex; i--) {
          j === 0 ? routeArray1.push(ligneOrange[i]) : routeArray2.push(ligneOrange[i]);
        }
      }
    } else if (end.ligne === 'bleue') {
      endIndex = ligneBleue.indexOf(end.station);
      transferIndex2 = ligneBleue.indexOf(transferMatches[j]);
      if (transferIndex2 < endIndex) {
        for (let i = transferIndex2 + 1; i <= endIndex; i++) {
          j === 0 ? routeArray1.push(ligneBleue[i]) : routeArray2.push(ligneBleue[i]);
        }
      } else {
        for (let i = transferIndex2 - 1; i >= endIndex; i--) {
          j === 0 ? routeArray1.push(ligneBleue[i]) : routeArray2.push(ligneBleue[i]);
        }
      }
    } else if (end.ligne === 'verte') {
      endIndex = ligneVerte.indexOf(end.station);
      transferIndex2 = ligneVerte.indexOf(transferMatches[j]);
      if (transferIndex2 < endIndex) {
        for (let i = transferIndex2 + 1; i <= endIndex; i++) {
          j === 0 ? routeArray1.push(ligneVerte[i]) : routeArray2.push(ligneVerte[i]);
        }
      } else {
        for (let i = transferIndex2 - 1; i >= endIndex; i--) {
          j === 0 ? routeArray1.push(ligneVerte[i]) : routeArray2.push(ligneVerte[i]);
        }
      }
    } else if (end.ligne === 'jaune') {
      endIndex = ligneJaune.indexOf(end.station);
      transferIndex2 = ligneJaune.indexOf(transferMatches[j]);
      if (transferIndex2 < endIndex) {
        for (let i = transferIndex2 + 1; i <= endIndex; i++) {
          j === 0 ? routeArray1.push(ligneJaune[i]) : routeArray2.push(ligneJaune[i]);
        }
      } else {
        for (let i = transferIndex2 - 1; i >= endIndex; i--) {
          j === 0 ? routeArray1.push(ligneJaune[i]) : routeArray2.push(ligneJaune[i]);
        }
      }
    }
  }

  //return shortest routeArray -- use the length to determine the estimated time of arrival
  if (routeArray2.length === 0) {
    // console.log("routeArray2.length === 0; routeArray1 returned")
    return routeArray1;
  } else if (routeArray1.length < routeArray2.length) {
    // console.log("routeArray1.length < routeArray2.length; routeArray1 returned")
    return routeArray1;
  } else {
    // console.log("routeArray2.length < routeArray1.length; routeArray2 returned")
    return routeArray2;
  }

};
