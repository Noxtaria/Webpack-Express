const fs = require('fs');
const path = require('path');
require('colors');

const pathfile = path.join(__dirname, 'assets', 'content', 'hello.txt');
const content = 'Hello World\r\n';

// callback
fs.mkdir(path.dirname(pathfile), {recursive: true}, (err) => {
    if(err) {
        throw err;
    }

    console.log('Les répertoires ont bien été créés'.rainbow);

    fs.writeFile(pathfile, content, {flag: 'a'}, (err) => {
        if(err) throw err;

        console.log('Ecriture terminé'.magenta.green);

        fs.readFile(pathfile, (err, result) => {
            if(err) throw err;

            console.log(`${result}`);
        });
    });
});