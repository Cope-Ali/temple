const express = require("express");
const path = require("path");
require('dotenv').config();

const stateController = require("./controllers/stateController.js")
const regionController = require("./controllers/regionController.js")
const templeController = require("./controllers/templeController.js")

const PORT = process.env.PORT || 5000;

var app = express();

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json()); //support json encoded bodies
app.use(express.urlencoded({extended:true})); // support url encoded bodies


app.get("/states", stateController.getStateList);
app.get("/state", stateController.getStateById);
app.post("/state", stateController.postState);

app.get("/regions", regionController.getRegionList);
app.get("/region", regionController.getRegionById);
app.post("/region", regionController.postRegion);

app.get("/searchState", templeController.searchState);
app.get("/searchRegion", templeController.searchRegion);
app.get("/temples", templeController.getTempleList);
app.get('/temple', templeController.getTempleById);

app.listen(PORT, function(){
    console.log("Server listening on port " + PORT);
});