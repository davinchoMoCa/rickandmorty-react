import CharacterProfiles from "./CharacterProfiles";
import { useState } from "react";
import { Link } from "react-router-dom";

const Profile = ({ character, posts }) => {
  // button to show more character details
  const [moreInfo, setMoreInfo] = useState(false);
  const handleClick = () => {
    setMoreInfo((prev) => !prev);
  };
  // switching through characters

  const [count, setCount] = useState(1);

  let charIdIncrement = character.id + 1;
  let charIdDecrement = character.id - 1;

  // h1 style
  const h1Style = {
    margin: "1em 0",
    textAlign: "center",
    fontSize: "2em",
    color: "rgb(48, 88, 112)",
  };
  //  profile
  const profileCard = {
    display: "flex",
    gap: ".2em",
    textAlign: "center",
    marginTop: ".5em",
  };
  return (
    <section>
      <h1 style={h1Style}> Character : {character.name}</h1>

      <div className="card-profile">
        <div className="profile-card">
          <div className="profile-front">
            <img src={character.image} alt="" />
          </div>
          <div className="profile-text">
            <span className="bold-text" style={{ textAlign: "center" }}>
              {" "}
              {character.name}{" "}
            </span>
            <div style={profileCard}>
              <p>{character.species}</p>
              <span> | </span>
              <p>{character.gender}</p>
            </div>
          </div>
          <div>
            {/* change the button text when the hidden info is show or not */}
            {!moreInfo ? (
              <button
                onClick={handleClick}
                style={{ marginTop: "15px" }}
                className="profile-btn"
              >
                Show More
              </button>
            ) : (
              <button
                onClick={handleClick}
                style={{ marginTop: "15px" }}
                className="profile-btn"
              >
                Hide
              </button>
            )}
          </div>

          {/* more data when show more is clicked */}
          {moreInfo && (
            <div className="profile-seemore">
              <div>
                <li> Location: {character.location.name}</li>
                <li>
                  {" "}
                  Seen in at least {character.episode.length}{" "}
                  {character.episode.length > 2 ? "episodes" : "episode"}{" "}
                </li>
                <li>
                  {character.name} is <span> {character.status}</span>
                </li>
              </div>
            </div>
          )}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "1em",
            marginTop: "2em",
            alignItems: "center",
            width: "100%",
          }}
        >
          {/*  buttons to navigate through characters */}
          <Link to={`/characters/${charIdDecrement}`}>
            {" "}
            <button>Last</button>
          </Link>
          <Link to={`/characters/${charIdIncrement}`}>
            {" "}
            <button>Next</button>{" "}
          </Link>
        </div>
      </div>
    </section>
  );
};
export default Profile;
