import React from "react";
import Header from "./Header";
import Character from "./Character";

const CharacterCards = (props) => {
  const { handleChange, userName, eachCharacter } = props;
  return (
    <div>
      <Header handleChange={handleChange} />
      <p className="welcome-message">Welcome {userName} ✨</p>
      <Character eachCharacter={eachCharacter} />
    </div>
  );
};
export default CharacterCards;
