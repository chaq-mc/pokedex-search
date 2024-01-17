import { useState } from 'react';
import { useGetPokemonByName } from '../utils/hooks';
import { SearchHistory } from './SearchHistory';
import './styles/SearchBar.css';

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
            <div className='searchContainer'>
                <div className='searchbox'>
                    <svg aria-hidden="true" viewBox="0 0 24 24">
                        <path
                        d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
                        />
                    </svg>
                    <input 
                        type="search" 
                        aria-label='Search for Pokemon'
                        autoComplete='off'
                        inputMode='search'
                        placeholder='Search Pokemon Name'
                        value={input} 
                        onChange={(e) => handleChange(e.target.value)}
                    />
                </div>
                <SearchHistory/>
            </div>
            
        </form>       
    )
}