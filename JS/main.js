
import { buscarBoton, inputNombre } from './DOM.js';

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
        
    } catch (error) {
        alert("Error! pokemon no encontrado");
        console.error('Error al realizar la solicitud HTTP:', error);
    }
    console.log(stats);
    return stats;

};


buscarBoton.addEventListener("click", getPokemon);




