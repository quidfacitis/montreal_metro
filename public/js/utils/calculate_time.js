//THE FUNCTION THAT BRINGS EVERYTHING TOGETHER -- CALCULATES THE SHORTEST ROUTE
//BETWEEN TWO STATIONS, USES THE ARRAY LENGTH TO DETERMINE THE ARRIVAL TIME,
//AND DYNAMICALLY MAPS THE ROUTE TO THE MAP

const calculateTime = () => {
  const stationText1 = premiereStation.selectedOptions[0].textContent;
  const stationText2 = derniereStation.selectedOptions[0].textContent;

  const ligneAndIndex1 = premiereStationIndex(stationText1);
  const ligneAndIndex2 = derniereStationIndex(stationText2);

  const start = {
    station: stationText1,
    ligne: ligneAndIndex1.ligne
  }

  const end = {
    station: stationText2,
    ligne: ligneAndIndex2.ligne
  }

  if (ligneAndIndex1.ligne === ligneAndIndex2.ligne) {
    const sameColorRoute = calculateSameColorRoute(ligneAndIndex1, ligneAndIndex2);
    setDynamicRoute(sameColorRoute);
    currentRoute = sameColorRoute; //SET THE currentROUTE AFTER RUNNING setDynamicRoute()
    // console.log(`SAME COLOR ROUTE: ${sameColorRoute}`);
    travelTime.textContent = `${(sameColorRoute.length - 1) * 2} minutes`;
  } else if ((ligneAndIndex1.ligne === 'bleue' && ligneAndIndex2.ligne === 'jaune') ||
    (ligneAndIndex1.ligne === 'jaune' && ligneAndIndex2.ligne === 'bleue')) { //this combination doesn't have direct transfers
    // console.log('bleue & jaune || jaune & bleue');
    const bleueJauneRoute = calculateBleueJaune(start, end);
    setDynamicRoute(bleueJauneRoute);
    currentRoute = bleueJauneRoute; //SET THE currentROUTE AFTER RUNNING setDynamicRoute()
    // console.log(`SHORTEST BLEUE-JAUNE route: ${bleueJauneRoute}`);
    travelTime.textContent = `${(bleueJauneRoute.length - 1) * 2} minutes`;
  } else if ((ligneAndIndex1.ligne === 'bleue' && ligneAndIndex2.ligne === 'verte') ||
    (ligneAndIndex1.ligne === 'verte' && ligneAndIndex2.ligne === 'bleue')) { //this combination doesn't have direct transfers
    // console.log('bleue & verte || verte & bleue');
    const bleueVerteRoute = calculateBleueVerte(start, end);
    setDynamicRoute(bleueVerteRoute);
    currentRoute = bleueVerteRoute; //SET THE currentROUTE AFTER RUNNING setDynamicRoute()
    // console.log(`SHORTEST BLEUE-VERTE route: ${bleueVerteRoute}`);
    travelTime.textContent = `${(bleueVerteRoute.length - 1) * 2} minutes`;
  } else { //DIFFERENT COLORS THAT ARE NOT BLUE-GREEN, YELLOW-BLUE
    const transferMatches = findTransferMatches(ligneAndIndex1.ligne, ligneAndIndex2.ligne);
    const route = calculateRoute(start, end, transferMatches);
    setDynamicRoute(route);
    currentRoute = route; //SET THE currentROUTE AFTER RUNNING setDynamicRoute()
    // console.log(transferMatches);
    // console.log(`stations from start to end, using SHORTEST ROUTE: ${route}`);
    travelTime.textContent = `${(route.length - 1) * 2} minutes`;
  }
};

premiereStation.addEventListener('change', calculateTime);
derniereStation.addEventListener('change', calculateTime);
