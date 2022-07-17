console.log("hola mundo!")
const anioActual = 2022

let usuario = prompt("Ingrese el nombre de usuario")
let anioNacimiento = prompt("Ingrese su año de nacimiento")
let mensajeSalida = "Bienvenido " + usuario + ". Tu edad es :" +(anioActual - anioNacimiento)


console.log(usuario)
console.log(anioNacimiento)
alert(mensajeSalida)

var encabezado = document.querySelector("h1")
encabezado.textContent = "Query Selector";


// ENTREGA COMPLEMENTARIA - Crear un algoritmo utilizando un ciclo //
//for

for (let i = 1; i <=4; i++) {
    console.log(i)
}
console.log('Fin del ciclo')

//while

let edad = prompt('Ingrese su edad')


while (edad <= 18 ){
alert("Usted no cumple la edad necesaria para esta operacion")
edad = prompt('Ingrese su edad')
}

alert('Bienvenido')