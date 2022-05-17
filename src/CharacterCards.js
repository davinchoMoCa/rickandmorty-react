import React from "react";
import Header from "./Header";
import Character from "./Character";

const CharacterCards = (props) => {
  const { handleChange, welcome, output, eachCharacter } = props;
  // console.log(welcome)
  return (
    <div>
      <Header handleChange={handleChange} />
      <p className="welcome-message">Welcome {welcome} ✨</p>
      <Character eachCharacter={eachCharacter} />
    </div>
  );
};
export default CharacterCards;
