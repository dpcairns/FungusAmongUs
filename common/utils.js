import { BASKET } from './constants.js';

export function newUser(formData) {
    return {
        name: formData.get('name'),
        password: formData.get('password')
    };
}

export function mushBasket() {
    const stringyBasket = localStorage.getItem(BASKET);
    let basket = JSON.parse(stringyBasket) || [];
    
    return basket;
}