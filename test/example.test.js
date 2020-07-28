import { mushBasket } from '../common/utils.js';
import { BASKET } from '../common/constants.js';

const test = QUnit.test;
QUnit.module('Grab Basket');

test('Should return an object', (expect) => {
    
    const basket = {
        color: 'red',
        number: 3
    };
    

    const stringyBasket = JSON.stringify(basket);
    localStorage.setItem(BASKET, stringyBasket);

    
    //Act 
    // Call the function you're testing and set the result to a const
    const grabBasket = mushBasket();
    const expected = basket;

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(grabBasket, expected);
});
