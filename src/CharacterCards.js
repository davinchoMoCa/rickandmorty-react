import Header from "./Header";
import Character from "./Character";
import Card from "./Card";

const CharacterCards = (props) => {
  const { handleChange, filtered, userName } = props;

  return (
    <div>
      {/*  data for the Cards page */}
      <Header handleChange={handleChange} />
      <p className="welcome-message">Welcome {userName} ✨</p>
      <Character filtered={filtered} />
    </div>
  );
};
export default CharacterCards;
