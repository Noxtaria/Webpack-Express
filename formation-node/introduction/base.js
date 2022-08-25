// Pour executer un ficher avec NodeJS
// node path/to/file.js

console.log('Hello World');

const number = 10;

console.log('Hello', 'World', number);

console.log('La valeur de number est %d', number);

console.log(`La valeur de number est ${number}`);

console.log(`__filename: ${__filename}`);
console.log(`__dirname: ${__dirname}`);

const timer = 1000;

setTimeout( () => {
    console.log(`Je suis executé après ${timer} ms`)
}, timer);

console.log('Fin de ma page');

