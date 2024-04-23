import { Link } from "react-router-dom";
import "../css/homepage.css";

const Page404 = () => {
  return (
    <div className="mainDiv">
      <h1 className="title"> Best Shelter in the PNW! </h1>
      <h2 className="pageDescription">
        It looks like you've arrived on this page on accident! It must have been
        a pesky broken link or bad redirect. We will try to get it fixed as soon
        as possible, but please let your developer know so they can work on it!
        In the meantime, please return to the {` `}
        <Link to="/" className="link homepage-link">
            Homepage
        </Link>
        .
      </h2>
    </div>
  );
};

export default Page404;
