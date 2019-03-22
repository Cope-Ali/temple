function searchByState(){
console.log("Searching by state...");
$("#ulTemples").empty();
//var state = $("#state").val();
var state = $("#stateSelect").val();
console.log("State: " + state);

$.get("/searchState", {state:state}, function(data){
    
    console.log("Back from the server with: ");
    console.log(data);

    for(var i=0; i < data.rows.length; i++){
        var temple = data.rows[i];
        $("#ulTemples").append("<li>" + temple.name + " " + temple.state + "</li>");
        
    }

})
}

function searchByRegion(){
    console.log("Searching by region...");
    $("#ulTemples").empty();

    var region = $("#region").val();
    console.log("Region: " + region);

$.get("/searchRegion", {region:region}, function(data){
    console.log("Back from the server with: ");
    console.log(data);
    for(var i=0; i < data.rows.length; i++){
        var temple = data.rows[i];
        $("#ulTemples").append("<li>" + temple.name + " " + temple.state + "</li>");
    }
})
    }

    function stateList(){
        console.log("Searching for all states");
    
    $.get("/states", function(data){
        console.log("Back from the server with: ");
        console.log(data);
        for(var i=0; i < data.rows.length; i++){
            var state = data.rows[i].state;
            console.log(state);
            var option = new Option(state, state);
            $("#stateSelect").append($(option));
        }
    })
        }