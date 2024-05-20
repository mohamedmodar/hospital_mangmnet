const {patientCtrl,getUsersCtrl}= require("../controller/patientController");
const router = require("express").Router();
const express = require("express");
const app = express();
const pool = require("../config/connectDB");

      //for add new patient
      app.post("/new_patient",patientCtrl);

      app.get("/new_patient",(req,res)=>{ 
        res.render("../views/new_patient"); 
       
       });

       //for home page
       app.get("/",getUsersCtrl);


      app.get("/result", (req, res) => {
      res.redirect("http://localhost:4000/"); 
        });
// Route to get all users
app.get('/users', getUsersCtrl);
  
module.exports =  app;