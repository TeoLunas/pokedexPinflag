import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    pokemonList: [],
    favorites: []
}

export const PokemonSlice = createSlice({
    name: 'pokemon',
    initialState: initialState,
    reducers : {
        setPokemonList: (state, {payload}) => {
            state.pokemonList = payload;
        }
    }
});

export const {
    setPokemonList
} = PokemonSlice.actions;

export default PokemonSlice.reducer;