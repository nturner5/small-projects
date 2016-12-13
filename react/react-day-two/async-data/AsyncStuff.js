import axios from "axios";

export function getPokemon(name){
  console.log('getPokemon ran')
  return axios.get(`http://pokeapi.co/api/v2/pokemon/${name}`)
}


