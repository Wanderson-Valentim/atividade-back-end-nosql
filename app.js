const express = require("express");
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();
const foodsRouter = require('./routes/foods');

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(foodsRouter);

mongoose.connect(process.env.DB_CONNECTION)
  .then(() => {
    console.log('Connected to DataBase');
    app.listen(3000, ()=>{console.log("Server is running")});
  })
  .catch((error) => {
    console.error('Error connecting to database:', error);
  });