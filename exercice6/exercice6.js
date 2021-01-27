function aleatoire(){
    var aleatoire = parseInt(Math.random()*3);
    var i = 0;
    var x = Number(prompt("donner un entier"))
    console.log(x);
    while(x != aleatoire){
     
        if(x> aleatoire){
            alert("plus petit!")
        }
        else if(x< aleatoire){
            alert("plus grand!")
        }
        else{
        }
        i++
        x = Number(prompt("donner un entier"))
        
    }
    alert(aleatoire + " est le nombre recherché. Trouvé après " + (i+1) + " tentatives")

}