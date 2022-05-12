import React, { useState, useEffect } from "react";
import { Fetch } from "react-data-fetching";
import Card from "./Card"

const Character = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch("https://rickandmortyapi.com/api/character")
            .then((res) => res.json())
            .then((data) => setPosts(data.results))
    }, []);

    return (
        <div>
            <section className="card-container">
             {posts.map(post => <Card post={post} />)}
            </section>
        </div>
    );
};
export default Character;
//  