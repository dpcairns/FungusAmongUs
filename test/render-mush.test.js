import { renderMush } from '../mushroom-details/render-mush.js';

const test = QUnit.test;

QUnit.module('Render Mushrooms');

test('it should render a mushroom', (expect) => {

    const mushroom = {

        id: 'mush2', 
        commonName: 'Mushroom Name',
        scientificName: 'Scientific Name',
        image: 'kitten1.jpg',
        description: 'This is a paragraph about the mushroom.',
        edibility: 'Edibility details here.',
        region: 'Northwest',

    };

    const expected = 
        `<section>
            <img src="../assets/kitten1.jpg">
            <h1>Mushroom Name</h1>
            <h2>Scientific Name</h2>
            <h3>Region: Northwest</h3>
            <p>
                This is a paragraph about the mushroom.
            </p>
            <div id="edibility-section">
                <h3>Edibility</h3>
                 <p id="edible-paragraph">Edibility details here.</p>
            </div>
            <label class="hidden">
                <p id="button-text" class="hidden">You've successfully collected this mushroom!</p>
                <p id="button-text" class="hidden">You already have this mushroom in your basket.</p>
                <button id="basket-button">View Your Basket</button>
            </label>
            <button value="mush2" >Collect This Mushroom</button>
        </section>`.replace(/\s/g, '');
 
    const actual = renderMush(mushroom);
    expect.equal(actual.outerHTML.replace(/\s/g, ''), expected);
});
