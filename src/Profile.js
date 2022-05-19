import CharacterProfiles from "./CharacterProfiles";

const Profile = ({ character }) => {
  return (
    <div className="card">
      <div className="card-front">
        <img src={character.image} alt="" />
        <div className="card-text">
          <p> Name: {character.name}</p>
          <p> Species: {character.species}</p>
          <p>Status:{character.status}</p>
        </div>
      </div>
    </div>
  );
};
export default Profile;
