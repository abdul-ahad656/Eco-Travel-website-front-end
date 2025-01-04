function signin(){
    var em=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var paswd=  /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
    var n=/^[A-Za-z ]{1,100}$/;
    if( document.getElementById("email").value == "" || document.getElementById("email").value.search(em) == -1){
        document.getElementById("err1").innerHTML = "Invalid";
        document.getElementById("err1").style.color = "red";
    }
    else{
        document.getElementById("err1").innerHTML = "Valid";
        document.getElementById("err1").style.color = "green";
    }
    if( document.getElementById("pswd").value == "" || document.getElementById("pswd").value.search(paswd) == -1){
        document.getElementById("err2").innerHTML = "Must contain at least one number,uppercase and lowercase letter, and 8 characters";
        document.getElementById("err2").style.color = "red";
    }
    else{
        document.getElementById("err2").innerHTML = "Strong Password";
        document.getElementById("err2").style.color = "green";
    }
    if( document.getElementById("firstname").value == ""	|| document.getElementById("firstname").value.search(n) == -1){
        document.getElementById("err3").innerHTML = "Must be filled";
        document.getElementById("err3").style.color = "red";
    }
    else{
        document.getElementById("err3").innerHTML = "Filled";
        document.getElementById("err3").style.color = "green";
    }
    if( document.getElementById("lastname").value == ""	|| document.getElementById("lastname").value.search(n) == -1){
        document.getElementById("err4").innerHTML = "Must be filled";
        document.getElementById("err4").style.color = "red";
    }
    else{
        document.getElementById("err4").innerHTML = "Filled";
        document.getElementById("err4").style.color = "green";
    }
}
function login(){
    var em=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var paswd=  /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
    if( document.getElementById("email").value == "" || document.getElementById("email").value.search(em) == -1){
        document.getElementById("err1").innerHTML = "Invalid";
        document.getElementById("err1").style.color = "red";
    }
    else{
        document.getElementById("err1").innerHTML = "Valid";
        document.getElementById("err1").style.color = "green";
    }
    if( document.getElementById("pswd").value == "" || document.getElementById("pswd").value.search(paswd) == -1){
        document.getElementById("err2").innerHTML = "Must contain at least one number,uppercase and lowercase letter, and 8 characters";
        document.getElementById("err2").style.color = "red";
    }
    else{
        document.getElementById("err2").innerHTML = "Strong Password";
        document.getElementById("err2").style.color = "green";
    }
}
function contact(){
    var em=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var n=/^[A-Za-z ]{1,100}$/;
    var mess=/^[A-Za-z ]{1,200}$/;
    if( document.getElementById("email").value == "" || document.getElementById("email").value.search(em) == -1){
        document.getElementById("err1").innerHTML = "Invalid";
        document.getElementById("err1").style.color = "red";
    }
    else{
        document.getElementById("err1").innerHTML = "Valid";
        document.getElementById("err1").style.color = "green";
    }
    if( document.getElementById("subject").value == "" || document.getElementById("subject").value.search(n) == -1){
        document.getElementById("err2").innerHTML = "Must be filled";
        document.getElementById("err2").style.color = "red";
    }
    else{
        document.getElementById("err2").innerHTML = "Filled";
        document.getElementById("err2").style.color = "green";
    }
    if( document.getElementById("message").value == ""	|| document.getElementById("message").value.search(mess) == -1){
        document.getElementById("err3").innerHTML = "Must be filled";
        document.getElementById("err3").style.color = "red";
    }
    else{
        document.getElementById("err3").innerHTML = "Filled";
        document.getElementById("err3").style.color = "green";
    }
}
function booknow() {
    var g=/^[1-9]{1,100}$/;
    var cin = document.getElementById("check-in").value;
    var cout = document.getElementById("check-out").value;
    var n=/^[A-Za-z ]{1,100}$/;
    if( document.getElementById("destination").value == "" || document.getElementById("destination").value.search(n) == -1){
        document.getElementById("err1").innerHTML = "Must be filled";
        document.getElementById("err1").style.color = "red";
    }
    else{
        document.getElementById("err1").innerHTML = "Filled";
        document.getElementById("err1").style.color = "green";
    }

    if (cin == "") {
        document.getElementById("err2").innerHTML = "Please enter check-in date";
        document.getElementById("err2").style.color = "red";
        return false;
    }

    if (cout == "") {
        document.getElementById("err3").innerHTML = "Please enter check-out date";
        document.getElementById("err3").style.color = "red";
        return false;
    }

    if( document.getElementById("guests").value == "" || document.getElementById("guests").value.search(g) == 0){
        document.getElementById("err4").innerHTML = "Must be filled or greater than 0";
        document.getElementById("err4").style.color = "red";
    }
    else{
        document.getElementById("err4").innerHTML = "validated";
        document.getElementById("err4").style.color = "green";
    }
}