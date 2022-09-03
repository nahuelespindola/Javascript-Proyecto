var animation = bodymovin.loadAnimation({
    container: document.getElementById('lottie-animation'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'https://assets1.lottiefiles.com/packages/lf20_06a6pf9i.json'
})



// Objetos & Array - Listado de cambios //
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
        nombre: "Dolar Contado con Liquidacion",
        valor: 290
    },
    {
        id: 5,
        nombre: "Dolar Bolsa",
        valor: 278
    },
    {
        id: 6,
        nombre: "Dolar Turista",
        valor: 255
    },
    {
        id: 7,
        nombre: "Bitcoin",
        valor: 2643812
    }
]

function operacionMatematica(select1, select2) {
    let coin = 0
    let coin2 = 0
    switch (select1) {
        case "ARS": {
            coin = conversionaPeso[2].valor
        }
        break;
    case "Dolar Blue": {
        coin = conversionaPeso[1].valor
    }
    break;
    case "Dolar Oficial": {
        coin = conversionaPeso[0].valor
    }
    break;
    case "Dolar Contado con Liquidación": {
        coin = conversionaPeso[3].valor
    }
    break;
    case "Dolar Bolsa": {
        coin = conversionaPeso[4].valor
    }
    break;
    case "Dolar Turista": {
        coin = conversionaPeso[5].valor
    }
    break;
    case "BTC": {
        coin = conversionaPeso[6].valor
    }
    break;
    }

    switch (select2) {
        case "ARS": {
            coin2 = conversionaPeso[2].valor
        }
        break;
    case "USDB": {
        coin2 = conversionaPeso[1].valor
    }
    break;
    case "USDO": {
        coin2 = conversionaPeso[0].valor
    }
    break;
    case "USDCCL": {
        coin2 = conversionaPeso[3].valor
    }
    break;
    case "USDBOLSA": {
        coin2 = conversionaPeso[4].valor
    }
    break;
    case "USDTurista": {
        coin2 = conversionaPeso[5].valor
    }
    break;
    case "BTC": {
        coin2 = conversionaPeso[6].valor
    }
    break;
    }
    return coin / coin2
}

//DOM + Evento// 

const selectIzquierda = document.getElementById("selectIzquierda")
//Storage Moneda Seleccionada
selectIzquierda.addEventListener('click', () =>{
    let selectedCoin = document.getElementById("selectIzquierda").value
    
    localStorage.setItem('Moneda Seleccionada', selectedCoin)
}
)
const selectDerecha = document.getElementById("selectDerecha")
//Storage Moneda a Convertir
selectDerecha.addEventListener('click', () =>{
    let convertedCoin = document.getElementById("selectDerecha").value
    console.log(convertedCoin)
    localStorage.setItem('Moneda a Convertir', convertedCoin)
}
)


const input = document.getElementById("input")
const output = document.getElementById('output')
input.addEventListener('input', () => {
    
    
//Storage VALOR INTRODUCIDO
    let inputValue = document.getElementById("input").value
    
    localStorage.setItem('Valor Introducido', inputValue)
    output.setAttribute('value', input.value * operacionMatematica(selectIzquierda.value, selectDerecha.value))
   

    

    let condicion = 0
    console.log(condicion)
    if(input.value == condicion){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'No coloques letras, solo numeros!',
            footer: '<a href="">Porque estoy viendo esta alerta?</a>'
          })
    }

    
})

//OPERADOR 
  // condicion = 0 ? : Swal.fire({
  //          icon: 'error',
  //          title: 'Oops...',
  //          text: 'No coloques letras, solo numeros!',
  //          footer: '<a href="">Porque estoy viendo esta alerta?</a>'
  //        })


//SELECTOR
const selectMoneda = document.querySelector('.monedas-derecha');

selectMoneda.addEventListener('change', (event) => {
    const resultado = document.querySelector('.selector-tiemporeal');
    resultado.textContent = `La cotización en tiempo real de peso Argentino por ${event.target.value} es de`
    
});

 





// ChartJS

 const CHART = document.getElementById('lineChart').getContext('2d');
 const labels = [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
  ];
  const data = {
    labels: labels
  };

  //CONFIG
  const config = {
    type: 'line',
    data: data,
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Chart.js Line Chart'
        }
      }
    },
  };
 const lineChart = new Chart(CHART, {
    
type: 'line',
data: {
    labels: labels,
    datasets: [{
      label: 'Cotización Dolar Oficial a Peso Argentino 2022',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: [102, 105, 108, 112, 116, 121, 126, 137, ],
    }
]
    
  }
  
});

   
   //CHART-2


   //FETCH//

const dolartiemporeal = document.getElementById("tiemporeal")

   fetch('https://www.dolarsi.com/api/api.php?type=valoresprincipales')
   .then((res) => {return res.json()})
   .then((data) => {
    console.log(data)

    const li = document.createElement('li')
    li.innerHTML = `
    <h3>${data[0].casa.compra}</h3>
    `
    dolartiemporeal.append(li)
   
}
)
    
  