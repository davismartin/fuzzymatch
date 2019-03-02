// Let's write the logic behind a simple fuzzy finder (without using regular expressions).

// Given an input from the user (searchTerm), return all results in DATA that "fuzzily" match.
// A 'match' is any word in DATA where all of the characters in the input string are contained in DATA and in the proper order.

// For example, 'md' would return ["Maryland"] but 'dm' would return ["District of Columbia"].

// Make the test suite pass by fixing the "getFuzzyFindResults" function!
const DATA = [
  "Alaska",
  "Alabama",
  "Arkansas",
  "American Samoa",
  "Arizona",
  "California",
  "Colorado",
  "Connecticut",
  "District of Columbia",
  "Delaware",
  "Florida",
  "Georgia",
  "Guam",
  "Hawaii",
  "Iowa",
  "Idaho",
  "Illinois",
  "Indiana",
  "Kansas",
  "Kentucky",
  "Louisiana",
  "Massachusetts",
  "Maryland",
  "Maine",
  "Michigan",
  "Minnesota",
  "Missouri",
  "Mississippi",
  "Montana",
  "North Carolina",
  "North Dakota",
  "Nebraska",
  "New Hampshire",
  "New Jersey",
  "New Mexico",
  "Nevada",
  "New York",
  "Ohio",
  "Oklahoma",
  "Oregon",
  "Pennsylvania",
  "Puerto Rico",
  "Rhode Island",
  "South Carolina",
  "South Dakota",
  "Tennessee",
  "Texas",
  "Utah",
  "Virginia",
  "Virgin Islands",
  "Vermont",
  "Washington",
  "Wisconsin",
  "West Virginia",
  "Wyoming"
];

const getFuzzyFindResults = searchTerm => {
  let matches = [];
  // loop through each city
  for (let i = 0; i < DATA.length; i++) {
    let city = DATA[i];
    // no copy need just need to make it an array
    let searchTermAry = searchTerm.toLowerCase().split("");
    // loop through each letter in city
    for (let j = 0; j < city.length; j++) {
      let cityChar = city[j].toLowerCase();
      // The thing I never quite got in the interview
      // I was trying to build in all kinds of order logic
      // This will just unshift the first element so it take care of that
      // I think you tried to hint at this I was just to nervous to get it
      if (cityChar === searchTermAry[0]) {
        searchTermAry.splice(0, 1);
        // also much easier than how I tried to code it and another ary not needed
        if (searchTermAry.length === 0) {
          matches.push(city);
          // short-circuit to for efficency
          break;
        }
      }
    }
  }
  return matches;
};

module.exports = getFuzzyFindResults;
