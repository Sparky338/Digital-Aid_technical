/* This section would ideally be a database to maintain the inventory between
days/ running the app. For simplicity, this will consist of the functions that
would be needed for a backend including storing an inventory, adding to the
inventory, and ditributing the inventory. */

// Stores the inventory
const inventory = {donationType: qty}

// Stores the Donor list
const donors = {donorName: {
    donationType: qty
}}

// Stores the donation list
const donations = [];

// Stores the distribution logs
const distribution = {
    donationType: qty,
    date: Date.now()
}

const donation = (donorName, donationType, qty) => {
    // Adds to a log of donors, adds the donation type and quantity to the inventory.
    // date added on calling donation function
    donations.push({
        name: donorName,
        type: donationType,
        quantity: qty,
        date: Date.now()
    })

    if (donors[donorName][donationType]) {
        donors[donorName][donationType] += qty;
    } else {
        donors[donorName][donationType] = qty;
    };

};

const donationDistribution = (donationType, qty) => {
// If the donation type exists AND the quantity is valid/
// would not drop below 0, reduces the quantity from inventory.
// date added on calling donationDistibution function
};
