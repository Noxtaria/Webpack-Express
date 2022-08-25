// exemple fictive

function execute(sql){
    return null;
}

/*
const nom = "Doe";
const prenom = "Joe";
const mail = "Doe@gmail.com";
const telephone = null;
const pays = "United States";

execute (`
    INSERT INTO client (nom, prenom, mail, telephone, pays)
    VALUE ('${nom}', '${prenom}, '${mail}, '${telephone}', '${pays}')
`)

const result = execute('Select * FROM client where id=1')
*/

let client = {
    nom: "Doe",
    prenom: "Joe",
    mail: "Doe@gmail.com",
    telephone: null,
    pays: "United States"
}

execute(`
    INSERT INTO client (nom, prenom, mail, telephone, pays)
    VALUE ('${client.nom}',)
`)

client = execute('Select * FROM client where id=1');