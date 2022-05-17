import React from "react";
import Header from "./Header";
import { Link } from "react-router-dom";
import rick from "./images/rick.png";
import morty from "./images/morty.png";

const Home = (props) => {
  const { welcomeMess, handleSubmit, input } = props;
  return (
    <div className="Home">
      <Header style={{ display: "none" }} />
      <section className="login">
        <div className="background-image">
          <img src={rick} alt="Rick from Rick and Morty" />
          <img src={morty} alt="Morty from Rick and Morty" />
        </div>

        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <h1 style={{ marginBottom: 20 }}>Welcome</h1>
            <input
              type="text"
              name=""
              onChange={welcomeMess}
              placeholder="Username"
            />

            {/* <Link to="/cards"> */}
            <button className="form--submit">View Cards</button>
            {/* </Link> */}
          </form>
        </div>
      </section>
    </div>
  );
};
export default Home;
