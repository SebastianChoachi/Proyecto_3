import { ctx } from './DOM.js';

export const datosRadar = {
    labels: [
      'HP',
      'Attack',
      'Defense',
      'Speed',
      'Sp. Def',
      'Sp. Atk'
    ],
    datasets: [{
      label: 'valor máximo',
      data: [160, 160, 160, 160, 160, 160],
      fill: true,
      backgroundColor: 'rgba(54, 162, 235, 0.1)',
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
            //backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderWidth: 3
        }
      }
    },
  };

export const miGrafico= new Chart (ctx, config);

/// Se genera un número aleatorio que será usado en "agregarPokemon" para utilizar un color aleatorio
function getRandomNumber(min, max) {
    // Genera un número aleatorio entre min (incluido) y max (excluido)
    const randomNumber = Math.random() * (max - min) + min;
    // Redondea el número aleatorio al entero más cercano
    const result = Math.floor(randomNumber);
    return result;
  }

export const agregarPokemon = (nombre, stats) => {
    const colores = ['rgba(255, 99, 132', 'rgba(255, 127, 80', 'rgba(0, 255, 0'
                    , 'rgba(255, 215, 0', 'rgba(75, 0, 130', 'rgba(255, 0, 255'];
    const color = colores[getRandomNumber(0,5)];
    const graficaPokemon = {
      label: nombre,
      data: stats,
      fill: true,
      backgroundColor: color+', 0.2)',
      borderColor: color+')',
      pointBackgroundColor: color+')',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: color+')'
    };
    datosRadar.datasets[1]=graficaPokemon;
    miGrafico.update();
};




