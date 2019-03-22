const templeModel = require("../models/templeModel.js")

function searchState(req,res){
    //search for temples by state 

    var state = req.query.state; //TODO comes from query
    
    //console.log("State: ");
    //console.log(state);
    
    templeModel.searchByState(state, function(error, results) {
       // console.log("Getting temples by state with id:" + state);
        res.json(results);
    });
   
}

function searchRegion(req,res){
    //search for temples by region
   
    var region = req.query.region; //TODO comes from query
    //console.log("Region: ");
    //console.log(region);
    
    
    templeModel.searchByRegion(region, function(error, results){
        //console.log("Getting temples by region with id:" + region);
        res.json(results);        
    });
    }

function getTempleList(req,res){
    //show all temples

   // console.log("Getting all temples...");

    templeModel.getTempleList(function(error, results){
        res.json(results);
    })
}

function getTempleById(req,res){
    //get temple by id
    
    var id = 1; //TODO get id from query
    
    //console.log("Getting temple with id:" + id);

    templeModel.getTempleById(id, function(error, results){
        res.json(results);
    })
}

module.exports = {
    searchState: searchState,
    searchRegion: searchRegion,
    getTempleList: getTempleList,
    getTempleById: getTempleById
};
