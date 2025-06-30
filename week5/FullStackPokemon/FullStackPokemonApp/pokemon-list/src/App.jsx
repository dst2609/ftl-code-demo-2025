import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import PokemonList from "./Components/PokemonList/PokemonList";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      <div className="App">
        {!isLoggedIn ? (
          <>
            <Login setIsLoggedIn={setIsLoggedIn} />
            <Register setIsLoggedIn={setIsLoggedIn} />
          </>
        )
          : <button onClick={() => setIsLoggedIn(false)}>Logout</button>}

        <PokemonList />
      </div>
    </>
  );
};

export default App;
