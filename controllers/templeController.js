const templeModel = require("../models/templeModel.js")

function search(req,res){
    //search for temples by state or region

    var state = req.query.state; //TODO comes from query
    var region = req.query.region; //TODO comes from query
    console.log("State: ");
    console.log(state);
    console.log("Region: ");
    console.log(region);
    
    //TODO check if state id or if region id and call appropriate function
    if(state){
    templeModel.searchByState(state, function(error, results) {
        console.log("Getting temples by state with id:" + state);
        res.json(results);
    });
    }
    else if (region){
    templeModel.searchByRegion(region, function(error, results){
        console.log("Getting temples by region with id:" + region);
        res.json(results);        
    });
    }

    else
    res.json({result:"error"})
}

function getTempleList(req,res){
    //show all temples

    console.log("Getting all temples...");

    templeModel.getTempleList(function(error, results){
        res.json(results);
    })
}

function getTempleById(req,res){
    //get temple by id
    
    var id = 1; //TODO get id from query
    
    console.log("Getting temple with id:" + id);

    templeModel.getTempleById(id, function(error, results){
        res.json(results);
    })
}

module.exports = {
    search: search,
    getTempleList: getTempleList,
    getTempleById: getTempleById
};
