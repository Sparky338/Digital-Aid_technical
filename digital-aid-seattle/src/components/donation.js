import { useEffect, useState } from "react";

const Donation = () => {

    const [name, setName] = useState("");
    const [donationType, setDonationType] = useState("");
    const [qty, setQty] = useState(0);

    const [validationErrors, setValidationErrors] = useState([]);

    useEffect(() => {
        const errors = [];

        if (!donationType) errors.push("A donation type must be specified");
        if (!qty) errors.push("A quantity must be entered");
        if (isNaN(qty)) errors.push("Quantity must be a numerical value greater than 0");

        setValidationErrors(errors);
    }, [donationType, qty])

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
