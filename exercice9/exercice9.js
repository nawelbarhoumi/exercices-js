let tab = [1,2,3,4,5];
// for(let i =0; i< tab.length; i++){
//     console.log("for" +tab[i]);
// }

// let tab1= tab.forEach((x) => {console.log( "map"+x);}) 
// let tab2 = tab.find((x) => x==9)
// console.log(tab2);

// function sum(a,b){
//     let s = 0;
//     s = a+b;
//     console.log(s);

// }
// sum(1,2)
let s = tab.reduce((a,b) =>a*b)
console.log(s);


// let s = (a,b) =>{console.log(a+b);}
// s(4,2)

 let tab1=[{
    nom: "bouazra",
    prénom: "amine",
    age: 15,
    email: "az@SpeechGrammarList.com",
    password: "amine.2020"
},
{
    nom: "barhoumi",
    prénom: "nawel",
    age: 30,
    email: "nawel@gmail.com",
    password: "nawel123"
},
{
    nom: "ayari",
    prénom:"houcem",
    age:22,
    email : "houcem11@hotmail.com",
    password: "houcem456"
},
{
    nom:"guesmi",
    prénom:"nourhene",
    age:23,
    email : "nourhene12@hotmail.com",
    password: "nourhene789"
}
]
var email = "houcem11@hotmail.com"
var password = "houcem456"
// let tab2 = tab1.filter((x) => x.age>20).sort((a,b) => a.age-b.age)
// console.log(tab2);
// let newemail = tab1.find((x) => x.email == "houcem11@hotmail.com")
// console.log(newemail);
// let newpassword = tab1.find((x) =>x.password=="nawel123")
// console.log((newpassword));
// let newemail1 = tab1.find((x) => x.email==email && x.password== password)
// console.log(newemail1);
let newemail2 = tab1.filter((x) =>x.email==email && x.password== password)
console.log(newemail2)

let newemail1 = tab1.find((x) => x.email==email && x.password== "houcem456")
console.log(newemail1);

localStorage.setItem("data", JSON.stringify(tab1))
