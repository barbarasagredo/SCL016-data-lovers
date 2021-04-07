//import { Example } from './data.js';
//import pokemon from './data/pokemon/pokemon.js';
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

