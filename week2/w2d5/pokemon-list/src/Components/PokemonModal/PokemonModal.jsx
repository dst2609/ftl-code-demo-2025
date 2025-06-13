import React from "react";
import "./PokemonModal.css";

const PokemonModal = ({ show, onClose, pokemon }) => {
  if (!show) return null;

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <button onClick={onClose}>X</button>
        </div>
        <div className="modal-body">
          {!pokemon ? (
            <p>Loading....</p>
          ) : (
            <div className="details">
              <h2>
                {pokemon.id} {pokemon.name.toUpperCase()}
              </h2>
              <img src={pokemon.sprites.front_default} alt={pokemon.name} />
              <p>
                <strong>Types:</strong>{" "}
                {pokemon.types.map((t) => t.type.name).join(", ")}
              </p>
              <p>
                <strong>Height:</strong> {pokemon.height / 10} m
              </p>
              <p>
                <strong>Weight:</strong> {pokemon.weight / 10} kg
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PokemonModal;
