import Character from "./Character";
import { Link } from "react-router-dom";

const MoreCards = ({ moreChars }) => {
  return (
    <div className="card">
      <div className="card-front">
        <Link to={`${moreChars.id}`}>
          {""}
          <img src={moreChars.image} alt="" />{" "}
        </Link>
        <p> {moreChars.name}</p>
      </div>
    </div>
  );
};
export default MoreCards;
