import dataMush from '../data/mushData.js';

const mushSection = document.querySelector('#all-mush');

function renderAllMush(mushroom) {
    const mushLabel = document.createElement('label');

    const mushImg = document.createElement('img');
    mushImg.src = '../assets/' + mushroom.image;

    const h4 = document.createElement('h4');
    h4.textContent = mushroom.commonName;

    const mushP = document.createElement('p');
    mushP.textContent = mushroom.scientificName;

    const mushInput = document.createElement('input');
    mushInput.type = 'radio';
    mushInput.name = 'fungi';
    mushInput.value = mushroom.id;

    mushLabel.append(mushImg, h4, mushP, mushInput);
    return mushLabel;
}

// seems strange to me to have this for loop in global scope in a utils file
for (let i = 0; i < dataMush.length; i++) {
    const mushArr = dataMush[i];
    const renderAll = renderAllMush(mushArr);

    mushSection.append(renderAll);
}

// nicely done! very cool function
function grabAllInputs() {
    const mushList = document.querySelectorAll('label');
    let mushInputs = [];

    for (let i = 0; i < mushList.length; i++) {
        mushInputs[i] = mushList[i].children[3];
    }

    // very clean way to add event listeners
    for (let i = 0; i < mushInputs.length; i++) {
        mushInputs[i].addEventListener('click', showMeTheDetails);
    }
}

function showMeTheDetails(e) {
    const clicked = e.target.value;
    return window.location = `../mushroom-details/?id=${clicked}`;
}

// according to the filename, it seems to me this call should be in a file called in a 'allMushrooms.js', so that this file can be all util definitions
grabAllInputs();