const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb+srv://react:react@cluster0-0lsx9.mongodb.net/MyDatabase?retryWrites=true', {
    useNewUrlParser: true
})

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(require('./routes'));

app.listen(3333);

