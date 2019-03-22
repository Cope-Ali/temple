const stateModel = require("../models/stateModel.js")

function getStateList(req,res){
    //get the list of all states with a temple
    console.log("Getting all states...");
    
    stateModel.getAllStates(function(error, results){
        res.json(results);
    });
}

function getStateById(id, req,res){
    //get a single state by id
    
    // /state?id=1
    var id = req.query.id;
    
    // /state/xxxxx
    //var id = req.params.id;
    
    console.log("Getting state with id:" + id);
    
    stateModel.getStateById(id, function(error, results){
        res.json(results);
    });        
}

function postState(req,res){
    var state = req.body.state;
    console.log("Setting users home state to: " + state);

    stateModel.setState(state, function(error, results){
        
        res.json(results);
    });    
}

function getStateId(abbrev, req, res){
    //get a single state id by abbrev

    
    console.log("Getting state using abbrev:" + abbrev);
    
    stateModel.stateID(abbrev, function(error, results){
        console.log(results);
        res.json(results);
        res=results;
    });        
}

module.exports = {
    getStateList: getStateList,
    getStateById: getStateById,
    postState: postState,
    getStateId: getStateId
};