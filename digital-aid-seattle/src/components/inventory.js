import "../css/inventory.css"

const Inventory = () => {
  const inventory = JSON.parse(localStorage.getItem("inventory"));

  return (
    <div className="mainDiv">
      <h1>Inventory</h1>
      <div className="inventory-display-table">
        <tbody className="table-body" border="0" cellSpacing="0">
          <thead className="table-header">
            <tr className="inventory-header">
              <th className="inventory-donation-type">Donation Type</th>
              {/* <th className="spacer" width="20px">&nbsp;</th> */}
              <th className="inventory-donation-qty">Quantity</th>
            </tr>
          </thead>
          {inventory &&
            Object.entries(inventory).map((item, i) => {
              return (
                <tr className="inventory-item" key={i}>
                  <td className="inventory-item-name">{item[0]}</td>
                  <td className="inventory-item-quantity">
                    {inventory[item[0]]}
                  </td>
                </tr>
              );
            })}
        </tbody>
      </div>
    </div>
  );
};

export default Inventory;
