let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const likeButton = document.getElementById('like-btn');
  const toyFormContainer = document.querySelector(".container");
  document.addEventListener("click", (e) => {
    if (e.target === likeButton) {
      console.log("hello");
    }
    
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
});

fetch('http://localhost:3000/toys')
.then(function(response) {
  return response.json();
})
.then(function(json) {
  let toyArray = Array.from(json);
  toyArray.forEach (toy => {
     let divElement = document.createElement('div');
      divElement.className = "card";
      let nameTag = document.createElement('h2');
      nameTag.innerHTML = `${toy.name}`
      divElement.appendChild(nameTag);
      let image = document.createElement('img');
      image.src = `${toy.image}`;
      image.className = 'toy-avatar';
      divElement.appendChild(image);
      let counter = 0;
      let likeTag = document.createElement('p');
      likeTag.innerHTML = `${counter} Likes`;
      divElement.appendChild(likeTag);
      let likeButton = document.createElement('button');
      likeButton.id = 'like-btn';
      likeButton.innerHTML = "Like <3";
      divElement.appendChild(likeButton);
      motherDiv = document.getElementById('toy-collection');
      motherDiv.appendChild(divElement);
  })
});
