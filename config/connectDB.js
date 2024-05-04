const Pool = require ('pg').Pool;

//connected to database


 const pool = new Pool({
    host: "localhost",
    database: "hospital",
    user: "postgres",
    password: "modar5",
    port: 5432,
});

module.exports = pool;
    try {

         pool.connect().then(() => {
            console.log("connected to database");
        })
      
    }
    catch(error){
        console.log("connecting faild to database" , error);
    }


