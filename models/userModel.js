const { Pool } = require("pg");

const db_url = process.env.DATABASE_URL;

const pool = new Pool({connectionString: db_url});

function createUser(username, password, name, address, city, state, zip, callback){
    //create new user in db

    var sql = "INSERT INTO users(username, password, name, home_address, home_city, home_state, home_zipcode, home_stateId) VALUES ($1::text, $2::text, $3::text, $4::text, $5::text, (SELECT name FROM states WHERE abbrev=$6::text), $7::text, (SELECT state_id from states WHERE abbrev=$6))";
    var params=[username, password, name, address, city, state, zip];
    console.log("Params are : ");
    console.log(params);

    pool.query(sql, params, function(err, db_results){
        if(err){
            throw err;
        } 
        else {
            console.log("back from database with: ");
            console.log(db_results);
    
            callback(null, db_results);
        }
    });

}

module.exports = {
    createUser: createUser
};