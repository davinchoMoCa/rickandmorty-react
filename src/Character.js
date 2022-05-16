import React, { useState, useEffect } from "react";
import Card from "./Card";

const Character = () => {
  const [posts, setPosts] = useState([]);

  // fetch data
  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((res) => res.json())
      .then((data) => setPosts(data.results));
  }, []);

  
  return (
    <div>
    
      <section className="card-section">
        <div className="card-container">
          {posts.map((post) => (
            <Card key={post.id} post={post} />
          ))}
        </div>
      </section>
    </div>
  );
};
export default Character;