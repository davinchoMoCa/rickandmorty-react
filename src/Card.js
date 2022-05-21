import Character from "./Character";
import { Link } from "react-router-dom";

const Card = ({ post }) => {
  return (
    <div className="card">
      <div className="card-front">
        <Link to={`${post.id}`}>
          {""}
          <img src={post.image} alt="" />{" "}
        </Link>
        <p> {post.name}</p>
      </div>
    </div>
  );
};
export default Card;
