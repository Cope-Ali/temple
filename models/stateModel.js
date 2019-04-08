const { Pool } = require("pg");

const db_url = process.env.DATABASE_URL;

const pool = new Pool({connectionString: db_url});


function getAllStates(callback){
    //get all temple states from DB
    var sql = "SELECT DISTINCT state FROM temples ORDER BY state ASC";
    pool.query(sql, function(err, db_results){
        if(err){
            throw err;
        } 
        else {
            //console.log("back from database with: ");
            //console.log(db_results);

            callback(null, db_results);
        }
    });
}

function stateID(abbrev, callback){
    //get a specific state id using the state abbrev
    console.log("checking db with abbrev" + abbrev);
    var sql = "SELECT state_id FROM states WHERE abbrev=$1::text";
    var params = [abbrev];
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

function getStateById(id, callback){
    //get state from database that matches that id

    var results = {id:1, name:"New York"}
    
    callback(null, results);
}

function setState(state, callback){

    var results = {success:true};

    callback(null, results);
}

module.exports = {
    getAllStates: getAllStates,
    getStateById: getStateById,
    setState: setState,
    stateID: stateID
};