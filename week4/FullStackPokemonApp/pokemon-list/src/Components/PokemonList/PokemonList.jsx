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
        const { data } = await axios.get("http://localhost:3000/pokemon/");
        console.log(data);
        setpokemons(data);
      } catch (err) {
        console.error("Error fetching list: ", err);
      }
    };
    fetchList();
  }, []);

  function handleCardClick(name){
    console.log(name)
  }

  return (
    <>
      <div className="pokemon-list">
        {pokemons.map((p) => (
          //i need to call the PokemonCard component
          <PokemonCard
            key={p.name} //using name as a key
            name={p.name} //using name as the value for the name of Pokemon
            onClick={() => handleCardClick(p.name)}
          />
        ))}
      </div>
    </>
  );
};

export default PokemonList;
