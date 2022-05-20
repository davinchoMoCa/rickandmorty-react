import Character from "./Character";
import Card from "./Card";
import Header from "./Header";
import { Link, useNavigate, useParams } from "react-router-dom";
import back from "./images/back.png";
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
      <img onClick={() => navigate(-1)} className="back-btn" src={back} />
      <div>
        
      </div>

      <section>{characters.filter((char) => profileId === char.key)}</section>
    </div>
  );
};

export default CharacterProfiles;
