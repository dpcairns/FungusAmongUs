import dataMush from '../data/mushData.js';

const mushSection = document.querySelector('#all-mush')

function renderAllMush(mushroom) {
    const mushLabel = document.createElement('label')

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

for (let i = 0; i < dataMush.length; i++) {
    const mushArr = dataMush[i];
    const renderAll = renderAllMush(mushArr);

    mushSection.append(renderAll);
}

function grabAllInputs() {
    const mushList = document.querySelectorAll('label');
    let mushInputs = [];

    for (let i = 0; i < mushList.length; i++) {
        mushInputs[i] = mushList[i].children[3];
    }

    for (let i = 0; i < mushInputs.length; i++) {
        mushInputs[i].addEventListener('click', showMeTheDetails);
    }
}

function showMeTheDetails(e) {
    const clicked = e.target.value;
    return window.location = `../mushroom-details/?id=${clicked}`;
}


grabAllInputs();