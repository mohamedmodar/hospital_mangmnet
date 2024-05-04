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





//this is comment to just edit the file\

/*

client.query(`SELECT doctorid FROM public.doctor;`, (err,res)=>{
    if(!err){
        // console.log(res.rows);
        
       var doctorIds = res.rows.map(row => row.doctorid); // Extract doctor IDs
   
    console.log("the avaialable doctors id: " + doctorIds);
    } else {
        console.log(err.message);
    }
    client.end;

})


client.query(`select nurseid from public.nurse;`, (err,res)=>{
    if(!err){
        // console.log(res.rows);
        
       const nurseid = res.rows.map(row => row.nurseid); // Extract doctor IDs
   
    console.log("the avaialable nurses id: " + nurseid);
    } else {
        console.log(err.message);
    }
    client.end;
})

client.query(`select wardboyid from public.wardboy;`, (err,res)=>{
    if(!err){
        // console.log(res.rows);
        
       const wardboyid = res.rows.map(row => row.wardboyid); // Extract doctor IDs
   
    console.log("the avaialable wardboy id: " + wardboyid);
    } else {
        console.log(err.message);
    }
    client.end;
})

client.query(`select billid from public.bill;`, (err,res)=>{
    if(!err){
        // console.log(res.rows);
        
       const billid = res.rows.map(row => row.billid); // Extract doctor IDs
   
    console.log("the avaialable bill id: " + billid);
    } else {
        console.log(err.message);
    }
    client.end;
})
	





//  res.sendFile(__dirname + "/public/index.html")



/* app.get("/", (req,res)=>{
    res.render("index")
})*/ 





