const express = require('express');
const app = express();
const connectDataBase= require('./configurations/dataBase')
//Importing Routes from auth.js here
const authRoute = require('./routes/auth');

// Database Connection
connectDataBase();

app.use(express.json());

// Route MiddleWare
app.use('/api/user', authRoute);

app.listen((3000), ()=> console.log('Server Up and Running'));