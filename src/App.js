import "./App.css";
import Card from "./Card";
import Character from "./Character";
import Header from "./Header";
import Home from "./Home";
import CharacterCards from "./CharacterCards";
import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import CharacterProfiles from "./CharacterProfiles";
import MoreCards from "./MoreCards";
import MoreCardsProfile from "./MoreCardsProfile";
import Profile from "./Profile";

const App = () => {
  // Fetch data from API
  let api = "https://rickandmortyapi.com/api/character";
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch(api)
      .then((res) => res.json())
      .then((data) => setPosts(data.results));
  }, [api]);

  // Targetting input value in search bar
  const [input, setInput] = useState("");
  const handleChange = ({ target }) => {
    setInput(target.value);
  };

  // populate the page with more character cards
  const [moreCharacters, setMoreCharacters] = useState([]);
  const [count, setCount] = useState(1);

  const nextPage = () => {
    setCount((prev) => prev + 1);
    return moreCards;
  };

  // more cards
  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/?page=${count}`)
      .then((res) => res.json())
      .then((data) => setMoreCharacters(data.resultsgit ))
  }, [count]);

  const moreCards = moreCharacters.map(
    (moreChars) =>
      count > 1 && <MoreCards key={moreChars.id} moreChars={moreChars} />
  );

  const moreCardsProfiles = moreCharacters.map((moreChars) => (
    <MoreCardsProfile key={moreChars.id} moreChars={moreChars} />
  ));

  // useEffect(() => {
  //   setCount(JSON.parse(window.localStorage.getItem("count")));
  // }, []);

  // useEffect(() => {
  //   window.localStorage.setItem("count", count);
  // }, [count]);

  // Filter the data from the api
  // Mapping each character to the Card component (the first set of cards)
  const filtered = posts
    .filter((post) => {
      if (input === "") {
        return post;
      } else {
        return post.name.toLowerCase().includes(input.toLowerCase());
      }
    })
    .map((post) => <Card key={post.id} post={post} />);

  // profile card data
  const characters = posts.map((character) => (
    <Profile key={character.id} character={character} />
  ));

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
      navigate("/characters");
    } else {
      alert("enter username");
    }
  };

  // jsx
  return (
    <Routes>
      <Route
        path="/"
        element={<Home handleSubmit={handleSubmit} user={user} />}
      ></Route>

      <Route
        path="/characters"
        element={
          <CharacterCards
            // filtering data
            input={input}
            filtered={filtered}
            handleChange={handleChange}
            // home page username
            userName={userName}
            // raw data from the api call
            posts={posts}
            // populating more cards via the click event
            moreCards={moreCards}
            nextPage={nextPage}
          />
        }
      ></Route>

      <Route
        path="/characters/:profileId"
        element={
          <CharacterProfiles
            moreCards={moreCards}
            characters={characters}
            moreCardsProfiles={moreCardsProfiles}
            // raw data from the api call
            posts={posts}
          />
        }
      ></Route>
    </Routes>
  );
};

export default App;
