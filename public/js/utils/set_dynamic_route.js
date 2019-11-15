//FUNCTION THAT MAPS THE ROUTEARRAY (I.E. ARRAY CONTAINING THE SHORTEST ROUTE)
//TO THE DOTS ON THE MAP ILLUMINATING THE ROUTE

let currentRoute = []; //GLOBAL VARIABLE USED TO UPDATE THE DYNAMICALLY GENERATED ROUTE ON MAP

const clearCurrentRouteStyle = () => {
  if (currentRoute.length !== 0) {
    for (let j = 0; j < currentRoute.length; j++) {
      if (currentRoute[j] === "Place-d'Armes") {
        document.getElementById("Place-dArmes").classList.remove('dot-selected');
      } else if (currentRoute[j] === "Lucien-L'Allier") {
        document.getElementById("Lucien-LAllier").classList.remove('dot-selected');
      } else if (currentRoute[j] === "D'Iberville") {
        document.getElementById("DIberville").classList.remove('dot-selected');
      } else if (currentRoute[j] === "De-l'Église") {
        document.getElementById("De-lÉglise").classList.remove('dot-selected');
      } else {
        document.getElementById(currentRoute[j]).classList.remove('dot-selected');
      }
    }
  }
};

const setDynamicRoute = (routeArray) => {
  clearCurrentRouteStyle();
  for (let i = 0; i < routeArray.length; i++) {
    if (routeArray[i] === "Place-d'Armes") {
      document.getElementById("Place-dArmes").classList.add('dot-selected');
    } else if (routeArray[i] === "Lucien-L'Allier") {
      document.getElementById("Lucien-LAllier").classList.add('dot-selected');
    } else if (routeArray[i] === "D'Iberville") {
      document.getElementById("DIberville").classList.add('dot-selected');
    } else if (routeArray[i] === "De-l'Église") {
      document.getElementById("De-lÉglise").classList.add('dot-selected');
    } else {
      document.getElementById(routeArray[i]).classList.add('dot-selected');
    }
  };
};
