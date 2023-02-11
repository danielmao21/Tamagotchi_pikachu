const img = document.getElementById("pikachu")
const progreso = document.getElementById("progreso");
var button = document.getElementById("incremento");
let reset = document.getElementById("reset");
let cantidad = 120;


let anchopadre = progreso.parentNode.offsetWidth;

console.log(anchopadre);

function myfunction(){

  cantidad += -10;

  progreso.style.width = `${cantidad}%`;

  if (cantidad == 100) {
     console.log("am");
     img.src = "/img/pikachu_happy.png";
  } else if (cantidad == 60) {

    console.log("estoy enojado")
    img.src = "/img/pikachu_food.png";
  }
  else if (cantidad == 30) {
    console.log("me estoy mueriendo")
    img.src = "/img/pikachu_angry.png";
  }
  else if (cantidad == 0) {
    console.log("estoy muerto")
    img.src = "/img/pikachu_dead.png";
    clearInterval(decremento)
  }
}
intervalo = setInterval(myfunction,2000)

// ensayo
button.addEventListener("click", function() {

  cantidad = 120;
})

reset.addEventListener("click", function() {

  if (cantidad ==0) {
    
  }
  clearInterval(intervalo);
  cantidad=120; // Limpiamos el intervalo anterior
  intervalo = setInterval(myfunction, 700); 
  // Volvemos a iniciar el intervalo
});