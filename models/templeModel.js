const { Pool } = require("pg");

const db_url = process.env.DATABASE_URL;

console.log("DB URL: " + db_url);

const pool = new Pool({connectionString: db_url});

function searchByState(state, callback){
    //get all temples matching state id from database
    console.log("Searching the DB for state: " + state)

    var sql = "SELECT name, address, city, state, website FROM temples";

    pool.query(sql, function(err, db_results){
        if(err){
            throw err;
        } 
        else {
            console.log("back from database with: ");
            console.log(db_results);

            var results = {
                temples: [
                    {id:1, name:"Oakland", state:state},
                    {id:2, name:"Sacramento", state:state},
                    {id:3, name:"Fresno", state:state},
                    {id:4, name:"Los Angeles", state:state},
                    {id:5, name:"Newport Beach", state:state},
                    {id:6, name:"San Diego", state: "California"},
                    {id:7, name:"Redlands", state: "California"}
                ]};
                callback(null, db_results);
        }
    });
}

function searchByRegion(region, callback){
    //get all temples matching region id from database
    console.log("Searching the DB for region: " + region)
    var results = {
        temples: [
            {id:1, name:"Oakland", state: "California", region:region},
            {id:2, name:"Sacramento", state: "California", region:region},
            {id:3, name:"Fresno", state: "California", region:region},
            {id:4, name:"Los Angeles", state: "California", region:region},
            {id:5, name:"Newport Beach", state: "California", region:region},
            {id:6, name:"San Diego", state: "California", region:region},
            {id:7, name:"Redlands", state: "California", region:region},
            {id:8, name:"Medford", state: "Oregon", region:region},
            {id:9, name:"Portland", state: "Oregon", region:region},
            {id:10, name:"Seattle", state: "Washington", region:region}
        ]
    }

    callback(null, results);

}

function getTempleList(callback){
// get all temples in database

var results = {
    temples: [
        {id:1, name:"Oakland", state: "California"},
        {id:2, name:"Sacramento", state: "California"},
        {id:3, name:"Fresno", state: "California"},
        {id:4, name:"Los Angeles", state: "California"},
        {id:5, name:"Newport Beach", state: "California"},
        {id:6, name:"San Diego", state: "California"},
        {id:7, name:"Redlands", state: "California"},
        {id:8, name:"Medford", state: "Oregon"},
        {id:9, name:"Portland", state: "Oregon"},
        {id:10, name:"Seattle", state: "Washington"},
        {id:11, name:"Salt Lake", state: "Utah"},
        {id:12, name:"Bountiful", state: "Utah"},
        {id:13, name:"Logan", state: "Utah"},
        {id:14, name:"Provo City Center", state: "Utah"}
    ]
}

callback(null, results);

}

function getTempleById(id, callback){
//get temple from database that matches that id

var results = {id:1, name:"Oakland", state: "California"};

callback(null, results);

}

module.exports = {
    searchByRegion: searchByRegion,
    searchByState: searchByState,
    getTempleList: getTempleList,
    getTempleById: getTempleById
};