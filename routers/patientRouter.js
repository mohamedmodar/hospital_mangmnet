const {patientCtrl}= require("../controller/patientController");
const router = require("express").Router();
const express = require("express");
const app = express();
const pool = require("../config/connectDB");

      //for add new patient
      app.post("/new_patient",patientCtrl)
      app.get("/new_patient",(req,res)=>{ 
        res.render("../views/new_patient"); 
       
       });

       //for home page
       app.get("/", async(req,res)=>{ 
        try {
          const client = await pool.connect();
          const Doctors = await client.query('SELECT * FROM public.doctor;'); 
          const doctors = Doctors.rows;
    
          const Nurses = await client.query('SELECT * FROM public.nurse;'); 
          const nurses = Nurses.rows;
    
          const Rooms = await client.query('SELECT * FROM public.room ORDER BY roomnumber ASC ;'); 
          const rooms = Rooms.rows;
          client.release();
        
         res.render("../views/home",{title: "the available doctors is : ", doctors , nurses, rooms});
        } catch (error) {
          console.error(error);
          res.status(500).send('Error retrieving users');
        }
       
       
       });


      app.get("/result", (req, res) => {
      res.send("Data received");
        });

// Route to get all users
app.get('/users', async (req, res) => {
    try {
      const client = await pool.connect();
      const Doctors = await client.query('SELECT * FROM public.doctor;'); 
      const doctors = Doctors.rows;

      const Nurses = await client.query('SELECT * FROM public.nurse;'); 
      const nurses = Nurses.rows;

      const Rooms = await client.query('SELECT * FROM public.room ORDER BY roomnumber ASC ;'); 
      const rooms = Rooms.rows;
      client.release();
    
     res.render("../views/home",{title: "the available doctors is : ", doctors , nurses, rooms});
    } catch (error) {
      console.error(error);
      res.status(500).send('Error retrieving users');
    }
  });
  



module.exports =  app;