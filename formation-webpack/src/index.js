import User from './classes/Users.js';
import './css/style.css';
import './scss/style.scss';

const user = new User('Jhon', 'Doe');

console.log(`Hello ${user.getFullname()} !`);

document.addEventListener('DOMContentLoaded', () => {
    const target = document.querySelector('#fullname');
    target.innerText = `Hello ${user.getFullname()} !`;
})