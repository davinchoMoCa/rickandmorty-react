import { Link } from "react-router-dom";
import logo from "./images/logo.png";

const Header = (props) => {
  const { handleChange, input, style, output } = props;

  return (
    <header className="Header">
      <Link to="/">
        {" "}
        <img style={{ width: 100 }} src={logo} />
      </Link>

      <input
        style={style}
        className="header-input"
        type="text"
        onChange={handleChange}
      />
    </header>
  );
};
export default Header;
