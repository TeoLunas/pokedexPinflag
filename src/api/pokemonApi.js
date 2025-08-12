import axios from 'axios';

// TODO: Obtener url de la api desde variables de entorno.

const pokemonApi = axios.create({
    baseURL: 'https://pokeapi.co/api/v2'
});

export default pokemonApi;