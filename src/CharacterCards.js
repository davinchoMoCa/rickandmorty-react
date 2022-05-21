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

      <div style={{textAlign:"center", margin:"2em 0 6em"}}>
       
      </div>
    </div>
  );
};
export default CharacterCards;
