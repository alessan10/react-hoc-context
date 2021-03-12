//questo file si usa perchè:
//piuttosto che fare sempre state.pokemon list, creo una funzione che ritorna quello che voglio io

export const getPokemonList = (state) => {
    return state?.pokemonList; //il ? significa che la proprietà pokemonList potrebbe essere undefined (una sorta di await) inizialmente è undefined, appena il valore è riempito la setta

}
