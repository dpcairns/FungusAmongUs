import { renderCoast, renderSW, renderNW, renderCentral, renderEastern } from '../common/utils.js';
import { coastMush, swMush, nwMush, centralMush, eastMush, USER } from '../common/constants.js';

const revealRegion = document.querySelector('#region-reveal');
const coastRegion = document.querySelector('#coast');
const swRegion = document.querySelector('#southwest');
const nwRegion = document.querySelector('#northwest');
const centralRegion = document.querySelector('#central');
const eastRegion = document.querySelector('#east');
const userWelcome = document.querySelector('#welcome-user');

const userData = JSON.parse(localStorage.getItem(USER));

userWelcome.textContent = `Welcome ${userData.name}!`;

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

    for (let i = 0; i < allDivs.length; i++) {
        allDivs[i].classList.add('hidden');
    }
    
    revealRegion.classList.remove('hidden');

    switch (regionClicked) {
        case 0:
            coastRegion.classList.remove('hidden');
            break;
        case 1:
            swRegion.classList.remove('hidden');
            break;
        case 2:
            nwRegion.classList.remove('hidden');
            break;
        case 3:
            centralRegion.classList.remove('hidden');
            break;
        case 4:
            eastRegion.classList.remove('hidden');
            break;
    }
}

// hmmm, I wonder if you could have written a function to reduce the repition in these for loops. the all look about the same

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