alert("Hola a Todos");
alert(1+9+41);
alert("1+9+41");

alert("saludos");

let edad = 16;
edad = 17;
edad = edad+7;
edad += 5;

//constantes
const SALUDOS_USUARIO = "Hola a todos";


// operadores lógicos;
console.log(5 > 4); //mayor que   
console.log(5 < 8); //menor que

console.log(5 >= 6); //mayor o igual que
console.log(5 <= 7); //menor o igual que

console.log(5 == 5); //igual que
console.log(5 === 5) //estrictamente igual que
console.log(5 != 7); //no es igual

//puedo comparar texto
console.log("a" > "b");
console.log("Cortazar" > "Navarro");

//Condicionales
if (edad >= 18) {
    alert("Eres mayor de edad");
}  else{
    alert("No eres mayor de edad");
}

let premium = true;


   if (premium) {
    console.log("Tienes una cuenta premium"); //si es premium
    alert("Bienvenido ")
   } else if (edad >= 18) {
    console.log("no puedes crear una cuenta"); //si no es premium, pero es +18
   }
    
//interactuar con html DOM
//    recojo el elemento    // que hago //
document.getElementById("texto").innerHTML = "holaaaa";
document.getElementById("caja").innerHTML = "<p> Hola otra vez</p>";

document.body.style.color = "black";

//funciones
function saludar() { 
        alert("Bienvenido");
}
document.body.style.color = "blue"
function modoNoche() {
    document.body.style.color = "white";
    document.body.style.backgroundColor = "black";

}
function modoDia() {
    document.body.style.color = "black";
    document.body.style.backgroundColor = "white";
}

function saludarUsuario(){
    let inputUsuario = document.querySelector("#nombre-usuario").value
    alert("Hola hoy" + inputUsuario);
}

  if (generoFemenino.checked) {
    alert("bienvenida "+inputUsuario);
}  else if (generoMasculino.checked) {
    alert("bienvenido "+inputUsuario);

}
