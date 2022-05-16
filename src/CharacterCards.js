import React from "react";
import Header from "./Header";
import Character from "./Character";

const CharacterCards = (props) => {
  const { posts, handleChange, searchOutput, eachCharacter } = props
  return (
    <div>
      <Header
        handleChange={handleChange}
        searchOutput={searchOutput}
      />
      <Character 
         eachCharacter={eachCharacter}
      />
    </div>
  );
};
export default CharacterCards;
