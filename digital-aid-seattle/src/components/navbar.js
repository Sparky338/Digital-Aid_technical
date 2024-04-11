import { NavLink, Link } from "react-router-dom";
import shelterLogo from "../images/android-chrome-512x512.png";
import "../css/navbar.css";

const NavBar = () => {
  return (
    <div className="main-nav-bar">
      <div className="links">
        <div className="logo">
          <Link className={"home-logo link"} to="/" exact={true}>
            <img
              className="shelter-logo"
              src={shelterLogo}
              alt="Shelter logo"
            />
          </Link>
        </div>
        <NavLink className={"home-link nav-link"} to="/" exact={true}>
          Home
        </NavLink>
        <NavLink className={"donation-link nav-link"} to="/donation">
          Donation
        </NavLink>
        <NavLink className={"distribution-link nav-link"} to="/distribution">
          Distribution
        </NavLink>
        <NavLink className={"inventory-link nav-link"} to="/inventory">
          Inventory
        </NavLink>
        <NavLink className={"donors-link nav-link"} to="/donors">
          Donors
        </NavLink>
      </div>
    </div>
  );
};

export default NavBar;
