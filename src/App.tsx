import { Search } from './components/SearchBar';
import { PokemonCard } from './components/PokemonCard';
import pokemonLogo from './assets/pokemon-logo.png'
import './App.css'

function App() {

  return (
    <>
    <div>
      <div className='header'>
       <img src={pokemonLogo} className='logoImg' />
      </div>
      <Search/>
      <PokemonCard/>
    </div>
      
    </>
  )
}

export default App
