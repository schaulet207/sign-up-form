// Variables
var password = document.getElementById("user_password");
var confirmpassword = document.getElementById("confirm_user_password");
var fname = document.getElementById("first_name");
var lname = document.getElementById("last_name");
var email = document.getElementById("user_email");
var number = document.getElementById("donorPhone");
var error = document.getElementById("error");
var error2 = document.getElementById("error2");
var placeholder = document.getElementById("phone");

// Error variables
const pwError = document.querySelector('#password-error');
const pwCError = document.querySelector('#confirmpassword-error');
const fnameError = document.querySelector('#fname-error');
const lnameError = document.querySelector('#lname-error');
const emailError = document.querySelector('#email-error');
const telError = document.querySelector('#number-error');

// When the user clicks on a field, or presses any key, the border changes color

fname.addEventListener("input", function (event) {
    if (fname.value === '') {
      fnameError.textContent = 'Please type in your first name.';
      fname.style.borderColor = "red";
    } else {
      fnameError.textContent = '';
      fname.style.borderColor = "green";
    }
  }); 

  fname.onfocus = function() {
    if (fname.value === '') {
        fnameError.textContent = 'Please type in your first name.';
        fname.style.borderColor = "red";
      } else {
        fnameError.textContent = '';
        fname.style.borderColor = "green";
      }
}

lname.addEventListener("input", function (event) {
    if (lname.value === '') {
      lnameError.textContent = 'Please type in your last name.';
      lname.style.borderColor = "red";
    } else {
      lnameError.textContent = '';
      lname.style.borderColor = "green";
    }
  }); 

  lname.onfocus = function() {
    if (lname.value === '') {
        lnameError.textContent = 'Please type in your last name.';
        lname.style.borderColor = "red";
      } else {
        lnameError.textContent = '';
        lname.style.borderColor = "green";
      }
}

email.onfocus = function() 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(RegForm.email.value))
  {
    email.style.borderColor = "green";
    emailError.textContent = '';
  }
  else {
    email.style.borderColor = "red";
    emailError.textContent = 'Please enter a valid email.';
  }
}

email.onblur = function() 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(RegForm.email.value))
  {
    email.style.borderColor = "green";
    emailError.textContent = '';
  }
  else {
    email.style.borderColor = "red";
    emailError.textContent = 'Please enter a valid email.';
  }
}

email.onkeydown = function() 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(RegForm.email.value))
  {
    email.style.borderColor = "green";
    emailError.textContent = '';
  }
  else {
    email.style.borderColor = "red";
    emailError.textContent = 'Please enter a valid email.';
  }
}

number.onfocus = function() 
{
    if (number.value.indexOf('X') > -1 || (number.value.length == 0))
    {
      number.style.borderColor = "red";
      telError.textContent = 'Please enter a valid phone number.';
    }
    else {
      number.style.borderColor = "green";
      telError.textContent = '';
    }
}

number.onblur = function() 
{
    if (number.value.indexOf('X') > -1 || (number.value.length == 0))
    {
      number.style.borderColor = "red";
      telError.textContent = 'Please enter a valid phone number.';
    }
    else {
      number.style.borderColor = "green";
      telError.textContent = '';
    }
}

number.onkeyup = function() 
{
    if (number.value.indexOf('X') > -1 || (number.value.length == 0))
    {
      number.style.borderColor = "red";
      telError.textContent = 'Please enter a valid phone number.';
    }
    else {
      number.style.borderColor = "green";
      telError.textContent = '';
    }
}

// Function to check whether or not the password and confirm_password fields are identical
function CheckPass(password, confirmpassword, error) { 
    if ((password.value === confirmpassword.value) && ((password.value.length > 0) || confirmpassword.value.length > 0)) {
        password.style.borderColor = "green";
        confirmpassword.style.borderColor = "green";
        pwError.textContent = '';
        pwCError.textContent = '';
        }
    else if (password.value != confirmpassword.value) {
        password.style.borderColor = "red";
        confirmpassword.style.borderColor = "red";
        pwError.textContent = 'Passwords do not match.';
        pwCError.textContent = '';
    }
    else if ((password.value.length === 0) && (confirmpassword.value.length === 0)) {
        password.style.borderColor = "red";
        confirmpassword.style.borderColor = "red";
        pwError.textContent = 'Please enter a password.';
        pwCError.textContent = '';
    }
    else {
        password.style.borderColor = "red";
        confirmpassword.style.borderColor = "red";
        pwError.textContent = '';
        pwCError.textContent = '';
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

