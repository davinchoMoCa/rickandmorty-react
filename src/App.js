import "./App.css";
import Card from "./Card";
import Character from "./Character";
import Header from "./Header";
import Home from "./Home";
import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import CharacterCards from "./CharacterCards";

const App = () => {

  // fetch data from API
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((res) => res.json())
      .then((data) => setPosts(data.results));
  }, []);

  // mapping each character to the Card component
  let eachCharacter = posts.map((post) => (
    <Card key={post.id} post={post} />
  ))

  // targetting input value in search bar
  const [input, setInput] = useState("");
  const handleChange = ({ target }) => {
    setInput(target.value);
    console.log(input)
  };
  
  // output
  const [searchOutput, setSearchOutput] = useState([]);
  useEffect(() => {
    posts.filter((character) => {
      if (character.name.toLowerCase().includes(input.toLowerCase())) {
        return setSearchOutput((prev) => [...prev, character]);
      }
    });
  }, []);
  


  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>

      <Route
        path="/cards"
        element={
          <CharacterCards
            
            searchOutput={searchOutput}
            handleChange={handleChange}
            posts={posts}
            eachCharacter={eachCharacter}
          />
        }
      >
      </Route>
    </Routes>
  );
};

export default App;

