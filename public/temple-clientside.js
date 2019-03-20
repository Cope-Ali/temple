function searchByState(){
console.log("Searching by state...");

var state = $("#state").val();
console.log("State: " + state);

$.get("/search", {state:state}, function(data){
    console.log("Back from the server with: ");
    console.log(data);

    for(var i=0; i < data.temples.length; i++){
        var temple = data.temples[i];
        $("#ulTemples").append("<li>" + temple.name + " " + temple.state + "</li>");
    }

})
}

function searchByRegion(){
    console.log("Searching by region...");

    var region = $("#region").val();
    console.log("Region: " + region);

$.get("/search", {region:region}, function(data){
    console.log("Back from the server with: ");
    console.log(data);
    for(var i=0; i < data.temples.length; i++){
        var temple = data.temples[i];
        $("#ulTemples").append("<li>" + temple.name + " " + temple.state + "</li>");
    }
})
    }
