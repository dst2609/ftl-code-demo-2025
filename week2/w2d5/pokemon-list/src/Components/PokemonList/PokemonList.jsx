import React, { useState, useEffect } from "react";
import axios from "axios";
import PokemonCard from "../PokemonCard/PokemonCard";

import "./PokemonList.css";

const PokemonList = () => {
  const [pokemons, setpokemons] = useState([]);

  // 1 fetch list on mount
  useEffect(() => {
    const fetchList = async () => {
      try {
        const { data } = await axios.get(
          "https://pokeapi.co/api/v2/pokemon?limit=20"
        );
        setpokemons(data.results);
        console.log(data.results);
      } catch (err) {
        console.error("Error fetching list: ", err);
      }
    };
    fetchList();
  }, []);

  return (
    <>
      <div className="pokemon-list">
        {pokemons.map((p) => (
          //i need to call the PokemonCard component
          <PokemonCard
            key={p.name} //using name as a key
            name={p.name} //using name as the value for the name of Pokemon
          />
        ))}
      </div>
    </>
  );
};

export default PokemonList;
