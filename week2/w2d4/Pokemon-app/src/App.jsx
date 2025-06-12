import './App.css';
import PokemonCard from './Components/PokemonCard/PokemonCard';
import Header from './Components/Header/Header';

const pokemons = [
  {
    "id": 1,
    "name": "Bulbasaur",
    "type": "Grass/Poison",
    "description": "There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.",
    "imageUrl": "https://img.pokemondb.net/artwork/large/bulbasaur.jpg"
  },
  {
    "id": 2,
    "name": "Charmander",
    "type": "Fire",
    "description": "It has a preference for hot things. When it rains, steam is said to spout from the tip of its tail.",
    "imageUrl": "https://img.pokemondb.net/artwork/large/charmander.jpg"
  },
  {
    "id": 3,
    "name": "Squirtle",
    "type": "Water",
    "description": "When it retracts its long neck into its shell, it squirts out water with vigorous force.",
    "imageUrl": "https://img.pokemondb.net/artwork/large/squirtle.jpg"
  },
  {
    "id": 4,
    "name": "Pikachu",
    "type": "Electric",
    "description": "Pikachu that can generate powerful electricity have cheek sacs that are extra soft and super stretchy.",
    "imageUrl": "https://img.pokemondb.net/artwork/large/pikachu.jpg"
  }
];

function App() {
  return (
    <>
      <Header title="Pokemon" />
      {pokemons.map((pokemon) => {
        return <>
          <PokemonCard
            key={pokemon.id}
            name={pokemon.name}
            type={pokemon.type}
            description={pokemon.description}
            imageUrl={pokemon.imageUrl}
          />;
        </>;
      }
      )}
    </>
  );
}

export default App;
