function searchByState(){
//console.log("Searching by state...");
$("#ulTemples").empty();
$("#resultsDiv").empty();
var f = document.createElement("form");
f.setAttribute('method',"get");
// f.setAttribute('action',"/selectState");

//var state = $("#state").val();
var state = $("#stateSelect").val();
//console.log("State: " + state);

$.get("/searchState", {state:state}, function(data){
    
    //console.log("Back from the server with: ");
    //console.log(data);

    for(var i=0; i < data.rows.length; i++){
        var temple = data.rows[i];
        var templeListing = temple.name + ", " + temple.address + ", " + temple.city + ", " + temple.state;
        var cx = document.createElement("input"); //input element, text
        cx.setAttribute('type',"checkbox");
        cx.setAttribute('name', "temple");
        cx.setAttribute('value', templeListing);
        var l = document.createElement("label")
        l.setAttribute('for', temple.name);
        l.innerHTML = temple.name + " | " + temple.address + " | " + temple.city + " | " +  temple.state + " | ";
        var website = document.createElement('a');
        website.setAttribute('href', temple.website);
        website.innerHTML = "Website: " + temple.name;
        var b = document.createElement("br");
        f.appendChild(cx);
        f.appendChild(l);
        f.appendChild(website)
        f.appendChild(b);
    }
    var s = document.createElement("input"); //input element, Submit button
            s.setAttribute('type',"submit");
            s.setAttribute('value',"Submit");
            s.setAttribute('onClick', 'selectState()')
            f.appendChild(s);
    $("#resultsDiv").append($(f));

})
};

function searchByRegion(){
    //console.log("Searching by region...");
    $("#ulTemples").empty();
    $("#resultsDiv").empty();
    var f = document.createElement("form");
    f.setAttribute('method',"get");
    //f.setAttribute('action',"/selectState");

    var region = $("#regionSelect").val();
   // console.log("Region: " + region);

$.get("/searchRegion", {region:region}, function(data){
   // console.log("Back from the server with: ");
   // console.log(data);
    for(var i=0; i < data.rows.length; i++){
        var temple = data.rows[i];
        var templeListing = temple.name + ", " + temple.address + ", " + temple.city + ", " + temple.state;
        var cx = document.createElement("input"); //input element, text
        cx.setAttribute('type',"checkbox");
        cx.setAttribute('name', "temple");
        cx.setAttribute('value', templeListing);
        var l = document.createElement("label");
        l.setAttribute('for', temple.name);
        l.innerHTML = temple.name + " | " + temple.address + " | " + temple.city + " | " +  temple.state + " | ";
        var website = document.createElement('a');
        website.setAttribute('href', temple.website);
        website.innerHTML = "Website: " + temple.name;
        var b = document.createElement("br");
        f.appendChild(cx);
        f.appendChild(l);
        f.appendChild(website);
        f.appendChild(b);
    }
    var s = document.createElement("input"); //input element, Submit button
    s.setAttribute('type',"submit");
    s.setAttribute('value',"Submit");
    s.setAttribute('onClick', 'selectState()');
    f.appendChild(s);
    $("#resultsDiv").append($(f));
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
                        displayUser();
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

        function selectState(){
            console.log("Select states!");
            var items=document.getElementsByName('temple');
            var selectedItems=[];
            for(var i=0; i<items.length; i++){
                if(items[i].type=='checkbox' && items[i].checked==true)
                    selectedItems.push(items[i].value);
            }
            console.log(selectedItems);
            $("#resultsDiv").html("Identify any temples you have visited. <br>" + selectedItems);
                //create form
            var sortForm = document.createElement("form");
            var inBox = document.createElement("input");
            inBox.setAttribute("list", "templesToRank");
            sortForm.setAttribute('method',"post");
            //TO DO HANDLE /getRoute
            // sortForm.setAttribute('action',"/getRoute");
            sortForm.setAttribute('id',"sortForm");
                    //create datalist
            var dataList = document.createElement("datalist");
            dataList.setAttribute("id", "templesToRank");
            //dataList.empty();
            for(var i=0; i < selectedItems.length; i++){
                var option = document.createElement("option");
                var item = selectedItems[i];
                option.setAttribute("value", item);
                dataList.appendChild(option);
                console.log(item + "is number " + i);
            }
            sortForm.appendChild(dataList)

            for(var i=0; i < selectedItems.length; i++){
            var inBox = document.createElement("input");
            inBox.setAttribute("list", "templesToRank");
            inBox.setAttribute("id", "templesToRank");
            sortForm.appendChild(inBox);
            var b = document.createElement("br");
            sortForm.appendChild(b);
            }
            var s = document.createElement("input"); //input element, Submit button
            s.setAttribute('type',"submit");
            s.setAttribute('value',"Submit");
            s.setAttribute('id',"button");
            s.setAttribute('onclick', "callAPI()")
            sortForm.appendChild(s);
            $("#resultsDiv").append($(sortForm));

                } 


function displayUser(){
var name = "Guest";

$.get("/getUser", function(data){
     console.log("Back from the server with: ");
     console.log(data);
        if(data !='null'){
            name = data.rows[0].name;
        }
        else
            name = data;
     console.log(name);
        if(name == 'null'){
            message = "<h2>Stats for Guest </h2><br> Please log in to track the temples you have visited";
        }
        else{
             var message = "<h2>Stats for " + name +"</h2> <br> You have visitied the following temples: <br>";
            }
     $("#userStats").html(message);
 })

}
