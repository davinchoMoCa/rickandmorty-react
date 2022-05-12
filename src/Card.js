import React from "react";
import Character from "./Character"

const Card = ({post}) => {

    return (
        <div className="card">
            <div className="card-front">
                <img src={post.image} alt="" />
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
