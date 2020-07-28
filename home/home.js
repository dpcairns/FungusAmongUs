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
    const regionClicked = e.target.value;
    return regionClicked;
}

setPage();