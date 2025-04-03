const cookieParser = require('cookie-parser');
const express = require('express');
const app = express();
app.use(cookieParser());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', function(req, res) {
    res.cookie('name', 'express');
    res.send('Hello World!');
});

app.listen(3000);