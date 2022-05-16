import React from "react";
import Home from "./Home";
import { Link } from "react-router-dom";
import logo from "./images/logo.png";

const Header = () => {
  return (
    <header className="Header">
      <Link to="/">
        {" "}
        <img style={{ width: 100 }} src={logo} />
      </Link>

    <input className="header-input" type="text" />
    </header>
  );
};
export default Header;
