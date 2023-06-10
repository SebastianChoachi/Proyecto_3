
import { buscarBoton, ctx, inputNombre } from './DOM.js';

const datosRadar = {
    labels: [
      'HP',
      'Attack',
      'Defense',
      'Speed',
      'Sp. Def',
      'Sp. Atk'
    ],
    datasets: [{
      label: 'valor pokemon',
      data: [65, 59, 90, 81, 56, 55],
      fill: true,
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgb(255, 99, 132)',
      pointBackgroundColor: 'rgb(255, 99, 132)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(255, 99, 132)'
    } , {
      label: 'valor máximo',
      data: [160, 160, 160, 160, 160, 160],
      fill: true,
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      borderColor: 'rgb(54, 162, 235)',
      pointBackgroundColor: 'rgb(54, 162, 235)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(54, 162, 235)'
    } ]
  };


const config = {
    type: 'radar',
    data: datosRadar,
    options: {
      elements: {
        line: {
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderWidth: 3
        }
      }
    },
  };

const miGrafico= new Chart (ctx, config);












const getPokemon = async () => {
    const nombre = inputNombre.value;
    console.log(nombre);
    const stats = []
    //alert("hola get pokemon");
    try {
        const { data } = await axios.get(`http://pokeapi.co/api/v2/pokemon/${nombre}`);
        console.log(data);
        data.stats.forEach((stat) => {
            stats.push(stat.base_stat);
            console.log(stat.base_stat);
        });
        datosRadar.datasets[0].data = stats; // Corrección en esta línea
        miGrafico.update();
    } catch (error) {
        alert("Error! pokemon no encontrado");
        console.error('Error al realizar la solicitud HTTP:', error);
    }
    console.log(stats);
    
    

};


buscarBoton.addEventListener("click", getPokemon);




