import React, { useState } from 'react';
import axios from 'axios';

const AxiosPokemon = () => {
    // set state variavle
    let [ pokemonList, setPokemonList ] = useState([]);

    // get pokemon function
    const getPokemon = () => {
        axios.get('https://pokeapi.co/api/v2/pokemon')
        .then(response => {
            console.log('axios response', response)
            setPokemonList(response.data.results)
        })
        .catch( error => {
            console.log('something went wrong', error)
        })
    }
    
    return(
        <div>
            <button onClick={getPokemon}>Catch em all</button>
            <hr />
            {
                pokemonList.map( (pokemon, i) => {
                    return(
                        <p key={i}>Pokemon No.{i}: {pokemon.name}</p>
                    )
                })
            }
        </div>
    )
}

export default AxiosPokemon;