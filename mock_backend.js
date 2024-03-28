/* This section would ideally be a database to maintain the inventory between
days/ running the app. For simplicity, this will consist of the functions that
would be needed for a backend including storing an inventory, adding to the
inventory, and ditributing the inventory. */

// Stores the inventory
const inventory = { /*donationType: qty*/ };

// Stores the Donor list
const donors = {
  /*donorName: {
    donationType: qty,
  },*/
};

// Stores the donation list
const donations = [];

// Stores the distribution logs
const distribution = [];

const donation = (donorName, donationType, qty) => {
  // Adds to a log of donors, adds the donation type and quantity to the inventory,
  // adds to the donation list. Date added to donations on calling donation function.
  donations.push({
    name: donorName,
    type: donationType,
    quantity: qty,
    date: Date.now(),
  });

  if (inventory[donationType]) {
    inventory[donationType] += qty;
  } else {
    inventory[donationType] = qty;
  }

  if (!donors[donorName]) {
    donors[donorName] = {
        type: donationType,
        quantity: qty
    }
  } else if (donors[donorName][donationType]) {
    donors[donorName][donationType] += qty;
  } else {
    donors[donorName][donationType] = qty;
  }
};

const donationDistribution = (donationType, qty) => {
  // If the donation type exists AND the quantity is valid/
  // would not drop below 0, reduces the quantity from inventory.
  // date added on calling donationDistibution function

  if (inventory[donationType] >= qty) {
    inventory[donationType] -= qty;
    distribution.push({
        type: donationType,
        quantity: qty,
        date: Date.now()
    });
    return `${donationType} has been distributed ${qty} times.`
  } else if (inventory[donationType] < qty) {
        return `There is not enough ${donationType} to ditrubute ${qty} times.
                There is ${inventory[donationType]} available to distribute.`
  } else {
        return `There is no ${donationType} available for distrubution. Please
                check the inventory for donations available to distribute.`
  }
};

donation("matt", "hugs", 5);
donation("matt", "kisses", 1);
console.log(inventory)
console.log(donors)
console.log(donations)
console.log(distribution)
