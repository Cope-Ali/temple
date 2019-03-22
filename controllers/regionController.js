const regionModel = require("../models/regionModel.js")

function getRegionList(req,res){
    //get the list of all regions with a temple
    //console.log("Getting all regions...");
    
    regionModel.getAllRegions(function(error, results){
        res.json(results);
    });
}

function getRegionById(req,res){
    //get a single region by id
    
    // /region?id=1
    var id = req.query.id;
    
   //console.log("Getting region with id:" + id);
    
    regionModel.getRegionById(id, function(error, results){
        res.json(results);
    });        
}

function postRegion(req,res){
    var region = req.body.region;
   // console.log("Setting users home region to: " + region);

    regionModel.setRegion(region, function(error, results){
        res.json(results);
    });    
}

module.exports = {
    getRegionList: getRegionList,
    getRegionById: getRegionById,
    postRegion: postRegion
};