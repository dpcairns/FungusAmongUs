import { BASKET } from './constants.js';

export function newUser(formData) {
    return {
        name: formData.get('name'),
        password: formData.get('password')
    };
}

export function getMushBasket() {
    const stringyBasket = localStorage.getItem(BASKET);
    let basket = JSON.parse(stringyBasket) || [];
    
    return basket;
}

export function findById(someArray, someId) {
    let match = null;

    for (let i = 0; i < someArray.length; i++) {
        if (someId === someArray[i].id) {
            match = someArray[i];
        }
    } 
      
    return match;
}