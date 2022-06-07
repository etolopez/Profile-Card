
let edad = 19;

if(edad <= 10){
    console.log("Es un ni;o")
} else if (edad >= 11 && edad <= 18){
    console.log("Es un adolescente")
} else {
    console.log("es un adulto")
}

let resultado = edad > 18 ? "es adulto" : edad > 10 && edad < 19 ? "es adolescente" : "es un ni;o";

console.log(resultado);


let nombre = (nombreUsuario = null) => {nombreUsuario ? nombreUsuario : "NN"};
let heading = document.getElementById("mensajeEdad");
heading.innerHTML = `el usuario es un ${adulto} y su nombre es ${nombre(Roberto)}`;