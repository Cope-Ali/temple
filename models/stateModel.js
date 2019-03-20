const { Pool } = require("pg");

const db_url = process.env.DATABASE_URL;

const pool = new Pool({connectionString: db_url});


function getAllStates(callback){
    //get all temple states from DB

    var results = {
        states: [
            {id:1, name:"California"},
            {id:2, name:"Utah"},
            {id:3, name:"Arizona"}
        ]
    }

    callback(null, results);
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
    setState: setState
};