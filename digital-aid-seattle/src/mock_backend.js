/* This section would ideally be a database to maintain the inventory between
days/ running the app. For simplicity, this will consist of the functions that
would be needed for a backend including storing an inventory, adding to the
inventory, and distributing the inventory. */

// Stores the inventory
let inventory = JSON.parse(localStorage.getItem('inventory'));

// Stores the Donor list
let donors = JSON.parse(localStorage.getItem('donors'));

// Stores the donation list
let donations = JSON.parse(localStorage.getItem('donations'));

// Stores the distribution logs
let distribution = JSON.parse(localStorage.getItem('distribution'));

export const donation = (donorName, donationType, qty) => {
  // Adds to a log of donors, adds the donation type and quantity to the inventory,
  // adds to the donation list. Date added to donations on calling donation function.
  if (!donations) {
    donations = []
  }

  donations.push({
    name: donorName,
    type: donationType,
    quantity: +qty,
    date: Date().toString(),
  });
  localStorage.setItem('donations', JSON.stringify(donations));

  if (!inventory) {
    inventory = {...(inventory)};
    inventory[donationType] = +qty;
  } else if (inventory[donationType]) {
    inventory[donationType] += +qty;
  } else {
    inventory[donationType] = +qty;
  }
  localStorage.setItem('inventory', JSON.stringify(inventory))

  if (!donors) {
    donors = {...(donors)};
  }

  if (!donors[donorName]){
    donors[donorName] = {...(donors[donorName])}
    donors[donorName][donationType] = +qty;
  } else if (donors[donorName][donationType]) {
    donors[donorName][donationType] += +qty;
  } else {
    donors[donorName][donationType] = +qty;
  }
  localStorage.setItem('donors', JSON.stringify(donors))

  return `Thank you for donating ${qty} ${donationType}, ${donorName}!`
};

export const donationDistribution = (donationType, qty) => {
  // If the donation type exists AND the quantity is valid/
  // would not drop below 0, reduces the quantity from inventory.
  // date added on calling donationDistibution function

  if (!distribution) {
    distribution = []
  }

  if (inventory[donationType] >= +qty) {
    inventory[donationType] -= +qty;
    distribution.push({
        type: donationType,
        quantity: +qty,
        date: Date().toString()
    });
    localStorage.setItem('inventory', JSON.stringify(inventory))
    localStorage.setItem('distribution', JSON.stringify(distribution))

    return `Thank you for distributing ${donationType} ${qty} times.`
  } else if (inventory[donationType] < qty) {
        return `There is not enough ${donationType} to distrubute ${qty} times. There is ${inventory[donationType]} available to distribute.`
  } else {
        return `There is no ${donationType} available for distrubution. Please check the inventory for donations available to distribute.`
  }
};
