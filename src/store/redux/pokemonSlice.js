import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    pokemonList: [],
    favorites: [],
    PokemonListDetail: []
}

export const PokemonSlice = createSlice({
    name: 'pokemon',
    initialState: initialState,
    reducers : {
        setPokemonList: (state, {payload}) => {
            state.pokemonList = payload;
        },
        setPokemonListDetail: (state, {payload}) => {
            state.PokemonListDetail = payload;
        }
    }
});

export const {
    setPokemonList,
    setPokemonListDetail
} = PokemonSlice.actions;

export default PokemonSlice.reducer;