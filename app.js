const path = require("path");
const express = require("express");
require("dotenv").config();
const PORT = process.env.PORT || 4000 ;
const router = require("express").Router();
require ('dotenv').config();
const { Client }  = require ('pg');

/*
const {
POSTGRES_HOST,
POSTGRES_DB,
POSTGRES_USER,
POSTGRES_PASSWORD
} = process.env */

//init app
const app = express();

//middleWare
app.use(express.urlencoded({extended: true}));
app.use(express.json());

express.static("public")
//app.set("views", path.join(__dirname,"views"));
//app.set("view engine","ejs");

//connected to database
const client = new Client({
    host: "localhost",
    database: "hospital",
    user: "postgres",
    password: "modar5"
});

client.connect().then(() => {
    console.log("connected to database");
})
.catch((e) => {
console.log(e);
});

var PatientID ,
name ,
address ,
Disease ,
Treatment_details ,
DoctorID ,
RoomNumber ,
NurseID ,
BillID ,
WardBoyID ;

app.post("/form",(req,res)=>{
 
    name = req.body.name;
    PatientID = req.body.PatientID;
    address = req.body.address;
    Disease = req.body.Disease;
    Treatment_details = req.body.Treatment_details;
    DoctorID = req.body.DoctorID;
    RoomNumber = req.body.RoomNumber;
    NurseID = req.body.NurseID;
    BillID = req.body.BillID;
    WardBoyID = req.body.WardBoyID;

console.log(PatientID);
 client.query(`INSERT INTO public.patient(
	patientid, name, address, disease, treatment_details, doctorid, roomnumber, nurseid, billid, wardboyid)
	VALUES (${PatientID},'${name}', '${address}','${Disease}', null, ${DoctorID}, ${RoomNumber}, ${NurseID}, ${BillID}, ${WardBoyID});`, (err,res)=>{
    if(!err){
        console.log(res.rows);
    } else {
        console.log(err.message);
    }
    client.end;
});


});
var doctorIds;




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


app.listen(PORT, () => {
    console.log(`server is runing in ${process.env.NODE_ENV} up and runing on ${PORT}`)
});
