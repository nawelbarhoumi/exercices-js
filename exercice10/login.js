function login(){
    var email = document.getElementById("email")
    var password= document.getElementById("password")

    if(email.value.indexOf('@')==-1){
        email.className += ' is-invalid'
        email.classList.remove('is-valid')
        document.getElementById('invalidmail').innerHTML="please enter valid email"
    }
    else{
        email.className += ' is-valid'
        email.classList.remove('is-invalid')
        document.getElementById('invalidmail').innerHTML=""
    }
    if(password.value.length<8){
        password.className += ' is-invalid'
        password.classList.remove('is-valid')
        document.getElementById('invalidpassword').innerHTML="enter more than 8 caracters"
    }
    else{
        password.className += ' is-valid'
        password.classList.remove('is-invalid')
        document.getElementById('invalidpassword').innerHTML=""
    }
    var users= JSON.parse(localStorage.getItem("info"));
    var server = users.find((x) =>x.email==email.value && x.password==password.value)
    if(server!=undefined){
        window.location.href='dashboard.html'
    }
    else{
        alert('verify your email or your password')
    }


}