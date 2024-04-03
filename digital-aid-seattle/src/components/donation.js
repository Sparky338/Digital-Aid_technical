import { useEffect, useState } from "react";
import {donation} from "../mock_backend"

const Donation = () => {

    const [name, setName] = useState("");
    const [donationType, setDonationType] = useState("");
    const [qty, setQty] = useState(0);

    const [validationErrors, setValidationErrors] = useState([]);
    const [hasSubmitted, setHasSubmitted] = useState(false)

    useEffect(() => {
        const errors = [];

        if (!donationType) errors.push("A donation type must be specified");
        if (!qty) errors.push("A quantity must be entered");
        if (isNaN(qty)) errors.push("Quantity must be a numerical value greater than 0");

        setValidationErrors(errors);
    }, [donationType, qty])

    const handleSubmit = (e) => {
        e.preventDefault();
        setHasSubmitted(true);

        if (!name) setName("Anonymous");
        if (validationErrors.length) return alert("Please correct the errors before subimitting.")

        // If this was using a database, this would be async and await the response from the DB
        donation(name, donationType, qty)
    }

    return (
        <div className="mainDiv">
            <div className="donations">
                <h1>Donations</h1>
                <div className="donation-form form">
                    {/* Donation form goes here */}
                </div>
            </div>
        </div>
    )
}

export default Donation;
