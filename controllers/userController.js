const userModel = require("../models/userModel.js")

function create (req,res){
    //create a new user
    console.log("Creating a new user");
    console.log(req.body);
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

    userModel.createUser(username, password, name, address, city, state, zipcode, function(error, results){

        res.json(results);
        console.log(results.rowCount);
        if (results.rowCount > 0)
        {
            //res.sendFile(path.join(__dirname + '../public/temple.html'));
            
        }
    })

}

module.exports = {
    create: create
}