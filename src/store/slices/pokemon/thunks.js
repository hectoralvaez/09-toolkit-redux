import { setPokemons, startLoadingPokemons } from "./pokemonSlice"

export const getPokemons = () => {
    return async( dispatch, getState ) => {
        dispatch( startLoadingPokemons() );

        // TODO: Petición http

        // dispatch( setPokemons() );
    }
}