//specifichiamo l'azione con il tipo e cosa deve ritornare nel payload (se deve ritornare)
import { SET_POKEMON_LIST, FETCH_POKEMON_FAILED, FETCH_POKEMON_SUCCESS, FETCH_POKEMON_REQUEST } from "./pokemonType";
import {getPokemon} from '../../service/pokemon'

export const setPokemonList = (pokemonList) =>{
    return {
        type:SET_POKEMON_LIST,
        payload: pokemonList
    }
};

export const fetchPokemonRequest = () => {
    return {
        type: FETCH_POKEMON_REQUEST
    }
}

export const fetchPokemonSuccess = (pokemonList) => {
    return {
        type: FETCH_POKEMON_SUCCESS,
        payload: pokemonList
    }
}

export const fetchPokemonFailed = (error) => {
    return {
        type: FETCH_POKEMON_FAILED,
        payload: error
    }
}

export const fetchPokemonList = () => {
    return async dispatch => {
        dispatch(fetchPokemonRequest()) //è un'azione da creare (sopra)
        try {
            const promise = await getPokemon();

            const pokemonList = promise.ok && await promise.json();
            dispatch(fetchPokemonSuccess(pokemonList.results))
        }catch( error ){
            dispatch(fetchPokemonFailed(error))
        }
    }
}
