function register(){
    var firstname = document.getElementById("firstname")
    var lastname = document.getElementById("lastname")
    var email = document.getElementById("email")
    var password= document.getElementById("password")
    if(firstname.value ==""){
        firstname.className += " is-invalid"
        firstname.classList.remove('is-valid')
    }
    else{
        firstname.classList.remove('is-invalid')
        firstname.className += " is-valid"
    }
    if(lastname.value ==""){
        lastname.className += " is-invalid"
        lastname.classList.remove('is-valid')
    }
    else{
        lastname.classList.remove('is-invalid')
        lastname.className+=' is-valid'
    }
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

    // recuperation des users from localstorage
    var users = JSON.parse(localStorage.getItem("info")) || []; ou

    // if(users==null)
    // {
    //     users==[]
    // }

    // create user object
    var user = {
        firstname: firstname.value,
        lastname : lastname.value,
        email: email.value,
        password : password.value
    }
    console.log(user);

    // ajouter un elément dans users
    users.push(user)
    // save users in localstoarage
    localStorage.setItem('info', JSON.stringify(users))

    // suppression old values
    firstname.value=""
    lastname.value=""
    email.value=""
    password.value=""

}