import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

import logo from "./images/logo.png";

const Header = (props) => {
  const { handleChange, input, style, searchOutput } = props
 

  return (
    <header className="Header">
      <Link to="/">
        {" "}
        <img style={{ width: 100 }} src={logo} />
      </Link>

      <input
        style={style}
        className="header-input"
        value={input}
        type="text"
        onChange={handleChange}
      />
    </header>
  );
};
export default Header;
