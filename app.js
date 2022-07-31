const valorDolar = 342

let pesosArgentinos = prompt("Ingrese cuantos pesos Argentinos desea convertir")
let mensajeSalida = "Bienvenido " + ". Ese valor equivale a :" + (pesosArgentinos / valorDolar) + " dolares ($USD)";


console.log(pesosArgentinos)
alert(mensajeSalida)


// Objetos & Array - Listado de cambios //
const monedas = [
    {
        id: 1,
        nombre: "Dolar Oficial",
        valor: 131
    }, 
    {
        id: 2,
        nombre: "Dolar Blue",
        valor: 342
    }, 
    {
        id: 3,
        nombre: "Peso Argentino",
        valor: 1
    }, 
    {
        id: 4,
        nombre: "Real",
        valor: 0.03939
    }, 
    {
        id: 5,
        nombre: "Euro",
        valor: 0.00745
    }, 
    {
        id: 6,
        nombre: "Libra Esterlina",
        valor: 0.00625
    }, 
    {
        id: 7,
        nombre: "Yen Japones",
        valor: 1.01458
    }
]
console.log(monedas)

//iterador
for (let i = 0; i < monedas.length; i++) {
    console.log(monedas[i])
}
console.log(monedas.length)

//Selector
    const nombre = prompt('Ingrese a que moneda desea convertir sus pesos')
    {
        for (let i = 0; i < monedas.length; i++){
        if (nombre == monedas[i]) {
            alert("Esta moneda se encuentra disponible")
        }
    }
    }
       
 