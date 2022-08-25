// async est un raccourci pour créer des promesses
// le mot clé return permet d'obtenir une promesse en réussite 

async function success() {
    return 'Bravo !';
}

// le mot clé throw permet d'obtenir une promesse en échec
async function fail() {
    throw new Error('dommage...');
}

success().then( console.log ) ;
fail().catch( console.error );


function getNumber() {
    // Math.random() [0, 1[ 
    const randTime = Math.floor( Math.random() * 5000 + 1000); // entre 1s et 5s
    const value = Math.floor( Math.random() * 9 ); // entre 0 et 9
    
    return new Promise( resolve => {
        setTimeout(_ => {
            resolve(value);
        }, randTime);
    });
}

async function addition() {
    const a = await getNumber();
    const b = await getNumber();

    console.log(`${a} + ${b} = ${a+b}`);
}

addition();