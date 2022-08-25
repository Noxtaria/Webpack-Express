const colors = require('colors');

function lancerDes(){
    const value = Math.floor(Math.random() * 6 + 1);
    const fail = Math.floor(Math.random() * 3 + 1);

    return new Promise( (resolve, reject) => {
        if(fail > 1 ) {
            resolve(value);
        }

        reject('Cassé');
    });
}

lancerDes().then((value) => {
    console.log(`Résultat obtenu: ${value}`);
}).catch((error) =>{
    console.log(`${colors.red(error)}, recommencer !`);
})