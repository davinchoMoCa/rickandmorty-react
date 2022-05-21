import Character from "./Character";
import Card from "./Card";
import Header from "./Header";

import { Link, useNavigate, useParams } from "react-router-dom";
// import back from "./images/back.png";
import white from "./images/back-white.png";
import CharacterCards from "./CharacterCards";
import Profile from "./Profile";

const CharacterProfiles = (props) => {
  const { style, characters, moreCards, posts, moreCardsProfiles } = props;
  const params = useParams();
  const profileId = params.profileId;

  const navigate = useNavigate();

  let renderedProfile = () => {
    if (profileId >= 1 && profileId <= 20) {
      return characters.filter((char) => profileId === char.key);
    } else {
      return moreCardsProfiles.filter((more) => profileId === more.key);
    }
  };

  return (
    <div>
      <Header style={{ display: "none" }} />
      <img onClick={() => navigate(-1)} className="back-btn" src={white} />
      <div></div>

      <section>{renderedProfile()}</section>
    </div>
  );
};

export default CharacterProfiles;
