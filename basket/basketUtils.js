import { getMushBasket } from '../common/utils.js';
import { BASKET } from '../common/constants.js';

const basket = getMushBasket();
const ul = document.querySelector('ul');
const resetButton = document.getElementById('reset-button');

export function renderBasket(basket) {
    
    const liEl = document.createElement('li');
    
    const label = document.createElement('label');

    const img = document.createElement('img');
    img.src = '../assets/' + basket.image;
    
    const h4 = document.createElement('h4');
    h4.textContent = basket.commonName;

    const input = document.createElement('input');
    input.type = 'radio';
    input.name = 'basket';
    input.value = basket.id;

    label.append(img, h4, input);

    liEl.append(label);
    return liEl;
}

for (let i = 0; i < basket.length; i++) {
    const basketMush = basket[i];
    const ulEl = renderBasket(basketMush);

    resetButton.classList.remove('hidden');

    ul.append(ulEl);
}

function grabBasketInputs() {
    const mushList = document.querySelectorAll('label');
    let mushInputs = [];

    for (let i = 0; i < mushList.length; i++) {
        mushInputs[i] = mushList[i].children[2];
    }

    for (let i = 0; i < mushInputs.length; i++) {
        mushInputs[i].addEventListener('click', basketToDetails);
    }
}

function basketToDetails(e) {
    const clicked = e.target.value;
    return window.location = `../mushroom-details/?id=${clicked}`;
}

grabBasketInputs();

function clearBasket() {
    localStorage.removeItem(BASKET);
}

resetButton.addEventListener('click', () => {
    clearBasket();
    resetButton.classList.add('hidden');
    window.location = './index.html';
});

