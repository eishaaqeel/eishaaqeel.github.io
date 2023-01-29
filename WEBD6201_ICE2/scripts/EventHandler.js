/*
  Name: Eisha Aqeel
  Date: 1/26/2023
  Description: Java Script file for the WEBD6201 Demo's event handlers
*/

var welcomeLabel = document.getElementById("welcome");
var displayEvent = document.getElementById("displayEvent");

var userDisplay = document.getElementById("userDisplay");
var passDisplay = document.getElementById("passDisplay");

//The below 3 events were from in class exersise 2
welcomeLabel.addEventListener("dblclick", function () {
    console.log("Event: dblclick");
    displayEvent.textContent = "Event: dblclick";
});
welcomeLabel.addEventListener("mouseover", function () {
    console.log("Event: mouseover");
    displayEvent.textContent = "Event: mouseover";
});
welcomeLabel.addEventListener("mouseout", function () {
    console.log("Event: mouseout");
    displayEvent.textContent = "Event: mouseout";
}); 


//function to validate, once the submit button is clicked
function validateForm() {
    let x = document.forms["myForm"]["username"].value;
    let y = document.forms["myForm"]["password"].value;
    //if name is empty, show the following error message and don't submit the form
    if (x == "") {
        alert("Name must be filled out");
        return false;
    } 
    //otherwise display the content just enterd
    else {
        console.log(`Username: ${ x } \n Password: ${ y }`)
        userDisplay.textContent = x;
        passDisplay.textContent = y;
        return false;
    }
}