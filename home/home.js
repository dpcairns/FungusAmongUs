function setPage() {
    const regionLabels = document.querySelectorAll('label');
    let regionInputs = [];

    for (let i = 0; i <= 4; i++) {
        regionInputs[i] = regionLabels[i].children[0];
    }

    console.log(regionInputs);
}

setPage();