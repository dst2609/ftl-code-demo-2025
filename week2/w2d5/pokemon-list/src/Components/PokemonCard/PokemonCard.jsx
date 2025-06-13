import React from "react";
import "./PokemonCard.css";

const PokemonCard = ({ name, onClick }) => {
  return (
    <>
      <div className="pokemon-item" onClick={onClick}>
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
