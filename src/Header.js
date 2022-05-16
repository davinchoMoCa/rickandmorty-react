import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

import logo from "./images/logo.png";

const Header = (props) => {
  // input
  const [input, setInput] = useState("");

  const handleChange = ({ target }) => {
    setInput(target.value);
    console.log(input);
  };
  return (
    <header className="Header">
      <Link to="/">
        {" "}
        <img style={{ width: 100 }} src={logo} />
      </Link>

      <input
        style={props.style}
        className="header-input"
        type="text"
        value={props.input}
        onChange={handleChange}
      />
    </header>
  );
};
export default Header;
