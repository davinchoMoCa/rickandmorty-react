import Character from "./Character";
import { Link } from "react-router-dom";

const Card = ({ post }) => {
  return (
    <div className="card">
      <div className="card-front">
        <Link to={`/characters/${post.id}`}>
          {""}
          <img src={post.image} alt="" />{" "}
        </Link>
        <p> {post.name}</p>
      </div>
      <div className="card-back">
        <p>{post.species}</p>
        <p>{post.status}</p>
        <img src={post.image} alt="" />
      </div>
    </div>
  );
};
export default Card;
