import { mushBasket } from '../common/utils';

export function renderMush(mushroom) {
    const section = document.createElement('section');
    const image = document.createElement('img');
    image.src = '../assets/' + mushroom.image;
    section.append(image);

    const h1 = document.createElement('h1');
    h1.textContent = mushroom.commonName;
    section.append(h1);

    const h2 = document.createElement('h2');
    h2.textContent = mushroom.scientificName;
    section.append(h2);

    const h3 = document.createElement('h3');
    h3.textContent = 'Region: ' + mushroom.region;
    section.append(h3);

    const p = document.createElement('p');
    p.textContent = mushroom.description;
    section.append(p);

    const div = document.createElement('div');
    div.id = 'edibility-section';
    
    const divh3 = document.createElement('h3');
    divh3.textContent = 'Edibility';
    div.append(divh3);

    const divp = document.createElement('p');
    divp.id = 'edible-paragraph';
    divp.textContent = mushroom.edibility;
    div.append(divp);

    section.append(div);

    const addButton = document.createElement('button');
    addButton.textContent = 'Collect This Mushroom';
    section.append(addButton);

    return section;
}