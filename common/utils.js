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

export function renderCoast(mushroom) {
    const label = document.createElement('label');
    label.classList = 'mush-radio';
    const img = document.createElement('img');
    img.src = '../assets/' + mushroom.image;
    label.append(img);
    
    const input = document.createElement('input');
    input.type = 'radio';
    input.name = 'coast';
    input.value = mushroom.id;
    label.append(input);
    
    const name = document.createElement('h4');
    name.textContent = mushroom.commonName;
    label.append(name);
    
    return label;
}

export function renderSW(mushroom) {
    const label = document.createElement('label');
    label.classList = 'mush-radio';
    const img = document.createElement('img');
    img.src = '../assets/' + mushroom.image;
    label.append(img);
    
    const input = document.createElement('input');
    input.type = 'radio';
    input.name = 'southwest';
    input.value = mushroom.id;
    label.append(input);
    
    const name = document.createElement('h4');
    name.textContent = mushroom.commonName;
    label.append(name);
    
    return label;
}

export function renderNW(mushroom) {
    const label = document.createElement('label');
    label.classList = 'mush-radio';
    const img = document.createElement('img');
    img.src = '../assets/' + mushroom.image;
    label.append(img);
    
    const input = document.createElement('input');
    input.type = 'radio';
    input.name = 'northwest';
    input.value = mushroom.id;
    label.append(input);
    
    const name = document.createElement('h4');
    name.textContent = mushroom.commonName;
    label.append(name);
    
    return label;
}

export function renderCentral(mushroom) {
    const label = document.createElement('label');
    label.classList = 'mush-radio';
    const img = document.createElement('img');
    img.src = '../assets/' + mushroom.image;
    label.append(img);
    
    const input = document.createElement('input');
    input.type = 'radio';
    input.name = 'central';
    input.value = mushroom.id;
    label.append(input);
    
    const name = document.createElement('h4');
    name.textContent = mushroom.commonName;
    label.append(name);
    
    return label;
}

export function renderEastern(mushroom) {
    const label = document.createElement('label');
    label.classList = 'mush-radio';
    const img = document.createElement('img');
    img.src = '../assets/' + mushroom.image;
    label.append(img);
    
    const input = document.createElement('input');
    input.type = 'radio';
    input.name = 'east';
    input.value = mushroom.id;
    label.append(input);
    
    const name = document.createElement('h4');
    name.textContent = mushroom.commonName;
    label.append(name);
    
    return label;
}