const calculateBleueJaune = (start, end) => {
  const routeArray1 = [];
  const routeArray2 = [];

  const startIndex = start.ligne === 'bleue' ? ligneBleue.indexOf(start.station) : ligneBleue.indexOf(end.station);
  const endIndex = end.ligne === 'jaune' ? ligneJaune.indexOf(end.station) : ligneJaune.indexOf(start.station);
  const jeanTalonIndexBleue = ligneBleue.indexOf('Jean-Talon');
  const jeanTalonIndexOrange = ligneOrange.indexOf('Jean-Talon');
  const snowdonIndexBleue = ligneBleue.indexOf('Snowdon');
  const snowdonIndexOrange = ligneOrange.indexOf('Snowdon');
  const berriUQAMIndexOrange = ligneOrange.indexOf('Berri-UQAM');

  //ADD BLEUE STATIONS TO routeArray1
  if (startIndex < jeanTalonIndexBleue) {
    for (let i = startIndex; i <= jeanTalonIndexBleue; i++) {
      routeArray1.push(ligneBleue[i]);
    }
  } else {
    for (let i = startIndex; i >= jeanTalonIndexBleue; i--) {
      routeArray1.push(ligneBleue[i]);
    }
  }

  //ADD ORANGE STATIONS TO routeArray1
  for (let j = jeanTalonIndexOrange + 1; j <= berriUQAMIndexOrange; j++) { //add orange stations to routeArray1
    routeArray1.push(ligneOrange[j]);
  }

  //ADD BLEUE STATIONS TO routeArray2
  for (let i = startIndex; i <= snowdonIndexBleue; i++) {
    routeArray2.push(ligneBleue[i]);
  }

  //ADD ORANGE STATIONS TO routeArray2
  for (let j = snowdonIndexOrange - 1; j >= berriUQAMIndexOrange; j--) { //add orange stations to routeArray1
    routeArray2.push(ligneOrange[j]);
  }

  //ADD JAUNE STATIONS TO routeArray1 & routeArray2
  if (endIndex !== 0) {
    for (let k = 1; k <= endIndex; k++) {
      routeArray1.push(ligneJaune[k]);
      routeArray2.push(ligneJaune[k]);
    }
  }

  //return shortest route
  if (routeArray1.length < routeArray2.length) {
    // console.log("routeArray1.length < routeArray2.length; routeArray1 returned")
    return routeArray1;
  } else {
    // console.log("routeArray2.length < routeArray1.length; routeArray2 returned")
    return routeArray2;
  }
};
