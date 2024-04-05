const Inventory = () => {
    const inventory = JSON.parse(localStorage.getItem('inventory'));
    
    return (
        <div className="mainDiv">
            <h1>Inventory</h1>
            <div className="inventory-display-table">
                <tbody className="table-body">

                </tbody>
            </div>
        </div>
    )
}

export default Inventory
