import Header from "./Header";
import Character from "./Character";
import Card from "./Card";

const CharacterCards = (props) => {
  const { handleChange, input, filtered, userName, eachCharacter } = props;

  return (
    <div>
      <Header handleChange={handleChange} input={input} />
      <p className="welcome-message">Welcome {userName} ✨</p>
      <Character filtered={filtered} />
    </div>
  );
};
export default CharacterCards;
