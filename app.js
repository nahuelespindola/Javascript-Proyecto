// Objetos & Array - Listado de cambios //
// const coins = [{
        id: 1,
        nombre: "Dolar Oficial",
        valor: 2.11
    },
    {
        id: 2,
        nombre: "Dolar Blue",
        conversion: 1
    },
    {
        id: 3,
        nombre: "Peso Argentino",
        conversion: 285
    },
    {
        id: 4,
        nombre: "Real",
        conversion: 10.7547169811
    },
    {
        id: 5,
        nombre: "Euro",
        conversion: 2.0652173913
    },
    {
        id: 6,
        nombre: "Libra Esterlina",
        conversion: 1.7457458929
    },
    {
        id: 7,
        nombre: "Yen Japones",
        conversion: 282.825075172
    }
//]
//const monedas = [{
        id: 1,
        nombre: "Dolar Oficial",
        valor: 131
    },
    {
        id: 2,
        nombre: "Dolar Blue",
        conversion: coins
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
//]


const conversionaPeso = [{
    id: 1,
    nombre: "Dolar Oficial",
    valor: 135
},
{
    id: 2,
    nombre: "Dolar Blue",
    valor: 285
},
{
    id: 3,
    nombre: "Peso Argentino",
    valor: 1
},
{
    id: 4,
    nombre: "Real",
    valor: 26.5
},
{
    id: 5,
    nombre: "Euro",
    valor: 138.008
},
{
    id: 6,
    nombre: "Libra Esterlina",
    valor: 163.254
},
{
    id: 7,
    nombre: "Yen Japones",
    valor: 1.00769
}
]

function operacionMatematica (select1, select2){
    let coin = 0
    let coin2 = 0
    switch(select1){
        case "ARS":{
            coin = conversionaPeso[2].valor
        }break;
        case "USDB":{
            coin = conversionaPeso[1].valor
        }break;
        case "USDO":{
            coin = conversionaPeso[0].valor
        }break;
        case "BRL":{
            coin = conversionaPeso[3].valor
        }break;
        case "EUR":{
            coin = conversionaPeso[4].valor
        }break;
        case "GBP":{
            coin = conversionaPeso[5].valor
        }break;
        case "JPY":{
            coin = conversionaPeso[6].valor
        }break;
   }
  
   switch(select2){
    case "ARS":{
        coin2 = conversionaPeso[2].valor
    }break;
    case "USDB":{
        coin2 = conversionaPeso[1].valor
    }break;
    case "USDO":{
        coin2 = conversionaPeso[0].valor
    }break;
    case "BRL":{
        coin2 = conversionaPeso[3].valor
    }break;
    case "EUR":{
        coin2 = conversionaPeso[4].valor
    }break;
    case "GBP":{
        coin2 = conversionaPeso[5].valor
    }break;
    case "JPY":{
        coin2 = conversionaPeso[6].valor
    }break;
}
return coin / coin2
}
//DOM + Evento// 

const selectIzquierda = document.getElementById("selectIzquierda")
const selectDerecha = document.getElementById("selectDerecha")
const input = document.getElementById("input")
const output = document.getElementById('output')
input.addEventListener('input', () => {
    
    output.setAttribute('value', input.value * operacionMatematica(selectIzquierda.value, selectDerecha.value))
   

 //output.setAttribute('value', input.value * monedas[1].conversion[4].conversion)
   
    //if (selectDerecha.value == 'ARS1'){
      //  output.setAttribute('value', input.value * monedas[1].conversion[2].conversion)}
    
})




//si monedas = ARS entonces input.value * monedas[1].conversion[2].conversion
//si monedas = EUR entonces input.value * monedas[1].conversion[5].conversion


//SELECTOR
const selectMoneda = document.querySelector('.monedas');

selectMoneda.addEventListener('change', (event) => {
    const resultado = document.querySelector('.tiemporeal');
    resultado.textContent = `La cotización en tiempo real por ${event.target.value} es de`;
    console.log(selectMoneda.value)
});


