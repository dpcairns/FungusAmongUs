import { getMushBasket, renderBasket } from '../common/utils.js';
import { BASKET } from '../common/constants.js';
import { USER } from '../common/constants.js';

const basket = getMushBasket();
const ul = document.querySelector('ul');
const resetButton = document.querySelector('#reset-button');

for (let i = 0; i < basket.length; i++) {
    const basketMush = basket[i];
    const ulEl = renderBasket(basketMush);

    resetButton.classList.remove('hidden');

    ul.append(ulEl);
}

function displayUserName() {
    const user = document.getElementById('user-name');
    const userData = JSON.parse(localStorage.getItem(USER));
    user.textContent = `${userData.name}'s Mushroom Basket`;
}
displayUserName();


// this seems similar to your other "grab input" functions. I wonder if you could have made a function reusable in bother cases, that took the differences in as arguments
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

function clearBasket() {
    localStorage.removeItem(BASKET);
}

resetButton.addEventListener('click', () => {
    clearBasket();
    resetButton.classList.add('hidden');
    window.location = './index.html';
});

grabBasketInputs();


