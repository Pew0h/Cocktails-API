/* Packages */
const express = require('express');
const mongoose = require('mongoose');
const cocktailRouter = require('./routes/cocktail.routes');
const userRouter = require('./routes/auth.routes');
require('dotenv').config()

/* GLOBAL VARIABLES */
const app = express();
const port = process.env.PORT;

/* MONGODB CONNEXION */
mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true });
const database = mongoose.connection;

database.on('error', (error) => {
    console.log('ERROR', error);
});

database.once('open', () => {
    console.log('Connected to database');
});

app.get('/', (req, res) => {
    res.send('Welcome to Cocktail API');
});

app.use(express.json()); // Middleware parse request in JSON
app.use('/api', cocktailRouter);
app.use('/api', userRouter);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
