const express = require("express");
const app = express();
const port = 3000;
// Importo il router
const ricetteRouter = require('./routers/posts');

app.use(express.static('public'));
app.get("/", (req, res) => {
    res.send(`Hello world`);
});

app.listen(port, () => {
    console.log(`App attiva su http://localhost:${port}`);
});