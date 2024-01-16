import { Search } from './components/SearchBar';
import { SearchHistory } from './components/SearchHistory';
import { PokemonCard } from './components/PokemonCard';
import './App.css'

function App() {

  return (
    <>
      <h1>Pokedex</h1>
      <Search/>
      <SearchHistory/>
      <PokemonCard/>
    </>
  )
}

export default App
