//il reducer è la funzione dove vengono chiamate le action e mette in esecuzione l'azione
import { FETCH_POKEMON_FAILED, FETCH_POKEMON_REQUEST, FETCH_POKEMON_SUCCESS, SET_POKEMON_LIST } from "./pokemonType"

const initialState = {pokemonList:[], pokemon:{}, loading: false, error:''}

//funzione reducer
const reducer = (state = initialState, action) => {
    switch(action.type){
        case SET_POKEMON_LIST: return {...state, pokemonList: action.payload}//lo spread op serve perchè se non ci fosse perderei il contenuto precedente
        case FETCH_POKEMON_REQUEST: return {...state, loading:true}
        case FETCH_POKEMON_SUCCESS: return {...state, pokemonList: action.payload, loading:false}
        case FETCH_POKEMON_FAILED: return {...state, loading:false, error: action.payload}
    }
}

export default reducer;