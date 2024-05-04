var { Client }  = require ('pg');

//connected to database
module.exports = async ()=>{

var client = new Client({
    host: "localhost",
    database: "hospital",
    user: "postgres",
    password: "modar5"
});


    try {

        await client.connect().then(() => {
            console.log("connected to database");
        })
      
    }
    catch(error){
        console.log("connecting faild to database" , error);
    }
}

