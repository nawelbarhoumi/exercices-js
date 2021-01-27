function calcul(){
   
    var brut = Number(document.getElementById("salaire").value);
    console.log("brut :"+ brut);
     let net = 0;

    if(document.getElementById("bonus").checked){
      brut= brut + 100;
    }
    if(document.getElementById("allocation").checked){
        brut = brut + 150;
    }
    if(document.getElementById("homme").checked){
        brut = brut;
        console.log("new brut :"+ brut);

    }
    if(document.getElementById("femme").checked){
        console.log("femme");
        brut = brut + (brut*0.02);
    }
    if(document.getElementById("3").checked){
        brut = brut + (brut*0.01);
    }
    if(document.getElementById("4").checked){
        brut = brut + (brut*0.02);
    }
    net = brut - (brut * 0.3);
    console.log("net :"+ net);
   alert(net);
}