//CALCULATE THE SAME COLOR ROUTE IN ORDER TO DYNAMICALLY GENERATE THE ROUTE ON THE MAP

const calculateBleueShortcut = (ligneAndIndex1, ligneAndIndex2, sameColorRoute) => {

  const bleueShortcutRoute = [];

  const jeanTalonIndex = ligneOrange.indexOf('Jean-Talon');
  const snowdonIndex = ligneOrange.indexOf('Snowdon');

  const closeToJeanTalonIndex = Math.abs(ligneAndIndex1.index - jeanTalonIndex) <
    Math.abs(ligneAndIndex2.index - jeanTalonIndex) ? ligneAndIndex1.index : ligneAndIndex2.index;

  const closeToSnowdonIndex = Math.abs(ligneAndIndex1.index - snowdonIndex) <
    Math.abs(ligneAndIndex2.index - snowdonIndex) ? ligneAndIndex1.index : ligneAndIndex2.index;

  const bleueShortcutLength = Math.abs(closeToJeanTalonIndex - jeanTalonIndex) +
    Math.abs(closeToSnowdonIndex - snowdonIndex) + 9;

  if (bleueShortcutLength < sameColorRoute.length) {

    //ADD LIGNE ORANGE STATIONS FROM closeToJeanTalonIndex TO JEAN-TALON
    if (closeToJeanTalonIndex <= jeanTalonIndex) {
      for (let i = closeToJeanTalonIndex; i <= jeanTalonIndex; i++) {
        bleueShortcutRoute.push(ligneOrange[i]);
      }
    } else {
      for (let i = closeToJeanTalonIndex; i >= jeanTalonIndex; i--) {
        bleueShortcutRoute.push(ligneOrange[i]);
      }
    }

    //ADD LIGNE BLEUE STATIONS FROM JEAN-TALON TO SNOWDON, NOT COUNTING THEM
    for (let j = ligneBleue.indexOf('Jean-Talon') + 1; j < ligneBleue.indexOf('Snowdon'); j++) {
      bleueShortcutRoute.push(ligneBleue[j]);
    }

    //ADD LIGNE ORANGE STATIONS FROM SNOWDON TO closeToSnowdonIndex
    if (snowdonIndex <= closeToSnowdonIndex) {
      for (let k = snowdonIndex; k <= closeToSnowdonIndex; k++) {
        bleueShortcutRoute.push(ligneOrange[k]);
      }
    } else {
      for (let k = snowdonIndex; k >= closeToSnowdonIndex; k--) {
        bleueShortcutRoute.push(ligneOrange[k]);
      }
    }

    return bleueShortcutRoute; //an array with all the stations in the shortcut route
  } else {
    return bleueShortcutRoute; //an empty array
  }
};

const calculateSameColorRoute = (ligneAndIndex1, ligneAndIndex2) => {
  const sameColorRoute = [];
  let bleueShortcutRoute = [];

  if (ligneAndIndex1.ligne === 'orange') {
    if (ligneAndIndex1.index <= ligneAndIndex2.index) {
      for (let i = ligneAndIndex1.index; i <= ligneAndIndex2.index; i++) {
        sameColorRoute.push(ligneOrange[i]);
      }
    } else {
      for (let i = ligneAndIndex1.index; i >= ligneAndIndex2.index; i--) {
        sameColorRoute.push(ligneOrange[i]);
      }
    }
    if (sameColorRoute.length > 9) {
      bleueShortcutRoute = calculateBleueShortcut(ligneAndIndex1, ligneAndIndex2, sameColorRoute);
    }
  } else if (ligneAndIndex1.ligne === 'bleue') {
    if (ligneAndIndex1.index <= ligneAndIndex2.index) {
      for (let i = ligneAndIndex1.index; i <= ligneAndIndex2.index; i++) {
        sameColorRoute.push(ligneBleue[i]);
      }
    } else {
      for (let i = ligneAndIndex1.index; i >= ligneAndIndex2.index; i--) {
        sameColorRoute.push(ligneBleue[i]);
      }
    }
  } else if (ligneAndIndex1.ligne === 'verte') {
    if (ligneAndIndex1.index <= ligneAndIndex2.index) {
      for (let i = ligneAndIndex1.index; i <= ligneAndIndex2.index; i++) {
        sameColorRoute.push(ligneVerte[i]);
      }
    } else {
      for (let i = ligneAndIndex1.index; i >= ligneAndIndex2.index; i--) {
        sameColorRoute.push(ligneVerte[i]);
      }
    }
  } else {
    if (ligneAndIndex1.index <= ligneAndIndex2.index) {
      for (let i = ligneAndIndex1.index; i <= ligneAndIndex2.index; i++) {
        sameColorRoute.push(ligneJaune[i]);
      }
    } else {
      for (let i = ligneAndIndex1.index; i >= ligneAndIndex2.index; i--) {
        sameColorRoute.push(ligneJaune[i]);
      }
    }
  }
  return bleueShortcutRoute.length > 0 ? bleueShortcutRoute : sameColorRoute;
};
