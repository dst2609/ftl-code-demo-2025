import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import PokemonList from "./Components/PokemonList/PokemonList";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      <div className="app">
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
            <Route path="/register" element={<Register setIsLoggedIn={setIsLoggedIn} />} />
            {/*

              : <button onClick={() => setIsLoggedIn(false)}>Logout</button>} */}

            <Route path="/" element={<PokemonList />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
};

export default App;
