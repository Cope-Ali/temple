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

function checkLogin(username, callback){


   
    var sql = "SELECT password FROM users WHERE username=$1::text";
    var params=[username];
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

function getUser(username, callback){
var sql = "SELECT user_id, name FROM users WHERE username=$1::text";
var params=[username];
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

function visitedTemples(username, callback){
    var sql = "SELECT temples.temple_id, temples.name, temples.address, temples.city, temples.state, temples.website, visited.user_id, visited.temple_id, users.user_id FROM temples INNER JOIN visited ON visited.temple_id = temples.temple_id INNER JOIN users ON users.user_id = visited.user_id WHERE users.username=$1::text";
    var params=[username];
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
    createUser: createUser,
    checkLogin: checkLogin,
    getUser: getUser,
    visitedTemples: visitedTemples
};