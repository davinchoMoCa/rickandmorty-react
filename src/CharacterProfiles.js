import Character from "./Character";
import Card from "./Card";
import Header from "./Header";
import { Link, useNavigate, useParams } from "react-router-dom";
import back from "./images/back.png";
import CharacterCards from "./CharacterCards";
import Profile from "./Profile";

const CharacterProfiles = (props) => {
  const { style, characters } = props;

  const params = useParams();
  const profileId = params.profileId;

  // const { profileId } = useParams(profileId)
  const navigate = useNavigate();
  return (
    <div>
      <Header style={{ display: "none" }} />
      <img onClick={() => navigate(-1)} className="back-btn" src={back} />
      <div>
        <h1 style={{ margin: "1em 0", textAlign: "center" }}>
          Character Profile: {characters[profileId].name}
        </h1>
      </div>

      <section>
        {/*  I want to display the character whose id matches with the profile id */}
        {/* {characters} */}
        {characters.filter(char => profileId === char.key )}
      </section>
    </div>
  );
};

export default CharacterProfiles;
{
  /*  */
}
