import { getMushBasket, findById } from '../common/utils.js';
import { BASKET } from '../common/constants.js';
import mushData from '../data/mushData.js';

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
    const grabBasket = getMushBasket();
    const expected = basket;

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(grabBasket, expected);
});

QUnit.module('Find By Id');
test('Should return the name of and object when passed an id', (expect) => {
    
    const myId1 = 'mush1';
    

    //Act 
    // Call the function you're testing and set the result to a const
    const mushroom1 = findById(mushData, myId1);
    const actual = mushroom1.commonName;
    const expected1 = 'Golden Chanterelle';


    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected1);
});
