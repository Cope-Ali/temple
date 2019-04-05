const userModel = require("../models/userModel.js");
const bcrypt = require('bcrypt');

function create (req,res){
    //create a new user
    console.log("Creating a new user");
    console.log(req.body);
    console.log(req);
    var username = req.body.username;
    var password = req.body.password;
    var name = req.body.name;
    var address = req.body.address;
    var city = req.body.city;
    var state = req.body.state;
    var zipcode = req.body.zipcode;

    console.log(username);
    console.log(password);
    console.log(name);
    console.log(address);
    console.log(city);
    console.log(state);
    console.log(zipcode);

    var hashed = bcrypt.hashSync(password, 10);

    userModel.createUser(username, hashed, name, address, city, state, zipcode, function(error, results){

        //res.json(results);
        console.log(results.rowCount);
        if (results.rowCount > 0)
        {
            //$("#acForm").empty();
            //var p = document.createElement("p");
            //p.innerText = "User account created";
            //$("#acForm").append($(p));
            res.redirect("temple.html");
        }
    })

}

function login(req,res){
    //query database to compare provided login information and existing database
    console.log("checking login credentials");
    console.log(req.body);
    console.log(req.body.username);
    console.log(req.body.password);
    var result = false;
    var username = req.body.username;
    var password = req.body.password;
    userModel.checkLogin(username, function(error, results){
        //results = json(results);
        console.log(results);
        var dbPassword = results.rows[0].password;
        console.log(dbPassword);
        console.log(password);
        var isMatch = false;
        var match = bcrypt.compareSync(password, dbPassword);
        console.log (match);
        if(match){
            req.session.user['username'] = username;
        }
        console.log("sending results from the controller");
        res.send(match);
    })
     
}

function getUser( req, res){
    if(req.session.user['username']){
        var username = req.session.user['username'];
        console.log(username);

        userModel.getUser(username, function(error, results){
            console.log("getting user information from the database");
            res.json(results);
        });
    }
    else
    res.send('null');

}

module.exports = {
    create: create,
    login: login,
    getUser: getUser
}