function searchByState(){
//console.log("Searching by state...");
$("#ulTemples").empty();
//var state = $("#state").val();
var state = $("#stateSelect").val();
//console.log("State: " + state);

$.get("/searchState", {state:state}, function(data){
    
    //console.log("Back from the server with: ");
    //console.log(data);

    for(var i=0; i < data.rows.length; i++){
        var temple = data.rows[i];
        $("#ulTemples").append("<li>" + temple.name + " " + temple.state + "</li>");
        
    }

})
}

function searchByRegion(){
    //console.log("Searching by region...");
    $("#ulTemples").empty();

    var region = $("#regionSelect").val();
   // console.log("Region: " + region);

$.get("/searchRegion", {region:region}, function(data){
   // console.log("Back from the server with: ");
   // console.log(data);
    for(var i=0; i < data.rows.length; i++){
        var temple = data.rows[i];
        $("#ulTemples").append("<li>" + temple.name + " " + temple.state + "</li>");
    }
})
    }

    function stateList(){
        //console.log("Searching for all states");
    
    $.get("/states", function(data){
       // console.log("Back from the server with: ");
       // console.log(data);
        for(var i=0; i < data.rows.length; i++){
            var state = data.rows[i].state;
           // console.log(state);
            var option = new Option(state, state);
            $("#stateSelect").append($(option));
        }
    })
        }

    function regionList(){
       // console.log("Searching for all regions");
    
        $.get("/regions", function(data){
         //   console.log("Back from the server with: ");
         //   console.log(data);
            for(var i=0; i < data.rows.length; i++){
                var region = data.rows[i].name;
                var id = data.rows[i].region_id;

           //     console.log(region);
           //     console.log(id);
                var option = new Option(region, id);
                $("#regionSelect").append($(option));
                }   
    })
        }

        // function checkUser(){}
            function login() {
                var username = $("#username").val();
                var password = $("#password").val();
            
                var params = {
                    username: username,
                    password: password
                };
            
                $.post("/login", params, function(result) {
                    console.log(result);
                    if (result) {    
                        $("#status").text("Successfully logged in.");
                    } else {
                        $("#status").text("Error logging in.");
                    }
                });
            }

        

        function createAccount(){
            $("#acForm").empty();
            var f = document.createElement("form");
            f.setAttribute('method',"post");
            f.setAttribute('action',"/createUser");

            var username = document.createElement("input"); //input element, text
            username.setAttribute('type',"text");
            username.setAttribute('name',"username");
            username.setAttribute('placeholder',"Username");

            var password = document.createElement("input"); //input element, text
            password.setAttribute('type',"text");
            password.setAttribute('name',"password");
            password.setAttribute('placeholder',"Password");

            var flname = document.createElement("input"); //input element, text
            flname.setAttribute('type',"text");
            flname.setAttribute('name',"name");
            flname.setAttribute('placeholder',"Name");

            var address = document.createElement("input"); //input element, text
            address.setAttribute('type',"text");
            address.setAttribute('name',"address");
            address.setAttribute('placeholder',"Street Address");

            var city = document.createElement("input"); //input element, text
            city.setAttribute('type',"text");
            city.setAttribute('name',"city");
            city.setAttribute('placeholder',"City");

            var state = document.createElement("input"); //input element, text
            state.setAttribute('type',"text");
            state.setAttribute('name',"state");
            state.setAttribute('maxLength', "2");
            state.setAttribute('placeholder',"State Abbreviation");

            var zipcode = document.createElement("input"); //input element, text
            zipcode.setAttribute('type',"text");
            zipcode.setAttribute('name',"zipcode");
            zipcode.setAttribute('placeholder',"Zip Code");

            var s = document.createElement("input"); //input element, Submit button
            s.setAttribute('type',"submit");
            s.setAttribute('value',"Submit");

            f.appendChild(username);
            f.appendChild(password);
            f.appendChild(flname);
            f.appendChild(address);
            f.appendChild(city);
            f.appendChild(state);
            f.appendChild(zipcode);
            f.appendChild(s);

            $("#acForm").append($(f));
        }