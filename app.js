const body = document.querySelector("body")


fetch ("https://pokeapi.co/api/v2/pokemon/onix")
.then(response => {
    // console.log(response)
   return response.json();
})
.then(data =>{
    console.log(data);
    let sprites = data.sprites;
   // console.log(sprites);
    let profilePic = sprites.front_default;
   // console.log(profilePic);
    let pokeName = data.name;
  //  console.log(pokeName);
    let height = data.height;
    let weight = data.weight;
   // console.log(height, weight)
    let moves = data.moves
  //  console.log(moves);
    let earthquake = moves[10].move.name;
    //console.log(earthquake)
    let type = data.types
   // console.log(type)
    let firstType = data.types[1].type.name
   // console.log(firstType)
   const card= document.createElement("div");
   card.classList.add("card");
   card.style.width = "18rem";
   console.log(card);
const image = document.createElement("img");
image.src = profilePic;
image.classList.add("card-img-top");
image.alt = pokeName;
let firstLetter = pokeName.charAt(0).toUpperCase();
console.log(firstLetter);
let otherLetters = pokeName.slice (1,4);
console.log(otherLetters);
let finalName = firstLetter + otherLetters;
const cardBody = document.createElement("div");
cardBody.classList.add("card-body");
console.log(cardBody);
const cardTitle = document.createElement("h5");
cardTitle.classList.add("card-title");
cardTitle.textContent = finalName;

console.log(cardTitle);


const cardWeight= document.createElement("p");
const cardHeight= document.createElement("p");
const cardMove= document.createElement("p");
const cardType= document.createElement("p");

cardWeight.classList.add("card-text");
cardHeight.classList.add("card-text");
cardMove.classList.add("card-text")
cardType.classList.add("card-text")

cardWeight.textContent = "Weight: " + weight;
cardHeight.textContent = "Height: " + height;
cardMove.textContent = "Move: " +earthquake;
cardType.textContent = "Type: "+ firstType;
console.log(cardWeight, cardHeight, cardMove, cardType);

cardBody.appendChild(cardTitle);
cardBody.appendChild(cardHeight);
cardBody.appendChild(cardWeight);
cardBody.appendChild(cardMove);
cardBody.appendChild(cardType);
console.log(cardBody);

card.appendChild(image);
card.appendChild(cardBody);
console.log(card)

body.appendChild(card);



})

{/* <div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div> */}

