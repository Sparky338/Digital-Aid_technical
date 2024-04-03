import { useEffect, useState } from "react";
import {donation} from "../mock_backend"

const Donation = () => {

    // Create a semi-permanent storage for Inventory, Donors, Donations, and
    // Distribution. Would normally be stored in a database.
    if (!localStorage.getItem('inventory')) {
        localStorage.setItem('inventory', "{}");
    }
    if (!localStorage.getItem('donors')) {
        localStorage.setItem('donors', "{}");
    }
    if (!localStorage.getItem('donations')) {
        localStorage.setItem('donations', "{}");
    }
    if (!localStorage.getItem('distribution')) {
        localStorage.setItem('distribution', "{}");
    }

    const [name, setName] = useState("");
    const [donationType, setDonationType] = useState("");
    const [qty, setQty] = useState(0);
    let [donationRes, setDonationRes] = useState("");

    const [validationErrors, setValidationErrors] = useState([]);
    const [hasSubmitted, setHasSubmitted] = useState(false);

    useEffect(() => {
        const errors = [];

        if (!donationType) errors.push("A donation type must be specified");
        if (!qty) errors.push("A quantity must be entered");
        if (isNaN(qty) || qty <= 0) errors.push("Quantity must be a numerical value greater than 0");

        setValidationErrors(errors);
    }, [donationType, qty]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setDonationRes("");

        if (!name) setName("Anonymous");

        setHasSubmitted(true);
        if (validationErrors.length) return alert("Please correct the errors before submitting.")

        // If this was using a database, this would dispatch to the database and return a response.
        await setDonationRes(donation(name, donationType, qty));

        setName("");
        setDonationType("");
        setQty(0);
        setHasSubmitted(false)
    }

    return (
        <div className="mainDiv">
            <div className="donations">
                <h1>Donations</h1>
                <div className="donation-container form">
                    <form className="donation-form" onSubmit={handleSubmit}>
                        {hasSubmitted && validationErrors.length > 0 && (
                            <div className="outer-error">
                                <div className="errorhandling">
                                    <ul className="errors">
                                        {validationErrors.map(error => (
                                            <li className="error-list" key={error}>{error}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        )}
                        <label className="donation-form-label">
                            Name
                            <input
                                className="donation-form-input"
                                type="text"
                                value={name}
                                onChange={e => setName(e.target.value)}
                                placeholder="Name"
                            />
                        </label>
                        <label className="donation-form-label">
                            Donation Type
                            <input
                                className="donation-form-input"
                                type="text"
                                value={donationType}
                                onChange={e => setDonationType(e.target.value)}
                                placeholder="Donation Type"
                            />
                        </label>
                        <label className="donation-form-label">
                            Quantity
                            <input
                                className="donation-form-input"
                                type="number"
                                value={qty}
                                onChange={e => setQty(e.target.value)}
                                placeholder="Quantity"
                            />
                        </label>
                    </form>
                </div>
                <button className="button donation-button" onClick={handleSubmit}>Donate!</button>
                <div className="donation-response">
                    {donationRes}
                </div>
            </div>
        </div>
    )
}

export default Donation;
