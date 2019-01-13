document.addEventListener("DOMContentLoaded", function (event) {
    alert("This page is best viewed with JavaScript enabled");
});

function validate() {

    // NEW: move this way up here so all validations can affect its value:
    var formValid = true;

    // function to check if a name has been entered
    var name = document.getElementById('name').value;

    if (name == null || name.trim() == "") {
        document.getElementById('nameerror').innerHTML = "Please enter your full name";
        formValid = false;
    } else {
        document.getElementById('nameerror').innerHTML = "";
    }

    // function to check if an email has been entered
    var email = document.getElementById('email').value;

    if (email == null || email.trim() == "") {
        document.getElementById('emailerror').innerHTML = "Please enter your email address";
        formValid = false;
    } else {
        document.getElementById('emailerror').innerHTML = "";
    }

    // function to check if a telephone number has been provided
    var phone = document.getElementById('phone').value;

    if (phone == null || phone.trim() == "") {
        document.getElementById('phoneerror').innerHTML = "Please enter your telephone number";
        formValid = false;
    } else {
        document.getElementById('phoneerror').innerHTML = "";
    }

    //validate the select options
    

    //function to validate the textarea field
    var name = document.getElementById('textarea').value;

    if (name == null || name.trim() == "") {
        document.getElementById('textareaerror').innerHTML = "Please enter additional info";
        formValid = false;
    } else {
        document.getElementById('textareaerror').innerHTML = "";
    }
    // function to validate if any radio button has been selected
    var radios = document.getElementsByName('radio');
    var radiosValid = false;
    var i = 0;

    while (!radiosValid && i < radios.length) {
        if (radios[i].checked) radiosValid = true;
        i++;
    }

    if (!radiosValid) {
        document.getElementById('radioerror').innerHTML = "(Please check one)";
        formValid = false;
    } else {
        document.getElementById('radioerror').innerHTML = "";
    }

    // function to confirm if any checkbox has been checked
    var checkboxes = document.getElementsByName('checkbox');
    var checkboxesValid = false;
    var j = 0;

    while (!checkboxesValid && j < checkboxes.length) {
        if (checkboxes[j].checked) checkboxesValid = true;
        j++;
    }

    if (!checkboxesValid) {
        document.getElementById('checkboxerror').innerHTML = "(Please select at least one)";
        formValid = false;
    } else {
        document.getElementById('checkboxerror').innerHTML = "";
    }

    // now that all validations have run, return the conclusion
    alert("The form has been submitted!");
    return formValid;
    
}