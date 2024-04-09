const Donors = () => {
    const donors = JSON.parse(localStorage.getItem('donors'));

    return (
        <div className="mainDiv">
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
                    {/* breaks Donors object into each donor */}
                    {donors && Object.entries(donors).map((donor, i) => {
                        return (
                        <tr className="donor-name-object" key={i}>
                            <td className="donor-name">{donor[0]}</td>
                            {/* breaks each donor object into the items that each donor donated */}
                            {donor && Object.entries(donor[1]).map((item, i) => {
                                return (
                                    <tr className="donor-item-object" key={i}>
                                        <td className="donor-item-type">{item[0]}</td>
                                        <td className="donor-item-qty">{item[1]}</td>
                                    </tr>
                                )
                            })}
                        </tr>
                        );
                    })}
                </tbody>
            </div>
        </div>
    );
};

export default Donors;
