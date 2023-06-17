
import { buscarBoton, inputNombre } from './DOM.js';
import { agregarPokemon } from './chart.js';
import { llenarDiv } from './gif.js';


const getPokemon = async () => {
    const nombre = inputNombre.value;
    const stats = []

    try {
        const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${nombre}`);
        //Se obtienen los 6 stats de cada pokémon
        data.stats.forEach((stat) => {
            stats.push(stat.base_stat);
            console.log(stat.base_stat);
        });
        //Se envian los stats obtenidos del pokemon a la gráfica "chart"
        agregarPokemon(nombre, stats);
        try {
            //Se obtiene la imagen del pokemon
            const url_img_front = data.sprites.versions["generation-v"]["black-white"]["animated"]["front_default"];
            const url_img_back = data.sprites.versions["generation-v"]["black-white"]["animated"]["back_default"];
            llenarDiv(url_img_front, url_img_back);
        } catch (error) {
            alert("El pokemon pertenece a una generación superior a la 5 y no es posible mostrarlo")
        }

    } catch (error) {
        alert("Error! pokemon no encontrado");
        console.error('Error al realizar la solicitud HTTP:', error);
    }
    console.log(stats);

};


buscarBoton.addEventListener("click", getPokemon);




