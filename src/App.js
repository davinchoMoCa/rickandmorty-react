import "./App.css";
import Card from "./Card";
import Character from "./Character";
import Header from "./Header";
import Home from "./Home";
import CharacterCards from "./CharacterCards";
import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import CharacterProfiles from "./CharacterProfiles";

const App = () => {
  // Fetch data from API
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((res) => res.json())
      .then((data) => setPosts(data.results));
  }, []);

  // Targetting input value in search bar
  const [input, setInput] = useState("");
  const handleChange = ({ target }) => {
    setInput(target.value);
  };

  // Filter the data from the api
  // Mapping each character to the Card component
  const filtered = posts
    .filter((post) => {
      if (input === "") {
        return post;
      } else {
        return post.name.toLowerCase().includes(input.toLowerCase());
      }
    })
    .map((post) => <Card key={post.id} post={post} />);

  // Welcome message based on user's username input
  const [userName, setUserName] = useState("");
  const user = (e) => {
    setUserName(e.target.value);
  };

  // LocalStorage for saving username input
  useEffect(() => {
    const username = JSON.parse(localStorage.getItem("username"));
    if (username) {
      setUserName(username);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("username", JSON.stringify(userName));
  }, [userName]);

  //  Submit event for button -
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (userName.length > 3) {
      navigate("/cards");
    } else {
      alert("enter username");
    }
  };

  return (
    <Routes>
      <Route
        path="/"
        element={<Home handleSubmit={handleSubmit} user={user} />}
      ></Route>

      <Route
        path="/cards"
        element={
          <CharacterCards
            input={input}
            filtered={filtered}
            handleChange={handleChange}
            userName={userName}
          />
        }
      ></Route>

      <Route
        path="/characters/:profileId"
        element={<CharacterProfiles />}
      ></Route>
    </Routes>
  );
};

export default App;
