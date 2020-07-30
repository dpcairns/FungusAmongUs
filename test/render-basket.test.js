import { renderBasket } from '../basket/basketUtils.js';
import { getMushBasket } from '../common/utils.js';

const test = QUnit.test;

QUnit.module('Render Basket');

test('it should render a mushroom in the basket', (expect) => {

    const morel = {
        id: 'mush9',
        commonName: 'Morel Mushroom',
        image: 'morel-mushroom.jpg',
    };

    const stringyBasket = JSON.stringify(morel);
    localStorage.setItem('BASKET', stringyBasket);

    const basket = getMushBasket();

    const expected = `
    <li>
    <label>
    <img src="../assets/morel-mushroom.jpg">
    <h4>Morel Mushroom</h4>
    <input type="radio" name="basket" value="mush9">
    </label>
    </li>
    `.replace(/\s/g, '');
 
    const actual = renderBasket(basket);
    expect.equal(actual.outerHTML.replace(/\s/g, ''), expected);
});
