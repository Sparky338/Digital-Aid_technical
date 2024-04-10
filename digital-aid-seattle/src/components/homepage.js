import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div className="mainDiv">
      <h1 className="title"> Best Shelter in the PNW! </h1>
      <h2 className="pageDescription">
        Here is the homepage of the shelter's inventory control page. Please use
        the links below or on the navigation bar to access the donation
        registration, distribution, or inventory and donors reports.
      </h2>
      <div className="links-list">
        <Link to="/donation" className="link donation-link">
            <div className="donation">Donation</div>
        </Link>
        <Link to="/distribution" className="link distribution-link">
            <div className="distribution">Distribution</div>
        </Link>
        <Link to="/inventory" className="link inventory-link">
            <div className="inventory">Inventory</div>
        </Link>
        <Link to="/donors" className="link donators-link">
            <div className="donors">Donors</div>
        </Link>

      </div>
    </div>
  );
};

export default Homepage;
