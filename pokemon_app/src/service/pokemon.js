export const getPokemon = async() => {
    const promise = await fetch("https://pokeapi.co/api/v2/pokemon")

    /*if (promise.ok){
        return await promise.json()
    }*/
    console.log(promise);
    return promise;
    //return promise.ok && await promise.json();
}
