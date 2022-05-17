import "./App.css";
import Card from "./Card";
import Character from "./Character";
import Header from "./Header";
import Home from "./Home";
import CharacterCards from "./CharacterCards";
import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

const App = () => {
  // targetting input value in search bar
  const [input, setInput] = useState("");
  const handleChange = ({ target }) => {
    setInput(target.value);
    // console.log(input)
  };

  // fetch data from API
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((res) => res.json())
      .then((data) => setPosts(data.results));
  }, []);

  // mapping each character to the Card component
  let eachCharacter = posts.map((post) => <Card key={post.id} post={post} />);

  // Welcome message based on user's username input
  const [userName, setUserName] = useState("");
  const user = (e) => {
    setUserName(e.target.value);
    // console.log(welcome)
  };

  // localStorage
  useEffect(() => {
    const username = JSON.parse(localStorage.getItem("username"));
    if (username) {
      setUserName(username);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("username", JSON.stringify(userName));
  }, [userName]);

  //  submit event for button
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (userName.length > 3) {
      navigate("/cards");
    } else {
      alert("enter username");
    }
    // console.log(welcome);
  };

  // filter the data from the api
  const [output, setOutput] = useState([]);
  useEffect(() => {
    setOutput([]);
    posts.filter((post) => {
      if (post.name.toLowerCase().includes(input.toLowerCase())) {
        setOutput((prev) => [...prev, post]);
      }
    });
    console.log(output);
  }, [input]);

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
            output={output}
            handleChange={handleChange}
            eachCharacter={eachCharacter}
            userName={userName}
          />
        }
      ></Route>
    </Routes>
  );
};

export default App;

// const savedName = localStorage.getItem("username")
//     const initialValue = JSON.parse(savedName)
//     return initialValue || ""
