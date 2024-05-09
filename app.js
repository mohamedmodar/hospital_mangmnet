const path = require("path");
const express = require("express");
require("dotenv").config();
const PORT = process.env.PORT || 4000 ;
const router = require("express").Router();
const pool = require("./config/connectDB");

//init app
const app = express();

//middleWare
app.use(express.urlencoded({extended: true}));
app.use(express.json());


//express.static("public")

//engine
app.set("views", path.join(__dirname,"views"));
app.set("view engine","ejs");



app.use("", require("./routers/patientRouter"));


//server
app.listen(PORT, () => {
    console.log(`server is runing in ${process.env.NODE_ENV} up and runing on ${PORT}`);

});






