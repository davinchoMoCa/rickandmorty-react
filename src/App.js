import "./App.css";
import Card from "./Card";
import Character from "./Character";
import Header from "./Header";
import Home from "./Home";
import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import CharacterCards from "./CharacterCards";

const App = () => {

  const [posts, setPosts] = useState([]);

  // fetch data
  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((res) => res.json())
      .then((data) => setPosts(data.results));
  }, []);

  // const [searchInput, setSearchInput] = useState("");
  // const [searchFilter, setSearchFilter] = useState([]);

  // // input search
  // useEffect(() => {
  //   searchFilter([]);
  //   posts.filter((post) => {
  //     if (post.results.name.toLowerCase().includes(searchInput.toLowerCase())) {
  //       setSearchFilter((prev) => [...prev, post]);
  //     }
  //   });
  // });
  // //  input

  // const handleChange = (event) => {
  //   setSearchFilter(event.target.value);
  // };
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>

      <Route path="/cards" element={<CharacterCards posts={posts} />}></Route>
    </Routes>
  );
};

export default App;
