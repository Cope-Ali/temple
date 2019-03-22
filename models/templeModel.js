const { Pool } = require("pg");

const db_url = process.env.DATABASE_URL;

const pool = new Pool({connectionString: db_url});

function searchByState(state, callback){
    //get all temples matching state id from database
    console.log("Searching the DB for state: " + state)

    var sql = "SELECT name, address, city, state, website FROM temples WHERE state=$1::text";
    var params=[state];
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

function searchByRegion(region, callback){
    //get all temples matching region id from database
    console.log("Searching the DB for region: " + region)
    var sql = "SELECT name, address, city, state, website FROM temples WHERE region_id=$1::int";
    var params=[region];
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

function getTempleList(callback){
// get all temples in database
var sql = "SELECT name, address, city, state, website FROM temples";
pool.query(sql, function(err, db_results){
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

function getTempleById(id, callback){
//get temple from database that matches that id
var sql = "SELECT name, address, city, state, website FROM temples WHERE temple_id=$1::int";
var params=[id];
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
    searchByRegion: searchByRegion,
    searchByState: searchByState,
    getTempleList: getTempleList,
    getTempleById: getTempleById
};