import React from "react";
import "./PokemonCard.css";

const PokemonCard = ({ name }) => {
  return (
    <>
      <div className="pokemon-item">
        <img
          src={`https://img.pokemondb.net/artwork/large/${name}.jpg`}
          alt={name}
        />
        <h4>{name}</h4>
      </div>
    </>
  );
};

export default PokemonCard;
