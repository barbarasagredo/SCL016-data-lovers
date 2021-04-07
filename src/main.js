
import data from './data/pokemon/pokemon.js';

//boton menu responsive phone
const btnNavBar = document.querySelector("#btnNavBar");
const menu = document.querySelector("#menu");
btnNavBar.addEventListener("click" , function (){
    menu.classList.toggle("showing")

});

const subMenuBtn = document.querySelectorAll(".submenu-btn");
for (let i=0; i<subMenuBtn.length; i++){
    subMenuBtn[i].addEventListener("click", function(){
if(window.innerWidth < 1024){
    
}
 });   
}

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
            <header> <img src="./IMAGES/POKEMON WHAT SMALL.png" alt="" class="cardLogo"></header>
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

