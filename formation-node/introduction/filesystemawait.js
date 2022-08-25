const fs = require('fs').promises;
const path = require('path');
require('colors');

const pathfile = path.join(__dirname, 'assets', 'content', 'asyncawait.txt');
const content = 'Hello World\r\n';

// IIFE ( Immediately Invoked Function Expression)
// https://developer.mozilla.org/fr/docs/Glossary/IIFE

(async () => {
    await fs.mkdir(path.dirname(pathfile), {recursive: true});
        console.log('Les répertoires ont bien été créés'.rainbow);

    await fs.writeFile(pathfile, content, {flag: 'a'})
        console.log('Ecriture terminé'.bgBlack.green);

    const result = await fs.readFile(pathfile);
        console.log(`${result}`);

})();