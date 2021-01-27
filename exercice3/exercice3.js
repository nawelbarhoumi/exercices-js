function validation(){
    var firstname = document.getElementById("input1").value;
    var lastname = document.getElementById("input2").value;
    var email = document.getElementById("input3").value;
    var password = document.getElementById("input4").value;
    if(firstname==""){
        document.getElementById("errorname").innerText = "input not valid";
    }
    else{
        document.getElementById("errorname").innerText = "valid";
    }
    if(lastname==""){
        document.getElementById('errorlastname').innerText = "input not valid";
    }
    else{
        document.getElementById('errorlastname').innerText = "valid";
    }
    if(email.indexOf('@')==-1){
        document.getElementById('erroremail').innerText = "input not valid";
    }
    else{
        document.getElementById('erroremail').innerText = "valid";
    }
    if(password.length<6){
        document.getElementById('errorpassword').innerText = " input not valid";
    }
    else{
        document.getElementById('errorpassword').innerText = "valid";
    }
    
}