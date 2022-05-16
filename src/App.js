import "./App.css";
import Card from "./Card";
import Character from "./Character";
import Header from "./Header";
import Home from "./Home";
import React from "react";
import { Routes, Route } from "react-router-dom";
import CharacterCards from "./CharacterCards";

const App = () => {
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

      <Route path="/cards" element={<CharacterCards />}></Route>
    </Routes>
  );
};

export default App;
