import React, { useState, useEffect } from "react";
import Card from "./Card";

const Character = ({posts}) => {
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