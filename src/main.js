import data from './data/pokemon/pokemon.js';

const pokeData = data.pokemon;
let pokeKanto = [];

for (let i = 0; i < pokeData.length; i++) {
  if (pokeData[i].generation.name == "kanto") {
    pokeKanto.push(pokeData[i]);
  }
}

const template = (list, type) => {
  let emptyTitle = type;
  if (type == undefined){
    emptyTitle = 'All Pokemons'
  }
  let pokeTemplate = "";
  list.forEach(pokeKanto => {
    const pokeCard = `
  <section id="templateForEach">
    <div class="flip-card">
      <div class="flip-card-inner">

        <div class="flipElementsFront">
            <img src="./image/POKEMON WHAT SMALL.png" alt="" class="cardLogoFront">
            <h2 class="card-number">#${pokeKanto.num}</h2>
            <img alt="pokemon-picture" src="${pokeKanto.img}"/>
            <h2 class="card-title">${pokeKanto.name} </h2>
            <p class="typeTitle">type</p>
            <p class="card-type">${pokeKanto.type} </p>
            <p class="sizeTitle">size</p>
            <p class="card-size">weight:${pokeKanto.size.weight} - height${pokeKanto.size.height}</p>
            <figure class="white-containerFront"></figure>
         </div>
         <div class="flipElementsBack"> 
           <img src="./image/POKEMON WHAT SMALL.png" alt="" class="cardLogoBack">
           <p class="backTitle">resistant</p>
              <p class="card-weeknesses">${pokeKanto.resistant}</p>
              <p class="backTitle">weaknesses</p>
              <p class="card-weeknesses">${pokeKanto.weaknesses}</p>
              <figure class="white-containerBack"></figure>
        </div>
      </div>
    </div>
  </section>
 `;
    pokeTemplate += pokeCard;
  });
  document.getElementById("pokeView").innerHTML = pokeTemplate;
  document.getElementById("emptyTitle").innerHTML = emptyTitle;
};
template(pokeKanto);

//BOTON INICIO
let home = document.getElementById ("logoHome"); 
home.addEventListener ("click" , logoHome); //llamar la función
function logoHome (){ //función anónima
  window.location.reload();  
}

/*FUNCTION FILTER*/
const chooseTypes = document.querySelectorAll(".menu__link")
chooseTypes.forEach(element => {
  element.addEventListener("click", (event) => {
    const selectedPokeType = event.target.id;

    const filteredPoke = pokeKanto.filter((item) => {
      return item.type.includes(selectedPokeType)
    }
    )
    template(filteredPoke, selectedPokeType);
  })
})

/* FUNCTION SORT */
 const pokeSortNum = pokeKanto.sort ((a,b) => {
  if (a.num > b.num) {
    return 1;
  }
  if (a.num < b.num) {
    return -1;
  }
  return 0;
});


const choose1Z = document.getElementById("sort1-2")
choose1Z.addEventListener("click", ()=>{
  template(pokeSortNum)
});

const chooseZ1 = document.getElementById("sort2-1")
chooseZ1.addEventListener("click", ()=>{
  template(pokeSortNum.reverse())
});


const pokeSortAB = pokeKanto.sort ((a,b) => {
  if (a.name > b.name) {
    return 1;
  }
  if (a.name < b.name) {
    return -1;
  }
  return 0;
});

const chooseAZ = document.getElementById("sortA-Z")
chooseAZ.addEventListener("click", ()=>{
 template(pokeSortAB)
});

const chooseZA = document.getElementById("sortZ-A")
chooseZA.addEventListener("click", ()=>{
 template(pokeSortAB.reverse())
});
