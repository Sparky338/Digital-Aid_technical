const Donors = () => {
    const donors = JSON.parse(localStorage.getItem('donors'));

    return (
        <div className="mainDiv">
        <div className="donors">
            <h1>Donors</h1>
            <div className="donors-display-table">
            <tbody className="table-body" border="0" cellSpacing="0">
                <thead className="table-header">
                <tr>
                    <th className="donor-name">Donor Name</th>
                    <th className="donor-donation-type">Donation Type</th>
                    <th className="donor-donation-qty">Quantity</th>
                </tr>
                </thead>
                {donors && Object.entries(donors).map((donor, i) => {
                    return (
                    <tr className="donor-name-object" key={i}>
                        {donor && Object.entries(donor).map((item, i) => {
                            return (
                                <td className="donors-item-name">{item}</td>
                                // <td className="donors-item-quantity">
                                // {donor[item[0]]}
                                // </td>

                            )
                        })}
                    </tr>
                    );
                })}
            </tbody>
            </div>
        </div>
        </div>
    );
};

export default Donors;
