import { newUser } from './common/utils.js';
import { USER } from './common/constants.js';

const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const user = newUser(formData);
    
    const stringyUser = JSON.stringify(user);
    localStorage.setItem(USER, stringyUser);
    window.location = './home/index.html';
});