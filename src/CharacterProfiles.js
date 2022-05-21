import Character from "./Character";
import Card from "./Card";
import Header from "./Header";
import { Link, useNavigate, useParams } from "react-router-dom";
// import back from "./images/back.png";
import white from "./images/back-white.png"
import CharacterCards from "./CharacterCards";
import Profile from "./Profile";

const CharacterProfiles = (props) => {
  const { style, characters, posts } = props;

  const params = useParams();
  const profileId = params.profileId;

  const navigate = useNavigate();
  let charName = posts.map(char => char.name)
  let charId = posts.map(char => char.id)

  return (
    <div>
      <Header style={{ display: "none" }} />
        <Link to="/characters">
        {" "}
        <img className="back-btn" alt="Back to Characters Page" src={white} />
      </Link>
      <div>
        
      </div>

      <section>{characters.filter((char) => profileId === char.key)}</section>
    </div>
  );
};

export default CharacterProfiles;
