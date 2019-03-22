const { Pool } = require("pg");

const db_url = process.env.DATABASE_URL;

const pool = new Pool({connectionString: db_url});

function getAllRegions(callback){
    //get all temple states from DB
    var sql = "SELECT * FROM regions";
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

function getRegionById(id, callback){
    //get state from database that matches that id

    var results = {id:1, name:"West"}
    
    callback(null, results);
}

function setRegion(state, callback){

    var results = {success:true};

    callback(null, results);
}

module.exports = {
    getAllRegions: getAllRegions,
    getRegionById: getRegionById,
    setRegion: setRegion
};