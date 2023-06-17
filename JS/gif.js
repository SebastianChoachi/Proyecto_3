import { front_pokemon, back_pokemon } from "./DOM.js";

export const llenarDiv = (url_front, url_back) => {
    var infoDivFront = '<img class="avatar" src="' + url_front + '"></img>';
    front_pokemon.innerHTML = infoDivFront;
    var infoDivBack = '<img class="avatar" src="' + url_back + '"></img>';
    back_pokemon.innerHTML = infoDivBack;
}