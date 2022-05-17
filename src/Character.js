import React from "react";
import Card from "./Card";

const Character = (props) => {
  const { filtered } = props;
  return (
    <div>
      <section className="card-section">
        <div className="card-container"> {filtered}</div>
      </section>
    </div>
  );
};
export default Character;
