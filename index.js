const express = require('express');
const app = express();
const connectDataBase= require('./configurations/dataBase')
//Importing Routes from auth.js here
const authRoute = require('./routes/auth');
const postRoute = require('./routes/posts')
// Database Connection
connectDataBase();

app.use(express.json());

// Route MiddleWare
app.use('/api/user', authRoute);
app.use('/api/posts', postRoute);

app.listen((3000), ()=> console.log('Server Up and Running'));