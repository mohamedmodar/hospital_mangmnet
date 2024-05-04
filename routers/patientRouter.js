const {patientCtrl}= require("../controller/patientController");
const router = require("express").Router();
const express = require("express");
const app = express();

app.post("/form",patientCtrl)

app.get("/form",(req,res)=>{ 
 res.render("../views/views"); 

});

app.get("/result", (req, res) => {
    res.send("Data received");
});


module.exports =  app;