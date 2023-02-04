// set up variables
var password = document.getElementById("user_password");
var confirmpassword = document.getElementById("confirm_user_password");
var fname = document.getElementById("first_name");
var lname = document.getElementById("last_name");
var email = document.getElementById("user_email");
var number = document.getElementById("donorPhone");
var error = document.getElementById("error");
var placeholder = document.getElementById("phone");

// When the user clicks on a field, or presses any key, the border changes color
password.onfocus = function() {
    password.style.borderColor = "#e6007e";
}
confirmpassword.onfocus = function() {
    confirmpassword.style.borderColor = "#e6007e";
}

fname.onfocus = function() {
    if (fname.value.length == 0) {
        fname.style.borderColor = "#e6007e";
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
    fname.style.borderColor = "#e6007e";
    }
    else if (fname.value.length > 0) {
        fname.style.borderColor = "green";
    }
}

lname.onfocus = function() {
    if (lname.value.length == 0) {
        lname.style.borderColor = "#e6007e";
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
    lname.style.borderColor = "#e6007e";
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
    String(number.value);
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
    String(number.value);
    if (number.value.indexOf('X') > -1 || (number.value.length == 0))
    {
      number.style.borderColor = "red";
    }
    else {
      number.style.borderColor = "green";
    }
}

number.onkeydown = function() 
{
    String(number.value);
    if (number.value.indexOf('X') > -1 || (number.value.length == 0))
    {
      number.style.borderColor = "red";
    }
    else {
      number.style.borderColor = "green";
    }
}

// // When the user clicks off a field, the border either returns to normal or validates the value
// fname.onblur = function() {
//     fname.style.borderColor = "rgb(133, 133, 133)";
// }
// lname.onblur = function() {
//     lname.style.borderColor = "rgb(133, 133, 133)";
// }
// email.onblur = function() {
//     email.style.borderColor = "rgb(133, 133, 133)";
// }
// number.onblur = function() {
//     number.style.borderColor = "rgb(133, 133, 133)";
// }

// Function to check whether or not the password and confirm_password fields are identical
function CheckPass(password, confirmpassword, error) { 
    if ((password.value === confirmpassword.value) && (password.value.length > 0)) {
        password.style.borderColor = "green";
        confirmpassword.style.borderColor = "green";
        error.style.display = "none";
        error2.style.display = "none";
        correct.style.display = "flex";
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
    if ((password.value.length < 1) || (confirmpassword.value.length < 1))
    {
        password.style.borderColor = "red";
        confirmpassword.style.borderColor = "red";
        error.style.display = "none";
        error2.style.display = "flex";
        correct.style.display = "none";
    }
    else {
        CheckPass(password, confirmpassword, error);
    }
}
confirmpassword.onblur = function() {
    if ((password.value.length < 1) || (confirmpassword.value.length < 1))
    {
        password.style.borderColor = "red";
        confirmpassword.style.borderColor = "red";
        error.style.display = "none";
        error2.style.display = "flex";
        correct.style.display = "none";
    }
    else {
        CheckPass(password, confirmpassword, error);
    }
}

password.onkeydown = function() 
{
    if ((password.value.length < 1) || (confirmpassword.value.length < 1))
    {
        password.style.borderColor = "red";
        confirmpassword.style.borderColor = "red";
        error.style.display = "none";
        error2.style.display = "flex";
        correct.style.display = "none";
    }
    else {
        CheckPass(password, confirmpassword, error);
    }
}

confirmpassword.onkeydown = function() 
{
    if ((password.value.length < 1) || (confirmpassword.value.length < 1))
    {
        password.style.borderColor = "red";
        confirmpassword.style.borderColor = "red";
        error.style.display = "none";
        error2.style.display = "flex";
        correct.style.display = "none";
    }
    else {
        CheckPass(password, confirmpassword, error);
    }
}


password.onfocus = function() 
{
    if ((password.value.length < 1) || (confirmpassword.value.length < 1))
    {
        password.style.borderColor = "red";
        confirmpassword.style.borderColor = "red";
        error.style.display = "none";
        error2.style.display = "flex";
        correct.style.display = "none";
    }
    else {
        CheckPass(password, confirmpassword, error);
    }
}

