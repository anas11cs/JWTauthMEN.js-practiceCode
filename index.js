const express = require('express');
const app = express();

//Importing Routes from auth.js here
const authRoute = require('./routes/auth');

// Route MiddleWare
app.use('/api/user', authRoute);

app.listen((3000), ()=> console.log('Server Up and Running'));