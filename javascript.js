const img = document.getElementById("pikachu")
const decreceFood = document.getElementById("decreceFood");
const decreceSleep = document.getElementById("decreceSleep");
var incrementoFood = document.getElementById("incrementoFood");
var  incrementosleep = document.getElementById("incrementoSleep");
let reset = document.getElementById("reset");
let cantidadFood = 110;
let cantidadSleep =110;


function decremento(){

  cantidadFood += -10;
  cantidadSleep += -10;

  decreceFood.style.width = `${cantidadFood}%`;
  decreceSleep.style.width = `${cantidadSleep}%`;

  if (cantidadFood == 100 ) {
     console.log("HELLO !");
     img.src = "/img/pikachu_happy.png";
  } else if (cantidadFood == 60) {
    console.log("estoy enojado")
    img.src = "/img/pikachu_food.png";
  }
  else if(cantidadSleep==60){
    console.log("quiero dormir")
    img.src = "/img/Pikachu_sleep.png";
  }
  else if (cantidadFood == 30) {
    console.log("me estoy mueriendo")
    img.src = "/img/pikachu_angry.png";
  }
  else if(cantidadSleep == 30){
    console.log("me estoy duermiendo")
    img.src = "/img/pikachu_zzz.png";
  }
  else if (cantidadFood == 0 || cantidadSleep ==00) {
    console.log("estoy muerto")
    img.src = "/img/pikachu_dead.png";
    clearInterval(decremento)
  }
 
}
intervalo = setInterval(decremento,2000)

// ensayo


incrementoFood.addEventListener("click", function() {
  
    cantidadFood = 110;
    console.log("Aumento food");

  
})

incrementosleep.addEventListener("click", function() {
  
  cantidadSleep = 110;
  console.log("Aumento Sleep");


})


reset.addEventListener("click", function() {

  // Limpiamos el intervalo anterior

  cantidadFood=110;
  cantidadSleep=110; 
  intervalo = setInterval(decremento, 2000); 
  console.log("RESTART GAME")
  // Volvemos a iniciar el intervalo
});