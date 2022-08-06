
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


    //DOM + Evento//

    var input = document.getElementById("pesoargentino")
    var output = document.getElementById('dolar')
    input.addEventListener('keypress', () => {
output.setAttribute('value', input.value / 300)
    })

    var invertir = document.getElementById('Invertir')
    invertir.addEventListener('click', () => {
        
    })
