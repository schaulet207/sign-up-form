// set up variables
var password = document.getElementById("user_password");
var confirmpassword = document.getElementById("confirm_user_password");
var fname = document.getElementById("first_name");
var lname = document.getElementById("last_name");
var email = document.getElementById("user_email");
var number = document.getElementById("donorPhone");
var error = document.getElementById("error");
var error2 = document.getElementById("error2");
var placeholder = document.getElementById("phone");

// When the user clicks on a field, or presses any key, the border changes color

fname.onfocus = function() {
    if (fname.value.length == 0) {
        fname.style.borderColor = "red";
    }
    else if (fname.value.length > 0) {
        fname.style.borderColor = "green";
    }
}

fname.onkeydown = function() {
    if (fname.value.length == 0 && event.key != "Backspace") {
        fname.style.borderColor = "green";
    }
    else if (event.key == "Backspace" && fname.value.length == 1) {
    fname.style.borderColor = "red";
    }
    else if (fname.value.length > 0) {
        fname.style.borderColor = "green";
    }
}

lname.onfocus = function() {
    if (lname.value.length == 0) {
        lname.style.borderColor = "red";
    }
    else if (lname.value.length > 0) {
        lname.style.borderColor = "green";
    }
}

lname.onkeydown = function() {
    if (lname.value.length == 0 && event.key != "Backspace") {
        lname.style.borderColor = "green";
    }
    else if (event.key == "Backspace" && lname.value.length == 1) {
    lname.style.borderColor = "red";
    }
    else if (lname.value.length > 0) {
        lname.style.borderColor = "green";
    }
}

email.onfocus = function() 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(RegForm.email.value))
  {
    email.style.borderColor = "green";
  }
  else {
    email.style.borderColor = "red";
  }
}

email.onblur = function() 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(RegForm.email.value))
  {
    email.style.borderColor = "green";
  }
  else {
    email.style.borderColor = "red";
  }
}

email.onkeydown = function() 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(RegForm.email.value))
  {
    email.style.borderColor = "green";
  }
  else {
    email.style.borderColor = "red";
  }
}

number.onfocus = function() 
{
    if (number.value.indexOf('X') > -1 || (number.value.length == 0))
    {
      number.style.borderColor = "red";
    }
    else {
      number.style.borderColor = "green";
    }
}

number.onblur = function() 
{
    if (number.value.indexOf('X') > -1 || (number.value.length == 0))
    {
      number.style.borderColor = "red";
    }
    else {
      number.style.borderColor = "green";
    }
}

number.onkeyup = function() 
{
    if (number.value.indexOf('X') > -1 || (number.value.length == 0))
    {
      number.style.borderColor = "red";
    }
    else {
      number.style.borderColor = "green";
    }
}

// Function to check whether or not the password and confirm_password fields are identical
function CheckPass(password, confirmpassword, error) { 
    if ((password.value === confirmpassword.value) && ((password.value.length > 0) || confirmpassword.value.length > 0)) {
        password.style.borderColor = "green";
        confirmpassword.style.borderColor = "green";
        error.style.display = "none";
        error2.style.display = "none";
        correct.style.display = "flex";
        }
    else if (password.value != confirmpassword.value) {
        password.style.borderColor = "red";
        confirmpassword.style.borderColor = "red";
        error.style.display = "flex";
        error2.style.display = "none";
        correct.style.display = "none";
    }
    else if ((password.value.length === 0) && (confirmpassword.value.length === 0)) {
        password.style.borderColor = "red";
        confirmpassword.style.borderColor = "red";
        error.style.display = "none";
        error2.style.display = "flex";
        correct.style.display = "none";
    }
    else {
        password.style.borderColor = "red";
        confirmpassword.style.borderColor = "red";
        error.style.display = "flex";
        error2.style.display = "none";
        correct.style.display = "none";
    }
}

// When the user clicks off the password field, border validates status w/ red or blue
password.onblur = function() {
    CheckPass(password, confirmpassword, error);
}
confirmpassword.onblur = function() {
    CheckPass(password, confirmpassword, error);
}

password.onkeyup = function() 
{
    CheckPass(password, confirmpassword, error);
}

confirmpassword.onkeyup = function() 
{
    CheckPass(password, confirmpassword, error);
}


password.onfocus = function() 
{
    CheckPass(password, confirmpassword, error);
}

confirmpassword.onfocus = function() 
{
    CheckPass(password, confirmpassword, error);
}

