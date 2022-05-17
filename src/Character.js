import React, { useState, useEffect } from "react";
import Card from "./Card";

const Character = (props) => {
  const { eachCharacter } = props;
  return (
    <div>
      <section className="card-section">
        <div className="card-container">{eachCharacter}</div>
      </section>
    </div>
  );
};
export default Character;
