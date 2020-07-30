import { getMushBasket } from '../common/utils.js';

const basket = getMushBasket();
const ul = document.querySelector('ul');

export function renderBasket(basket) {
    
    const liEl = document.createElement('li');

    const img = document.createElement('img');
    img.src = '../assets/' + basket.image;
    
    const h4 = document.createElement('h4');
    h4.textContent = basket.commonName;

    const input = document.createElement('input');
    input.type = 'radio';
    input.name = 'basket';
    input.value = basket.id;

    liEl.append(img, h4, input);
    return liEl;
}

for (let i = 0; i < basket.length; i++) {
    const basketMush = basket[i];
    const ulEl = renderBasket(basketMush);

    ul.append(ulEl);
}

function grabBasketInputs() {
    const mushList = document.querySelectorAll('li');
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