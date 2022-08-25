import express from "express";
import path from "path";
import helmet from "helmet";
import models from "./models";  // const models = require('./models);

const app = express();

const port = 3200;

// Middleware
app.use(helmet());

app.use((req, res, next) => {
    console.log(`Request URL: ${req.url}`);
    next();
});
app.use(express.static(path.join(__dirname, 'public')));

app.get('/product/:id', (req, res) => {
    const products = [
        {
            id: 1, name: "Pomme", price: 12.90
        },
        {
            id: 2, name: "Cerise", price: 0.99
        },
        {
            id: 3, name: "Poire", price: 5
        },
        {
            id: 10, name: "Banane", price: 15
        },

    ];

    const id = req.params.id;

    const product = products.find( (p) => {
        return p.id == id;
    });

    if (!product) {
        res.status(404).json({'message': `La ressource n'existe pas`});
        return;
    }

    res.json(product);
});

app.get('/client', async (req, res) => {
    const data = { nom: "Doe", prenom: "John", mail: "john.doe@gmail.com" };

    try{
        const client = await models.Client.create( data );
        res.status(201).json(client);
    } catch(e) {
        res.status(400).json({ message: e.message});
    }
});

app.listen(port, () => {
    console.log(`Serveur listening on port : http://localhost:${port}`);
});

app.get("/", (req, res) => {
    res.send("Serveur ok")
});