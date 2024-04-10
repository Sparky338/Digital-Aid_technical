import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="main-nav-bar">
      <h1>NavBar placeholder</h1>
      <div className="logo"></div>
      <div className="links">
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
