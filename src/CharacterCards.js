import Header from "./Header";
import Character from "./Character";
import Card from "./Card";
import React from "react";

const CharacterCards = (props) => {
  const { handleChange, filtered, userName, moreCards, nextPage } = props;
  const [clicked, setClicked] = React.useState(false);

  const wasClicked = () => {
    nextPage();
    setClicked(true);
  };

  return (
    <div>
      {/*  data for the Cards page */}
      <Header handleChange={handleChange} />
      <p className="welcome-message">Welcome {userName} ✨</p>
      <Character filtered={filtered} />
      <div>{wasClicked && <Character moreCards={moreCards} />}</div>
      <div style={{ textAlign: "center", margin: "" }}>
        <button className="moreChar-btn" onClick={wasClicked}>
          MORE
        </button>
      </div>
    </div>
  );
};
export default CharacterCards;
