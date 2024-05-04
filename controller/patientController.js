/*
console.log("this code");

 */
//const {client, connectedToDb} = require("../config/connectDB");
var { Client }  = require ('pg');

//connected to database
var client = new Client({
    host: "localhost",
    database: "hospital",
    user: "postgres",
    password: "modar5"
});


    try {

         client.connect();
      
    }
    catch(error){
        console.log("connecting faild to database" , error);
    }

/**--------------------------
 * @desc to insert new patient
 * @router /form
 * @method post
 * @access public
 ---------------------------*/
 


 module.exports.patientCtrl=(req,res)=>{
  var  name = req.body.name;
  var   PatientID = req.body.PatientID;
  var address = req.body.address;
  var  Disease = req.body.Disease;
  var   Treatment_details = req.body.Treatment_details;
  var  DoctorID = req.body.DoctorID;
  var  RoomNumber = req.body.RoomNumber;
  var   NurseID = req.body.NurseID;
  var   BillID = req.body.BillID;
  var   WardBoyID = req.body.WardBoyID;

   


 client.query(`INSERT INTO public.patient(
    patientid, name, address, disease, treatment_details, doctorid, roomnumber, nurseid, billid, wardboyid)
    VALUES (${PatientID},'${name}', '${address}','${Disease}', '${Treatment_details}', ${DoctorID}, ${RoomNumber}, ${NurseID}, ${BillID}, ${WardBoyID});`, (err,res)=>{
    if(!err){
        console.log(res.rows);
        console.log(PatientID);

    } else {
        console.log(err.message);
    }

    client.end;

});

res.redirect("/result"); 
}
