import React, { useState } from "react";

// const setPokemonList = (pokemonList) => {
//     store.pokemonList = pokemonList;
// }

const store = {pokemonList: [], pokemon:{}}; 
//l'ultimo attributo è uguale alla funzione pokemonList 

export const Context = React.createContext(); 

const Provider = (props) => {

    const [value, setValue] = useState({...store}); //spread operator-> abbiamo clonato il contenuto di store
    const setPokemonList = (pokemonList) => {
        setValue((prevState) => {
            const newState = {...prevState, pokemonList}
            return newState;
        });
    }
    
    const container = {value, setPokemonList}; //sarebbe dovuto essere value:value ma siccome sono uguali posso ometterlo
    //value è il clone dello store però stavolta è uno state non una variabile quindi appena modifico la variabile si aggiorna il componente
    
    return (
        <Context.Provider value = {container}>
            {props.children}
        </Context.Provider>
    )
}

export default Provider;
