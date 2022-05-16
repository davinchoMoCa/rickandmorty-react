import "./App.css";
import Card from "./Card";
import Character from "./Character";
import Header from "./Header";
import Home from "./Home";
import React from "react";
import { Routes, Route } from "react-router-dom";
import CharacterCards from "./CharacterCards";

const App = () => {
  return (
    <Routes>
     <Route path="/" element={<Home />}></Route>
        
     <Route path="/cards" element={<CharacterCards />}></Route>
      
    </Routes>
  );
};

export default App;
