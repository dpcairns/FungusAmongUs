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
setPage();
function regionInfoReveal(e) {
    const regionClicked = Number(e.target.value);
    
    const allDivs = document.querySelectorAll('div');

    switch (regionClicked) {
        case 0:
            for (let i = 0; i < allDivs.length; i++) {
                allDivs[i].classList.add('hidden');
            }
            coastRegion.classList.remove('hidden');
            break;
        case 1:
            for (let i = 0; i < allDivs.length; i++) {
                allDivs[i].classList.add('hidden');
            }
            swRegion.classList.remove('hidden');
            break;
        case 2:
            for (let i = 0; i < allDivs.length; i++) {
                allDivs[i].classList.add('hidden');
            }
            nwRegion.classList.remove('hidden');
            break;
        case 3:
            for (let i = 0; i < allDivs.length; i++) {
                allDivs[i].classList.add('hidden');
            }
            centralRegion.classList.remove('hidden');
            break;
        case 4:
            for (let i = 0; i < allDivs.length; i++) {
                allDivs[i].classList.add('hidden');
            }
            eastRegion.classList.remove('hidden');
            break;
    }

    console.log(allDivs)
}