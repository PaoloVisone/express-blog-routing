const express = require("express");
const app = express();

// Importo "cors"
const cors = require("cors");

const port = 3000;

// Importo il router
const postRouter = require('./routers/posts');

// importo l'oggetto posts dal file data/posts.js
const posts = require('./data/posts');

// rotta index per visualizzare tutti i post
app.get("/posts", (req, res) => {
    res.send(posts);
});
// rotta show per visualizzare un post specifico
app.get("/posts/:id", (req, res) => {
    const id = req.params.id;
    res.send(posts[id]);
});

// Indico ad express di usare la cartella public come cartella statica
app.use(express.static('public'));
app.get("/", (req, res) => {
    res.send(`Hello world`);
});

// Indico ad express le nuove rotte
app.use("/posts", postRouter)

// middleware per il CORS
app.use(cors({
    origin: 'http://localhost:5173'
}));


app.listen(port, () => {
    console.log(`App attiva su http://localhost:${port}`);
});