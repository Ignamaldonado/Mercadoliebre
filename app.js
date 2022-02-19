const express = require('express');

const path = require('path');

const app = express();

const pathFile = path.join(__dirname, './public');

app.use(express.static(pathFile));

app.listen (process.env.PORT || 3000, () => {console.log ('server funcionando')});

app.get('/', (req, res) => {res.sendFile (path.resolve (__dirname, './views/index.html'))});

app.get('/register', (req, res) => {res.sendFile (path.resolve (__dirname, './views/register.html'))});

app.get('/login', (req, res) => {res.sendFile (path.resolve (__dirname, './views/login.html'))});