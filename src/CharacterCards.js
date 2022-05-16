import React from "react";
import Header from "./Header";
import Character from "./Character";

const CharacterCards = ({posts}) => {
  return (
    <div>
      <Header />
      <Character posts={posts} />
    </div>
  );
};
export default CharacterCards;
