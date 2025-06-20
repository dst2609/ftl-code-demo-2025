// Initialize the server
const express = require("express");
const app = express(); //its gets all the express functions/functionalities in the app variable
const port = 3000;

app.use(express.json());

let pokemonList = [
  {
    id: 1,
    name: "Bulbasaur",
    type: "Grass/Poison",
    description:
      "There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.",
    imageUrl: "https://img.pokemondb.net/artwork/large/bulbasaur.jpg",
  },
  {
    id: 2,
    name: "Charmander",
    type: "Fire",
    description:
      "It has a preference for hot things. When it rains, steam is said to spout from the tip of its tail.",
    imageUrl: "https://img.pokemondb.net/artwork/large/charmander.jpg",
  },
  {
    id: 3,
    name: "Squirtle",
    type: "Water",
    description:
      "When it retracts its long neck into its shell, it squirts out water with vigorous force.",
    imageUrl: "https://img.pokemondb.net/artwork/large/squirtle.jpg",
  },
  {
    id: 4,
    name: "Pikachu",
    type: "Electric",
    description:
      "Pikachu that can generate powerful electricity have cheek sacs that are extra soft and super stretchy.",
    imageUrl: "https://img.pokemondb.net/artwork/large/pikachu.jpg",
  },
];

app.get("/", (req, res) => {
  res.send("Hello World, I am awake!");
});

// Read all pokemon
// add optional filters
app.get("/pokemon", (req, res) => {
  const { name, type } = req.query;
  let filteredPokemon = pokemonList;

  //Filter by name if query param exsists
  if (name) {
    filteredPokemon = filteredPokemon.filter((p) =>
      p.name.toLowerCase().includes(name.toLowerCase())
    );
  }

  //Filter by type
  if (type) {
    filteredPokemon = filteredPokemon.filter((p) =>
      p.type.toLowerCase().includes(type.toLowerCase())
    );
  }

  res.json(filteredPokemon);
});

// Read one pokemon
app.get("/pokemon/:id", (req, res) => {
  let pokemonId = parseInt(req.params.id);
  const pokemon = pokemonList.find((p) => p.id === pokemonId);

  res.json(pokemon);
});
// "id": 2,
//     "name": "Charmander",
//     "type": "Fire",
//     "description": "It has a preference for hot things. When it rains, steam is said to spout from the tip of its tail.",
//     "imageUrl": "https://img.pokemondb.net/artwork/large/charmander.jpg"
// Create a Pokemon
app.post("/pokemon", (req, res) => {
  const pokemonData = req.body;
  console.log(pokemonData);
  let pokemon = {};
  pokemon.id = pokemonList.length + 1;
  pokemon.name = pokemonData.name || "";
  pokemon.type = pokemonData.type || "unknown";
  pokemon.description = pokemonData.description || "";
  pokemon.imageUrl = `https://img.pokemondb.net/artwork/large/${pokemonData.name.toLowerCase()}.jpg`;
  pokemonList.push(pokemon);
  console.log(pokemon);
  res.status(201).json(pokemon);
});

// Update
app.put("/pokemon/:id", (req, res) => {
  const pokemonData = req.body;
  const pokemonId = parseInt(req.params.id);

  const pokemon = pokemonList.find((p) => p.id === pokemonId);
  pokemon.id = pokemonData.id || pokemon.id;
  pokemon.name = pokemonData.name || pokemon.name;
  pokemon.type = pokemonData.type || pokemon.type;
  pokemon.description = pokemonData.description || pokemon.description;
  pokemon.imageUrl = pokemonData.name
    ? `https://img.pokemondb.net/artwork/large/${pokemonData.name.toLowerCase()}.jpg`
    : pokemon.imageUrl;

  res.status(202).send(pokemon);
});

app.listen(port, () => {
  console.log(`Server running at https://localhost:${port}`);
});
