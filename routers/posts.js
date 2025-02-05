// IMPORTO EXSPRESS
const express = require('express')
const routers = express.Router();

// CRUD
// index
routers.get('/posts', function (req, res) {
    res.send('Lista di ricette');
});

// show
routers.get('/posts/:id', function (req, res) {
    res.send('Dettagli della ricetta' + req.params.id);
});

// store
routers.post('/posts', function (req, res) {
    res.send('Creazione nuova ricetta');
});

// update
routers.put('/posts/:id', function (req, res) {
    res.send('Modifica integrale della ricetta' + req.params.id);
});

// modify
routers.patch('/posts/:id', function (req, res) {
    res.send('Modifica parziale della ricetta' + req.params.id);
});

// destroy
routers.delete('/posts/:id', function (req, res) {
    res.send('Eliminazione della ricetta' + req.params.id);
});