import { useEffect, useState } from "react";
import { donationDistribution } from "../mock_backend";

const Distribution = () => {

    const [donationType, setDonationType] = useState("");
    const [qty, setQty] = useState(0);
    let [distributionRes, setDistributionRes] = useState("");

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
        setDistributionRes("");
        setHasSubmitted(true);

        if (validationErrors.length) return alert("Please correct the errors before submitting.")

        // If this was using a database, this would dispatch to the database and return a response.
        await setDistributionRes(donationDistribution(donationType, qty));

        setDonationType("");
        setQty(0);
        setHasSubmitted(false)
    }

    return (
        <div className="mainDiv">
            <div className="distributions">
                <h1>Distributions</h1>

            </div>
        </div>
    )
}

export default Distribution
