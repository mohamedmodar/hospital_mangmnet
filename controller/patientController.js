
const pool = require("../config/connectDB");
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

   
 pool.query(`INSERT INTO public.patient(
    patientid, name, address, disease, treatment_details, doctorid, roomnumber, nurseid, billid, wardboyid)
    VALUES (${PatientID},'${name}', '${address}','${Disease}', '${Treatment_details}', ${DoctorID}, ${RoomNumber}, ${NurseID}, ${BillID}, ${WardBoyID});`, (err,res)=>{
    if(!err){
        console.log('Patient added successfully!');
    } else {
        console.error(err.message);

    }

    pool.end;

});
res.redirect("/result"); 
};

module.exports.getUsersCtrl= async(req,res)=>{ 
    try {
      const client = await pool.connect();

      const Patients = await client.query('SELECT * FROM public.patient;'); 
      const patients = Patients.rows;

      const Doctors = await client.query('SELECT * FROM public.doctor;'); 
      const doctors = Doctors.rows;

      const Nurses = await client.query('SELECT * FROM public.nurse;'); 
      const nurses = Nurses.rows;

      const Rooms = await client.query('SELECT * FROM public.room ORDER BY roomnumber ASC ;'); 
      const rooms = Rooms.rows;
      client.release();
    
     res.render("../views/home",{title: "the available doctors is : ", doctors , nurses, rooms, patients});
    } catch (error) {
      console.error(error);
      res.status(500).send('Error retrieving users');
    }
   
   
   };
