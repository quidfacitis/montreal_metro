//SET DOT COLORS AND POPULATE STATION SELECTORS

const removePremiereStationStyles = () => {
  //REMOVE DOT STYLES (BORDER AND FULL COLOR)
  if (orange1.classList.contains('selected')) {
    orange1.classList.remove('selected');
  } else if (bleue1.classList.contains('selected')) {
    bleue1.classList.remove('selected');
  } else if (verte1.classList.contains('selected')) {
    verte1.classList.remove('selected');
  } else if (jaune1.classList.contains('selected')) {
    jaune1.classList.remove('selected');
  }

  //REMOVE STATION SELECTOR STYLES (BACKGROUND COLOR)
  if (premiereStation.classList.contains('orange-background')) {
    premiereStation.classList.remove('orange-background');
  } else if (premiereStation.classList.contains('bleue-background')) {
    premiereStation.classList.remove('bleue-background');
  } else if (premiereStation.classList.contains('verte-background')) {
    premiereStation.classList.remove('verte-background');
  } else if (premiereStation.classList.contains('jaune-background')) {
    premiereStation.classList.remove('jaune-background');
  }
};


const setColors1 = (event) => {
  const dotId = event.target.id;

  removePremiereStationStyles();

  //SET DOT AND STATION SELECTOR STYLES BASED ON CLICK EVENT
  if (dotId === 'orange-1') {
    premiereStation.options.length = 0;
    for (let i=0; i < ligneOrange.length; i++) {
      premiereStation.options[i] = new Option(ligneOrange[i], ligneOrange[i]);
    }
    orange1.classList.add('selected');
    premiereStation.classList.add('orange-background');
  } else if (dotId === 'bleue-1') {
    premiereStation.options.length = 0;
    for (let i=0; i < ligneBleue.length; i++) {
      premiereStation.options[i] = new Option(ligneBleue[i], ligneBleue[i]);
    }
    bleue1.classList.add('selected');
    premiereStation.classList.add('bleue-background');
  } else if (dotId === 'verte-1') {
    premiereStation.options.length = 0;
    for (let i=0; i < ligneVerte.length; i++) {
      premiereStation.options[i] = new Option(ligneVerte[i], ligneVerte[i]);
    }
    verte1.classList.add('selected');
    premiereStation.classList.add('verte-background');
  } else if (dotId === 'jaune-1') {
    premiereStation.options.length = 0;
    for (let i=0; i < ligneJaune.length; i++) {
      premiereStation.options[i] = new Option(ligneJaune[i], ligneJaune[i]);
    }
    jaune1.classList.add('selected');
    premiereStation.classList.add('jaune-background');
  }
  calculateTime();
}

const removeDerniereStationStyles = () => {
  //REMOVE DOT STYLES (BORDER AND FULL COLOR)
  if (orange2.classList.contains('selected')) {
    orange2.classList.remove('selected');
  } else if (bleue2.classList.contains('selected')) {
    bleue2.classList.remove('selected');
  } else if (verte2.classList.contains('selected')) {
    verte2.classList.remove('selected');
  } else if (jaune2.classList.contains('selected')) {
    jaune2.classList.remove('selected');
  }

  //REMOVE STATION SELECTOR STYLES (BACKGROUND COLOR)
  if (derniereStation.classList.contains('orange-background')) {
    derniereStation.classList.remove('orange-background');
  } else if (derniereStation.classList.contains('bleue-background')) {
    derniereStation.classList.remove('bleue-background');
  } else if (derniereStation.classList.contains('verte-background')) {
    derniereStation.classList.remove('verte-background');
  } else if (derniereStation.classList.contains('jaune-background')) {
    derniereStation.classList.remove('jaune-background');
  }
};

const setColors2 = (event) => {
  const dotId = event.target.id;

  removeDerniereStationStyles();

  //SET DOT AND STATION SELECTOR STYLES BASED ON CLICK EVENT
  if (dotId === 'orange-2') {
    derniereStation.options.length = 0;
    for (let i=0; i < ligneOrange.length; i++) {
      derniereStation.options[i] = new Option(ligneOrange[i], ligneOrange[i]);
    }
    orange2.classList.add('selected');
    derniereStation.classList.add('orange-background');
  } else if (dotId === 'bleue-2') {
    derniereStation.options.length = 0;
    for (let i=0; i < ligneBleue.length; i++) {
      derniereStation.options[i] = new Option(ligneBleue[i], ligneBleue[i]);
    }
    bleue2.classList.add('selected');
    derniereStation.classList.add('bleue-background');
  } else if (dotId === 'verte-2') {
    derniereStation.options.length = 0;
    for (let i=0; i < ligneVerte.length; i++) {
      derniereStation.options[i] = new Option(ligneVerte[i], ligneVerte[i]);
    }
    verte2.classList.add('selected');
    derniereStation.classList.add('verte-background');
  } else if (dotId === 'jaune-2') {
    derniereStation.options.length = 0;
    for (let i=0; i < ligneJaune.length; i++) {
      derniereStation.options[i] = new Option(ligneJaune[i], ligneJaune[i]);
    }
    jaune2.classList.add('selected');
    derniereStation.classList.add('jaune-background');
  }
  calculateTime();
}

orange1.addEventListener('click', setColors1);
bleue1.addEventListener('click', setColors1);
verte1.addEventListener('click', setColors1);
jaune1.addEventListener('click', setColors1);

orange2.addEventListener('click', setColors2);
bleue2.addEventListener('click', setColors2);
verte2.addEventListener('click', setColors2);
jaune2.addEventListener('click', setColors2);
