import { useState } from 'react';
import { useGetPokemonByName } from '../utils/hooks';

export const Search = () => {
    const [input, setInput] = useState("");
    const [seacrhInput, setSearchInput] = useState("");

    useGetPokemonByName(seacrhInput);

    const handleChange = (value: string) => {
        setInput(value);
    }

    const handlePokemonFetch = (event: React.FormEvent) => {
        event.preventDefault();
        setSearchInput(input.toLocaleLowerCase());
    }

    return (
        <form onSubmit={(e) => handlePokemonFetch(e)}>
            <input type="text" value={input} placeholder='Search Pokemon Name' onChange={(e) => handleChange(e.target.value)}></input>
        </form>       
    )
}