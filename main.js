// Functionize Minecraft Fishing Start Code

// fish count
let numCod = 0;
let numSalmon = 0;
let numTropical = 0;
let numPuffer = 0;

// variables
let img = document.getElementById("result-img");
let cod = document.getElementById("num-cod");
let salmon = document.getElementById("num-salmon");
let tropical = document.getElementById("num-tropical");
let puffer = document.getElementById("num-puffer");

// Fish Button Event Listener
document.getElementById("fish-btn").addEventListener("click", fishBtnClicked);

function fishBtnClicked() {
  // determine character
  let character = document.getElementById("character-select").value;

  if (character === "steve") {
    //fish with steve
    // steve fish simulator
    let randNum = Math.random();

    if (randNum < 0.7) {
      console.log("cod");
      img.src = "img/Raw-Cod.png";
      numCod - numCod++;
      cod.innerHTML = numCod;
    } else if (randNum < 0.9) {
      img.src = "img/Raw-Salmon.png";
      numSalmon - numSalmon++;
      salmon.innerHTML = numSalmon;
    } else if (randNum < 0.95) {
      console.log("tropical fish");
      img.src = "img/Tropical-Fish.png";
      numTropical - numTropical++;
      tropical.innerHTML = numTropical;
    } else {
      console.log("pufferfish");
      img.src = "img/Pufferfish.png";
      numPuffer - numPuffer++;
      puffer.innerHTML = numPuffer;
    }
  } else if (character == "alex") {
    //fish with alex

    //alex fishign
    let randNum = Math.random();
    if (randNum < 0.1) {
      console.log("cod");
      img.src = "img/Raw-Cod.png";
      numCod - numCod++;
      cod.innerHTML = numCod;
    } else if (randNum < 0.2) {
      img.src = "img/Raw-Salmon.png";
      numSalmon - numSalmon++;
      salmon.innerHTML = numSalmon;
    } else if (randNum < 0.5) {
      console.log("tropical fish");
      img.src = "img/Tropical-Fish.png";
      numTropical - numTropical++;
      tropical.innerHTML = numTropical;
    } else {
      console.log("pufferfish");
      img.src = "img/Pufferfish.png";
      numPuffer - numPuffer++;
      puffer.innerHTML = numPuffer;
    }
  }
  // fish with villager\
  let randNum = Math.random();
  if (randNum < 0.25) {
    console.log("cod");
    img.src = "img/Raw-Cod.png";
    numCod - numCod++;
    cod.innerHTML = numCod;
  } else if (randNum < 0.5) {
    img.src = "img/Raw-Salmon.png";
    numSalmon - numSalmon++;
    salmon.innerHTML = numSalmon;
  } else if (randNum < 0.75) {
    console.log("tropical fish");
    img.src = "img/Tropical-Fish.png";
    numTropical - numTropical++;
    tropical.innerHTML = numTropical;
  } else {
    console.log("pufferfish");
    img.src = "img/Pufferfish.png";
    numPuffer - numPuffer++;
    puffer.innerHTML = numPuffer;
  }
}
