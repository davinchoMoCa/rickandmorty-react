import { Link } from "react-router-dom";
import logo from "./images/logo.png";

const Header = (props) => {
  const { handleChange, style, input } = props;
  return (
    <header className="Header">
      <Link to="/">
        {" "}
        <img style={{ width: 100 }} src={logo} />
      </Link>

      <input
        style={style}
        className="header-input"
        type="search"
        value={input}
        placeholder="Search Character..."
        onChange={handleChange}
      />
    </header>
  );
};
export default Header;
