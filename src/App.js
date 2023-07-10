import logo from './logo.svg';
import './App.css';
import pokemons from './Pokedex';
import Pokecard from './Pokecard';

function App() {
  return (
    <>
    <h1 className='App-h1'>Pokedex</h1>



   {pokemons.map(p =>(<Pokecard id={p.id} name={p.name} type={p.type} base_experience={p.base_experience}/>))}
   
  </>
  );
}

export default App;
