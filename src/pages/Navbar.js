import "./Navbar.css";
import Logo from "../img/text.png";
import Button from "../components/form/Button";
import Select from "../components/form/Select";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__container">
        <img src={Logo} alt="logo" />
        <div>
          <Select>
            <option value="en">English</option>
            <option value="ba">Bosnian</option>
          </Select>
          <Button>Sign In</Button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
