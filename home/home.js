import { renderCoast, renderSW, renderNW, renderCentral, renderEastern } from '../common/utils.js';
import { coastMush, swMush, nwMush, centralMush, eastMush } from '../common/constants.js';

const revealRegion = document.querySelector('#region-reveal')
const coastRegion = document.querySelector('#coast');
const swRegion = document.querySelector('#southwest');
const nwRegion = document.querySelector('#northwest');
const centralRegion = document.querySelector('#central');
const eastRegion = document.querySelector('#east');

function setPage() {
    const regionLabels = document.querySelectorAll('label');
    let regionInputs = [];

    for (let i = 0; i <= 4; i++) {
        regionInputs[i] = regionLabels[i].children[0];
    }

    for (let i = 0; i < regionInputs.length; i++) {
        regionInputs[i].addEventListener('click', regionInfoReveal);
    }
}

function regionInfoReveal(e) {
    const regionClicked = Number(e.target.value);
    
    const allDivs = document.querySelectorAll('div');

    switch (regionClicked) {
        case 0:
            for (let i = 0; i < allDivs.length; i++) {
                allDivs[i].classList.add('hidden');
            }
            coastRegion.classList.remove('hidden');
            revealRegion.classList.remove('hidden');
            break;
        case 1:
            for (let i = 0; i < allDivs.length; i++) {
                allDivs[i].classList.add('hidden');
            }
            swRegion.classList.remove('hidden');
            revealRegion.classList.remove('hidden');
            break;
        case 2:
            for (let i = 0; i < allDivs.length; i++) {
                allDivs[i].classList.add('hidden');
            }
            nwRegion.classList.remove('hidden');
            revealRegion.classList.remove('hidden');
            break;
        case 3:
            for (let i = 0; i < allDivs.length; i++) {
                allDivs[i].classList.add('hidden');
            }
            centralRegion.classList.remove('hidden');
            revealRegion.classList.remove('hidden');
            break;
        case 4:
            for (let i = 0; i < allDivs.length; i++) {
                allDivs[i].classList.add('hidden');
            }
            eastRegion.classList.remove('hidden');
            revealRegion.classList.remove('hidden');
            break;
    }
}

for (let i = 0; i < coastMush.length; i++) {
    const mushrooms = coastMush[i];
    const domElement = renderCoast(mushrooms);

    coastRegion.append(domElement);
}

for (let i = 0; i < swMush.length; i++) {
    const mushrooms = swMush[i];
    const domElement = renderSW(mushrooms);

    swRegion.append(domElement);
}

for (let i = 0; i < nwMush.length; i++) {
    const mushrooms = nwMush[i];
    const domElement = renderNW(mushrooms);

    nwRegion.append(domElement);
}

for (let i = 0; i < centralMush.length; i++) {
    const mushrooms = centralMush[i];
    const domElement = renderCentral(mushrooms);

    centralRegion.append(domElement);
}

for (let i = 0; i < eastMush.length; i++) {
    const mushrooms = eastMush[i];
    const domElement = renderEastern(mushrooms);

    eastRegion.append(domElement);
}

function setupMush() {
    const mushLabels = document.querySelectorAll('.mush-radio');
    let mushInputs = [];
    console.log(mushInputs);
    for (let i = 0; i < mushLabels.length; i++) {
        mushInputs[i] = mushLabels[i].children[1];
    }

    for (let i = 0; i < mushInputs.length; i++) {
        mushInputs[i].addEventListener('click', toMushDetails);
    }
}

function toMushDetails(e) {
    const mushClicked = e.target.value;

    return window.location = `../mushroom-details/?id=${mushClicked}`;
}

setPage();
setupMush();