/*
  For all of the functions below, assume each function takes the following `person` object as its input. While the values of the object may change, the structure of it will always be the same.

  const person = {
    names: {
      first: "Rachel",
      middle: "Eleanor",
      last: "Rojas"
    },
    address: {
      street: "697 Pine Drive",
      unit: "2A",
      city: "Staten Island",
      state: "NY",
      zip: "10306"
    },
    numbers: [
      7185550921,
      7185558611
    ]
  }
*/

/**
 * getFirstName()
 * ---------------------
 * Return the `first` name of the inputted person.
 * @param {Object} person
 * @returns {string}
 *
 * EXAMPLE:
 *  getFirstName(person);
 *  //> "Rachel"
 */
function getFirstName(person) {
  return person.names.first
}

/**
 * getLastName()
 * ---------------------
 * Return the `last` name of the inputted person.
 * @param {Object} person
 * @returns {string}
 *
 * EXAMPLE:
 *  getLastName(person);
 *  //> "Rojas"
 */
function getLastName(person) {
  return person.names.last
}

/**
 * getAddressStreet()
 * ---------------------
 * Return the `street` of the inputted person's `address`.
 * @param {Object} person
 * @returns {string}
 *
 * EXAMPLE:
 *  getAddressStreet(person);
 *  //> "697 Pine Drive"
 */
function getAddressStreet(person) {
  return person.address.street
}

/**
 * getCountOfPhoneNumbers()
 * ---------------------
 * Return a count of how many phone `numbers` the person has.
 * @param {Object} person
 * @returns {number}
 *
 * EXAMPLE:
 *  getCountOfPhoneNumbers(person);
 *  //> 2
 */
function getCountOfPhoneNumbers(person) {
  return person.numbers.length
}

/**
 * getFirstPhoneNumber()
 * ---------------------
 * Return the first phone number associated with the person.
 *
 * NOTE: There will always be at least one phone number.
 *
 * @param {Object} person
 * @returns {number}
 *
 * EXAMPLE:
 *  getFirstPhoneNumber(person);
 *  //> 7185550921
 */
function getFirstPhoneNumber(person) {
  return person.numbers[0]
}

/**
 * getLastPhoneNumber()
 * ---------------------
 * Return the first phone number associated with the person.
 *
 * NOTE: There will always be at least one phone number.
 *
 * @param {Object} person
 * @returns {number}
 *
 * EXAMPLE:
 *  getLastPhoneNumber(person);
 *  //> 7185558611
 */
function getLastPhoneNumber(person) {
  return person.numbers[person.numbers.length-1]
}

/**
 * getFullName()
 * ---------------------
 * Combine the `first`, `middle`, and `last` names to return the full name.
 * @param {Object} person
 * @returns {string}
 *
 * EXAMPLE:
 *  getFullName(person);
 *  //> "Rachel Eleanor Rojas"
 */
function getFullName(person) {
  let x = person.names.first
  let y = person.names.middle
  let z = person.names.last
  return `${x} ${y} ${z}`
}

/**
 * getCityAndState()
 * ---------------------
 * Combine the `city` and `state` of the person's `address`.
 *
 * NOTE: Pay attention to the formatting below.
 *
 * @param {Object} person
 * @returns {string}
 *
 * EXAMPLE:
 *  getCityAndState(person);
 *  //> "Staten Island, NY"
 */
function getCityAndState(person) {
  let a = person.address.city
  let b = person.address.state 
  return `${a}, ${b}`
}

/**
 * getFullAddress()
 * ---------------------
 * Combine all of the `address` fields to create a full address for the person.
 *
 * NOTE: Pay attention to the formatting below.
 *
 * @param {Object} person
 * @returns {string}
 *
 * EXAMPLE:
 *  getFullAddress(person);
 *  //> "697 Pine Drive 2A, Staten Island, NY, 10306"
 * //street unit, city, state, zip
 */
function getFullAddress(person) {
  let a = person.address.street
  let b = person.address.unit
  let c = person.address.city
  let d = person.address.state
  let e = person.address.zip
  return `${a} ${b}, ${c}, ${d}, ${e}`
}

/**
 * getFlatObject()
 * ---------------------
 * Create a new object where all of the keys from the `names` and `address` objects are in the same object. You may leave the `numbers` array as is.
 * @param {Object} person 
 * @returns {Object}
 * 
 * person names/address/numbers
 * EXAMPLE:
 *  getFlatObject(person);
 *  //> {
      first: "Rachel",
      middle: "Eleanor",
      last: "Rojas",
      street: "697 Pine Drive",
      unit: "2A",
      city: "Staten Island",
      state: "NY",
      zip: "10306",
      numbers: [7185550921, 7185558611],
    };
 */
//1 st atttempt -- learned about the spread operator after googling.  I wonder if there is a way to loop through the array and do this? 
// used object assign and kept erroring.  Will keep on investigating.
// function getFlatObject(person) {
//   const flatCopy = {};
//   flatCopy.first = person.names.first;
//   flatCopy.middle = person.names.middle;
//   flatCopy.last = person.names.last;
//   flatCopy.street = person.address.street;
//   flatCopy.unit = person.address.unit
//   flatCopy.city = person.address.city;
//   flatCopy.state = person.address.state;
//   flatCopy.zip = person.address.zip;
//   flatCopy.numbers = [...person.numbers];
//   return flatCopy;
// }
function getFlatObject(person) {
  let flatCopy = {...person.names, ...person.address}
  flatCopy.numbers = [...person.numbers]
  return flatCopy
}

// Do not change the code below.
module.exports = {
  getFirstName,
  getLastName,
  getAddressStreet,
  getCountOfPhoneNumbers,
  getFirstPhoneNumber,
  getLastPhoneNumber,
  getFullName,
  getCityAndState,
  getFullAddress,
  getFlatObject,
};
