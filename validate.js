//page onload function to alert users page is best viewed with JS enabled
$("document").ready(function () {
    alert("This page is best viewed with Javascript enabled");
});

//form validation function
function validate() {
    //function to check if a name has been entered
    var name = document.getElementById('name').value;

    if (name == null || name == "") {
        document.getElementById('nameerror').innerHTML = "Please enter your full name: ";
    }

    //function to check if an email has been entered
    var email = document.getElementById('email').value;

    if (email == null || email == "") {
        document.getElementById('emailerror').innerHTML = "Please enter your email address: ";
    }

    //function to check if a telephone number has been provided
    var phone = document.getElementById('phone').value;
    if (phone == null || phone == "") {
        document.getElementById('phoneerror').innerHTML = "Please enter your telephone number: ";
    }

    //function to check if a selection was made on the dropdown
    var select = document.forms["contactForm"]["reason"];  

    if (select.selectedIndex < 1) {
        document.getElementById('selecterror').innerHTML("Please select reason.");
        return false;
    }

    //function to check if textarea is empty


    //function to validate a radio button has been selected
    var radios = document.getElementsByName("radio");
    var formValid = false;

    var i = 0;
    while (!formValid && i < radios.length) {
        if (radios[i].checked) formValid = true;
        i++;
    }

    if (!formValid) {
        document.getElementById('radioerror').innerHTML = "(Please check one)";
        return formValid;
    }

    //function to confirm if checkbox has been checked
    var listItems = document.getElementById("checkboxlist");
    var itemcount = listItems.length;
    var iCount = 0;
    var isItemSelected = false;
    for (iCount = 0; iCount < itemcount; iCount++) {
        if (listItems[iCount].checked) {
            isItemSelected = true;
            break;
        }
    }
    if (!isItemSelected) {
        document.getElementById('checkboxerror').innerHTML("Please select an Item.");
    }
    
    else {
        confirm('You form has been submitted');
    }
}