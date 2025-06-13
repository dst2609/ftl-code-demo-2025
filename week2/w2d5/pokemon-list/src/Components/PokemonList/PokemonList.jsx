import React, { useState, useEffect } from "react";
import axios from "axios";
import PokemonCard from "../PokemonCard/PokemonCard";
import PokemonModal from "../PokemonModal/PokemonModal";

import "./PokemonList.css";

const PokemonList = () => {
  const [pokemons, setpokemons] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [showModal, setShowModal] = useState(false);

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

  //2 when card clicked, fetch details & open modal
  const handleCardClick = async (name) => {
    setShowModal(true);
    setSelectedPokemon(null); //trigger the loading state
    try {
      const { data } = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${name}`
      );
      setSelectedPokemon(data);
    } catch (err) {
      console.error(`Error fetching ${name}: `, err);
    }
  };

  //3 close modal
  const handleClose = () => {
    setShowModal(false);
    setSelectedPokemon(null);
  };

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

      <PokemonModal
        show={showModal}
        onClose={handleClose}
        pokemon={selectedPokemon}
      />
    </>
  );
};

export default PokemonList;
