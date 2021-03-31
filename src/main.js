//import { Example } from './data.js';
// import data from './data/lol/lol.js';
//import pokemon from './data/pokemon/pokemon.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';
const pokeData = data.pokemon;
let pokeKanto = [];

for (let i = 0; i < pokeData.length; i++) {
  if (pokeData[i].generation.name == "kanto") {
    pokeKanto.push(pokeData[i]);
  }
}

const template = (list) => {
  let pokeTemplate = "";
  list.forEach(pokeKanto => {
    const pokeCard = `
  <section id="templateForEach">
    <div class="flip-card">
      <div class="flip-card-inner">
        <div class="flipElementsFront">
          <div class="card-background"> 
            <header> <img src="./IMAGES/POKEMON WHAT SMALL.png" alt="" class="logo"></header>
            <h2 class="card-number">${pokeKanto.num}</h2>
            <img alt="pokemon-picture" src="${pokeKanto.img}"/>
            <div class="white-conteiner">
              <h2 class="card-title">${pokeKanto.name} </h2>
            </div>
          </div>
        </div>
        <div class="flipElementsBack"> 
          <div class="card-background"> 
            <img src="./IMAGES/POKEMON WHAT SMALL.png" alt="" class="logo">
            <div class="white-conteiner">
              <h3 class="card-type">${pokeKanto.type}</h3>
              <h3 class="card-resistence">${pokeKanto.resistant}</h3>
              <h3 class="card-weekness">${pokeKanto.weaknesses}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
 `;
    pokeTemplate += pokeCard;
  });
  document.getElementById("pokeView").innerHTML = pokeTemplate;
};
template(pokeKanto);

