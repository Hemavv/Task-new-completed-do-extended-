var modal = document.getElementById('myModal');
var facebook_btn = document.getElementById("myBtn");
facebook_btn.onclick = function() {
    modal.style.display = "block";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


//Getting API Key//
var APPID = "9255cdccfab1422f15ed5016615fc92b";
var temp;
var loc;
var icon;
var humidity;
var lat;
var pressure;
var main;

function update(weather) {
    icon.src = "codes/" + weather.code + ".png";
    humidity.innerHTML = weather.humidity;
    loc.innerHTML = weather.location;
    temp.innerHTML = weather.temp;
    lat.innerHTML = weather.lat;
    pressure.innerHTML = weather.pressure;
    main.innerHTML = weather.main;
}

facebook_btn.onclick = function(myfunc) {

    temp = document.getElementById("temperature");
    loc = document.getElementById("location");
    icon = document.getElementById("icon");
    humidity = document.getElementById("humidity");
    lat = document.getElementById("lat");
    pressure = document.getElementById("pressure");

    main = document.getElementById("main");
    /* NEW */
    if (navigator.geolocation) {
        var showPosition = function(position) {
            updateByGeo(position.coords.latitude, position.coords.longitude);
        }
        navigator.geolocation.getCurrentPosition(showPosition);
        modal.style.display = "block";
    } else {
        /* var zip = window.prompt("Could not discover your location. What is your zip code?");
        updateByZip(zip); */
        modal.style.display = "none";
    }

}

/* NEW */

function updateByGeo(lat, lon) {
    var url = "http://api.openweathermap.org/data/2.5/weather?" +
        "lat=" + lat +
        "&lon=" + lon +
        "&APPID=" + APPID;
    sendRequest(url);
}

function updateByZip(zip) {
    var url = "http://api.openweathermap.org/data/2.5/weather?" +
        "zip=" + zip +
        "&APPID=" + APPID;
    sendRequest(url);
}


function sendRequest(url) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var data = JSON.parse(xmlhttp.responseText);
            var weather = {};
            weather.code = data.weather[0].id;
            weather.humidity = data.main.humidity;
            weather.lat = data.coord.lat;
            weather.pressure = (data.main.pressure);
            weather.main = data.weather[0].main;
            weather.location = data.name;
            weather.temp = K2C(data.main.temp);
            update(weather);
        }
    };

    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}

function K2F(k) {
    return Math.round(k * (9 / 5) - 459.67);
}

function K2C(k) {
    return Math.round(k - 273.15);
}
//Validations for FirstName//
function checkforfirstname() {
    var a = document.getElementById("firstname").value;
    var b = document.getElementById("division").value;
    if (a == "") {
        document.getElementById('username').innerHTML = "Field Empty";
        document.getElementById('division').innerHTML = "<b>First_Name:</b>" + "Field Empty";
        document.getElementById('mydivheader').style.display = "block";


        return false;

    } else if ((a.length < 8) || (a.length > 26)) {
        document.getElementById('username').innerHTML = "**Name should have min 8 characters and max 26 characters**";
        document.getElementById('firstname').style.borderColor = "red";
        document.getElementById('division').innerHTML = "<b>First_Name:</b>" + "Min 8 and max 26 characters allowed";
        document.getElementById('mydivheader').style.display = "block";
        return false;

    } else if (!isNaN(a)) {
        document.getElementById('username').innerHTML = "**Only characters are allowed**";
        document.getElementById('firstname').style.borderColor = "red";
        document.getElementById('division').innerHTML = "<b>First_Name:</b>" + "Only characters are allowed in First Name";
        document.getElementById('mydivheader').style.display = "block";
        return false;
    } else {
        document.getElementById('username').innerHTML = "";
        document.getElementById('firstname').style.borderColor = "white";
        document.getElementById('division').innerHTML = "";
        document.getElementById('mydivheader').style.display = "block";
    }
}
//Validations for LastName//
function checkforlastname() {
    var a = document.getElementById("lastname").value;
    var b = document.getElementById("division1").value;
    if (a == "") {
        document.getElementById('username1').innerHTML = "Field Empty";
        document.getElementById('division1').style.display = "<b>Last_Name:</b>" + "Field Empty";
        document.getElementById('mydivheader').style.display = "block";
        return false;
    } else if ((a.length < 8) || (a.length > 26)) {
        document.getElementById('username1').innerHTML = "**Name should have min 8 characters and max 26 characters**";
        document.getElementById('division1').innerHTML = "<b>Last_Name:</b>" + "Name should have min 8 characters and max 26 characters";
        document.getElementById('lastname').style.borderColor = "red";
        document.getElementById('mydivheader').style.display = "block";
        return false;
    } else if (!isNaN(a)) {
        document.getElementById('username1').innerHTML = "**Only characters are allowed**";
        document.getElementById('division1').innerHTML = "<b>Last_Name:</b>" + "Only characters are allowed";
        document.getElementById('lastname').style.borderColor = "red";
        document.getElementById('mydivheader').style.display = "block";
    } else {
        document.getElementById('username1').innerHTML = "";
        document.getElementById('lastname').style.borderColor = "white";
        document.getElementById('division1').innerHTML = "";
        document.getElementById('mydivheader').style.display = "block";
    }
}

function checkdate() {
    var a = document.getElementById("dob").value;
    var b = document.getElementById("division3").value;
    var pattern = /^\d{1,2}\/\d{1,2}\/\d{4}$/;
    var pattern1 = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;
    if (a == "") {
        document.getElementById("checkdate").innerHTML = "Field Empty ";
        document.getElementById('division3').innerHTML = "<b>Date:</b>" + "Field Empty";
        document.getElementById('mydivheader').style.display = "block";
    } else if (!pattern1.test(a)) {
        document.getElementById("checkdate").innerHTML = "Give dd/mm/yyyy format";
        document.getElementById('division3').innerHTML = " Invalid Format";
        document.getElementById('mydivheader').style.display = "block";
    } else {
        document.getElementById("checkdate").innerHTML = "";
        document.getElementById('division3').innerHTML = "";
        document.getElementById('mydivheader').style.display = "none";
    }
}



function checkage() {
    var a = document.getElementById("age").value;
    var b = document.getElementById("division2").value;
    if (a == "") {
        document.getElementById("checkage").innerHTML = "Field Empty";
        document.getElementById('division2').innerHTML = "<b>Age:</b>" + "Field Empty";
        document.getElementById('mydivheader').style.display = "block";

    } else {
        document.getElementById("checkage").innerHTML = "";
        document.getElementById('division2').innerHTML = "";
        document.getElementById('mydivheader').style.display = "block";
    }
}

function checkgoal() {
    var a = document.getElementById("goal").value;
    var b = document.getElementById("division6").value;
    if (a == "") {
        document.getElementById("checkgoal").innerHTML = "Field Empty";
        document.getElementById('division6').innerHTML = "<b>Goals:</b>" + "Field Empty";
        document.getElementById('mydivheader').style.display = "block";
    } else {
        document.getElementById("checkgoal").innerHTML = "";
        document.getElementById('division6').innerHTML = "";
        document.getElementById('mydivheader').style.display = "block";
    }
}

function checkhob() {
    var a = document.getElementById("hob").value;
    var b = document.getElementById("division7").value;
    if (a == "") {
        document.getElementById("checkhob").innerHTML = "Field Empty";
        document.getElementById('division7').innerHTML = "<b>Hobbies:</b>" + "Field Empty";
        document.getElementById('mydivheader').style.display = "block";
    } else {
        document.getElementById("checkhob").innerHTML = "";
        document.getElementById('division7').innerHTML = "";
        document.getElementById('mydivheader').style.display = "block";
    }
}


//Email and Confirm Email Validation//
function confirmmail() {
    var a = document.getElementById("email").value;
    var b = document.getElementById("crosscheck").value;
    var c = document.getElementById("division5").value;

    if (b == "") {
        document.getElementById('con').innerHTML = "Field Empty";
        document.getElementById('division5').innerHTML = "<b>Confirm mail:</b>" + "Field Empty";
        document.getElementById('mydivheader').style.display = "Field Empty";


    } else if (a != b) {
        document.getElementById('con').innerHTML = "**Email MisMatch**";
        document.getElementById('crosscheck').style.borderColor = "red";
        document.getElementById('division5').innerHTML = "<b>Confirm mail:</b>" + "Email Mismatch";
        document.getElementById('mydivheader').style.display = "block";
    } else {
        document.getElementById('con').innerHTML = "";
        document.getElementById('crosscheck').style.borderColor = "white";
        document.getElementById('division5').innerHTML = "";
        document.getElementById('mydivheader').style.display = "block";

    }
}
//Email Validation//
function validateemail() {
    var a = document.getElementById("email").value;
    var b = document.getElementById("division4").value;

    if (a == "") {
        document.getElementById('mails').innerHTML = "Field Empty";
        document.getElementById('division4').innerHTML = "<b>Email:</b>" + "Field Empty";
        document.getElementById('mydivheader').style.display = "Field Empty";
    } else if (a.indexOf('@') <= 0) {
        document.getElementById('mails').innerHTML = "**Invalid email id**";
        document.getElementById('email').style.borderColor = "red";
        document.getElementById('division4').innerHTML = "<b>Email:</b>" + "Invalid email id";
        document.getElementById('mydivheader').style.display = "block";
    } else if ((a.charAt(a.length - 4) != '.') && (a.charAt(a.length - 3) != '.')) {
        document.getElementById('mails').innerHTML = "**Give Proper format**";
        document.getElementById('email').style.borderColor = "red";
        document.getElementById('division4').innerHTML = "<b>Email:</b>" + "Give Proper Format";
        document.getElementById('mydivheader').style.display = "block";
    } else {
        document.getElementById('mails').innerHTML = "";
        document.getElementById('email').style.borderColor = "white";
        document.getElementById('division4').innerHTML = "";
        document.getElementById('mydivheader').style.display = "block";
    }
}



function button1() {
    location.reload();
    localStorage.clear();
}

function button2() {
    var asd;
    asd = new FormData(document.forms.myform);
    for (let value of asd.values()) {

        var a = document.getElementById("firstname").value;
        var b = document.getElementById("lastname").value;
        var c = document.getElementById("age").value;
        var d = document.getElementById("dob").value;
        var e = document.getElementById("email").value;
        var f = document.getElementById("crosscheck").value;
        var g = document.getElementById("goal").value;
        var h = document.getElementById("hob").value;

        if (value != "") {
            myObj = { "FirstName": document.getElementById("firstname").value, "LastName": document.getElementById("lastname").value, "age": document.getElementById("age").value, "dob": document.getElementById("dob").value, "email_id": document.getElementById("email").value, "Life_Goals": document.getElementById("goal").value, "Hobby": document.getElementById("hob").value }
            myJSON = JSON.stringify(myObj);
            localStorage.setItem("testJSON", myJSON);
            text = localStorage.getItem("testJSON");
            obj = JSON.parse(text);
            console.log(document.getElementById("firstname").value);
            document.getElementById("firstname").value === obj.FirstName;

        } else if ((a != true) || (b != true) || (c != true) || (d != true) || (e != true) || (f != true) || (g != true) || (h != true) || (a == "") || (b == "") || (c == "") || (d == "") || (e == "") || (f == "") || (g == "") || (h == "")) {

            document.getElementById("mydiv").style.display = "block";
            document.getElementById("check1").innerText = "Please fill your First_Name";
            document.getElementById("check2").innerText = "Please fill your Last_Name";
            document.getElementById("check3").innerText = "Please fill your Age";
            document.getElementById("check4").innerText = "Please fill your Date of Birth";
            document.getElementById("check5").innerText = "Please fill your email ";
            document.getElementById("check6").innerText = "Please fill your Life Goals";
            document.getElementById("check7").innerText = "Please fill your Hobbies";
        } else {
            document.getElementById("mydiv").style.display = "none";
            document.getElementById("check1").style.display = "none";
            document.getElementById("check2").style.display = "none";
            document.getElementById("check3").style.display = "none";
            document.getElementById("check4").style.display = "none";
            document.getElementById("check5").style.display = "none";
            document.getElementById("check6").style.display = "none";
            document.getElementById("check7").style.display = "none";
        }
    }
}
var a = document.getElementById("close");
var b = document.getElementById("mydiv")
a.onclick = function() {
        b.style.display = "none";
    }
    //Make the DIV element draggagle:
dragElement(document.getElementById(("mydiv")));

function dragElement(elmnt) {
    var pos1 = 0,
        pos2 = 0,
        pos3 = 0,
        pos4 = 0;
    if (document.getElementById(elmnt.id + "header")) {
        /* if present, the header is where you move the DIV from:*/
        document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    } else {
        /* otherwise, move the DIV from anywhere inside the DIV:*/
        elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        e = e || window.event;
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        /* stop moving when mouse button is released:*/
        document.onmouseup = null;
        document.onmousemove = null;
    }
}