import Character from "./Character";
import Card from "./Card";
import Header from "./Header";
import { Link, useNavigate } from "react-router-dom";
import back from "./images/back.png";
import CharacterCards from "./CharacterCards";

const CharacterProfiles = (props) => {
  const { style } = props;
  const navigate = useNavigate();
  return (
    <div>
      <Header style={{ display: "none" }} />
      <img onClick={() => navigate(-1)} className="back-btn" src={back} />
      <div>
        <h1 style={{ margin: "1em 0", textAlign: "center" }}>
          Character Profile
        </h1>
      </div>
      <section></section>
    </div>
  );
};

export default CharacterProfiles;
