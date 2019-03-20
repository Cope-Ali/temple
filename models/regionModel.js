const { Pool } = require("pg");

const db_url = process.env.DATABASE_URL;

const pool = new Pool({connectionString: db_url});

function getAllRegions(callback){
    //get all temple states from DB

    var results = {
        states: [
            {id:1, name:"West"},
            {id:2, name:"Mid-West"},
            {id:3, name:"East"},
            {id:4, name:"South"}
        ]
    }

    callback(null, results);
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