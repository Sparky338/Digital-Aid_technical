import { Link } from "react-router-dom";
import "../css/homepage.css"

const Homepage = () => {
  return (
    <div className="mainDiv">
      <h1 className="title"> Best Shelter in the PNW! </h1>
      <h2 className="pageDescription">
        Welcome to the homepage of the shelter's inventory control page. Please use
        the links below or on the navigation bar above to access donation
        registration, distribution, inventory, and donors list.
      </h2>
      <h2 className="pageDescription">
        On the donation and distibution pages, there is a field called donation/
        distribution type. This is where you will input what kind of item the donation
        or distribution is. For example, a shirt would be clothing. Please use
        the singular form of a type even if multiple items are donated or distributed.
      </h2>
      <div className="links-list">
        <Link to="/donation" className="link donation-link">
            <div className="donation link">Donation</div>
        </Link>
        <Link to="/distribution" className="link distribution-link">
            <div className="distribution link">Distribution</div>
        </Link>
        <Link to="/inventory" className="link inventory-link">
            <div className="inventory link">Inventory</div>
        </Link>
        <Link to="/donors" className="link donators-link">
            <div className="donors link">Donors</div>
        </Link>

      </div>
    </div>
  );
};

export default Homepage;
