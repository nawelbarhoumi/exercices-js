function loadData(){
   var posts= JSON.parse(localStorage.getItem('posts')) || [];
   var tbody = document.getElementById("tbody");
   var data ="";
   posts.forEach((post, index) => {
       data += `<tr>
       <td>${index+1}</td>
       <td>${post.name}</td>
       <td>${post.description}</td>
       <td> 
       <button type="button" class="btn btn-info text-white" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="showData(${index})">Update </button>
       <button type="button" class="btn btn-danger" onclick="deleteData(${index})">Delete </button>
       </td>
     </tr>` 
   });
tbody.innerHTML= data;
}
function deleteData(i){
    var posts= JSON.parse(localStorage.getItem('posts')) || [] ;
    posts.splice(i, 1);
    localStorage.setItem("posts", JSON.stringify(posts));
    loadData();
}
function showData(i){
  var posts= JSON.parse(localStorage.getItem('posts')) || [];
  document.getElementById("name1").value=posts[i].name;
  document.getElementById("description1").value=posts[i].description;
  document.getElementById("index").value=i;
}
function updateData(){
  var posts= JSON.parse(localStorage.getItem('posts')) || [];
  var name = document.getElementById("name1").value;
  var description = document.getElementById("description1").value;
  var index = document.getElementById("index").value;
  var myObj = {
    name,
    description
  }
  posts.splice(index,1,myObj);
  localStorage.setItem("posts", JSON.stringify(posts));
  loadData();
}

// fichier nbadlouha chaine de caractères, par base64, choisir fichier, et un bouton load: file reader base64