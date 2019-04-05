
function geocode(address, req, res){
    googleMapsClient.geocode({address}, function(err, response){
        if (!err){
            console.log(response.json.results);
        }
    });
}

module.exports = {
    geocode: geocode
};


