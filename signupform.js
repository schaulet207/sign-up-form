// set up variables
var password = document.getElementById("user_password");
var confirmpassword = document.getElementById("confirm_user_password");
var fname = document.getElementById("first_name");
var lname = document.getElementById("last_name");
var email = document.getElementById("user_email");
var number = document.getElementById("phone_number");
var error = document.getElementById("error");

// When the user clicks on a field, the border turns blue
password.onfocus = function() {
    password.style.borderColor = "blue";
}
confirmpassword.onfocus = function() {
    confirmpassword.style.borderColor = "blue";
}
fname.onfocus = function() {
    fname.style.borderColor = "blue";
}
lname.onfocus = function() {
    lname.style.borderColor = "blue";
}
email.onfocus = function() {
    email.style.borderColor = "blue";
}
number.onfocus = function() {
    number.style.borderColor = "blue";
}

// When the user clicks off a field, the border either returns to normal or validates the value
fname.onblur = function() {
    fname.style.borderColor = "rgb(133, 133, 133)";
}
lname.onblur = function() {
    lname.style.borderColor = "rgb(133, 133, 133)";
}
email.onblur = function() {
    email.style.borderColor = "rgb(133, 133, 133)";
}
number.onblur = function() {
    number.style.borderColor = "rgb(133, 133, 133)";
}

function CheckPass(password, confirmpassword, error) { 
    if (password.value === confirmpassword.value) {
        password.style.borderColor = "green";
        confirmpassword.style.borderColor = "green";
        error.style.display = "none";
        error2.style.display = "none";
        correct.style.display = "flex";
        console.log("1");
        }
    else {
        password.style.borderColor = "red";
        confirmpassword.style.borderColor = "red";
        error.style.display = "flex";
        error2.style.display = "none";
        correct.style.display = "none";
        console.log("3");
    }
}

// When the user clicks off the password field, border validates status w/ red or blue
password.onblur = function() {
    CheckPass(password, confirmpassword, error);
}
confirmpassword.onblur = function() {
    CheckPass(password, confirmpassword, error);
}


