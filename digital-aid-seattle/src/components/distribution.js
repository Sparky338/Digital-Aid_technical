import { useEffect, useState } from "react";
import { donationDistribution } from "../mock_backend";

const Distribution = () => {
  // Create a semi-permanent storage for Inventory, Donors, Donations, and
  // Distribution. Would normally be stored in a database.
  if (!localStorage.getItem("inventory")) {
    localStorage.setItem("inventory", "{}");
  }
  if (!localStorage.getItem("donors")) {
    localStorage.setItem("donors", "{}");
  }
  if (!localStorage.getItem("donations")) {
    localStorage.setItem("donations", "{}");
  }
  if (!localStorage.getItem("distribution")) {
    localStorage.setItem("distribution", "{}");
  }

  const [distributionType, setDistributionType] = useState("");
  const [qty, setQty] = useState(0);
  let [distributionRes, setDistributionRes] = useState("");

  const [validationErrors, setValidationErrors] = useState([]);
  const [hasSubmitted, setHasSubmitted] = useState(false);

  useEffect(() => {
    const errors = [];

    if (!distributionType) errors.push("A distribution type must be specified");
    if (!qty) errors.push("A quantity must be entered");
    if (isNaN(qty) || qty <= 0)
      errors.push("Quantity must be a numerical value greater than 0");

    setValidationErrors(errors);
  }, [distributionType, qty]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setDistributionRes("");
    setHasSubmitted(true);

    if (validationErrors.length)
      return alert("Please correct the errors before submitting.");

    // If this was using a database, this would dispatch to the database and return a response.
    await setDistributionRes(donationDistribution(distributionType, qty));

    setDistributionType("");
    setQty(0);
    setHasSubmitted(false);
  };

  return (
    <div className="mainDiv">
      <h1>Distributions</h1>
      <div className="distributions">
        <div className="distribution-container form">
          <form className="distribution-form" onSubmit={handleSubmit}>
            {hasSubmitted && validationErrors.length > 0 && (
              <div className="outer-error">
                <div className="errorhandling">
                  <ul className="errors">
                    {validationErrors.map((error) => (
                      <li className="error-list" key={error}>
                        {error}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
            <label className="distribution-form-label">
              Distribution Type
              <input
                className="distribution-form-input"
                type="text"
                value={distributionType}
                onChange={(e) => setDistributionType(e.target.value)}
                placeholder="Distribution Type"
              />
            </label>
            <label className="distribution-form-label">
              Quantity
              <input
                className="distribution-form-input"
                type="number"
                value={qty}
                onChange={(e) => setQty(e.target.value)}
                placeholder="Quantity"
              />
            </label>
          </form>
        </div>
        <button className="button distribute-button" onClick={handleSubmit}>
          Distribute!
        </button>
        <div className="distribution-response">{distributionRes}</div>
      </div>
    </div>
  );
};

export default Distribution;
