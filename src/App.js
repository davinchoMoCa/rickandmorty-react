import "./App.css";
import Card from "./Card";
import Character from "./Character";
import Header from "./Header";
import Home from "./Home";
import CharacterCards from "./CharacterCards";
import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

const App = () => {
  // fetch data from API
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((res) => res.json())
      .then((data) => setPosts(data.results));
  }, []);

  // targetting input value in search bar
  const [input, setInput] = useState("");
  const handleChange = ({ target }) => {
    setInput(target.value);
    // console.log(input)
  };

  // Welcome message based on user's username input
  const [welcome, setWelcome] = useState("");
  const welcomeMess = (e) => {
    setWelcome(e.target.value);
    // console.log(welcome)
  };
  //  submit event for button
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (welcome.length > 3) {
      navigate("/cards");
    } else {
      alert("enter username");
    }
    // console.log(welcome);
  };
  // oswhytecodes
  // filter the data from the api
  const [output, setOutput] = useState([]);
  useEffect(() => {
    setOutput([]);
    posts.filter((post) => {
      if (post.name.toLowerCase().includes(input.toLowerCase())) {
        setOutput((prev) => [...prev, post]);
      }
    });
    // console.log(output);
  }, [input]);
  // mapping each character to the Card component
  let eachCharacter = posts.map((post) => <Card key={post.id} post={post} />);
  return (
    <Routes>
      <Route
        path="/"
        element={<Home handleSubmit={handleSubmit} welcomeMess={welcomeMess} />}
      ></Route>

      <Route
        path="/cards"
        element={
          <CharacterCards
            handleChange={handleChange}
            posts={posts}
            eachCharacter={eachCharacter}
            welcome={welcome}
          />
        }
      ></Route>
    </Routes>
  );
};

export default App;

