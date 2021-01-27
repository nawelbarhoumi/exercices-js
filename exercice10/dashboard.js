function add(){
    let name = document.getElementById("name")
    let description = document.getElementById("floatingTextarea")

   var storage = JSON.parse(localStorage.getItem('posts')) || []
   storage.push(
       {
           name: name.value,
           description: description.value
       }
   )
    localStorage.setItem('posts', JSON.stringify(storage));

    }
    
    
    