import { useReducer, useState, useEffect } from 'react';
import { useGetPokemonByName } from '../utils/hooks';

export const Search = () => {
    return (
        <form>
            <input type="text" placeholder='Enter Pokemon Name'></input>
        </form>       
    )
}