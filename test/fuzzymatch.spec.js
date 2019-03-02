const Mocha = require("mocha");
const assert = require("assert");
const getFuzzyFindResults = require("../fuzzymatch");
const mocha = new Mocha();

mocha.suite.emit("pre-require", this, "solution", mocha);

describe("FuzzyFinder is correct", function() {
  it("when given 'md'", function() {
    const expectedResults = ["Maryland"];

    assert.deepEqual(getFuzzyFindResults("md"), expectedResults);
  });

  it("when given 'dm'", function() {
    const expectedResults = ["District of Columbia"];

    assert.deepEqual(getFuzzyFindResults("dm"), expectedResults);
  });

  it("when given '123456789'", function() {
    const expectedResults = [];

    assert.deepEqual(getFuzzyFindResults("123456789"), expectedResults);
  });

  it("when given 'Ala'", function() {
    const expectedResults = [
      "Alaska",
      "Alabama",
      "California",
      "Maryland",
      "North Carolina",
      "South Carolina"
    ];

    assert.deepEqual(getFuzzyFindResults("Ala"), expectedResults);
  });

  it("when given 'll'", function() {
    const expectedResults = ["Illinois"];

    assert.deepEqual(getFuzzyFindResults("ll"), expectedResults);
  });

  it("when given 'texas'", function() {
    const expectedResults = ["Texas"];

    assert.deepEqual(getFuzzyFindResults("texas"), expectedResults);
  });

  it("when given ' of '", function() {
    const expectedResults = ["District of Columbia"];

    assert.deepEqual(getFuzzyFindResults(" of "), expectedResults);
  });

  it("when given 'sSsS'", function() {
    const expectedResults = ["Massachusetts", "Mississippi"];

    assert.deepEqual(getFuzzyFindResults("sSsS"), expectedResults);
  });

  it("when given 'ssspp'", function() {
    const expectedResults = ["Mississippi"];

    assert.deepEqual(getFuzzyFindResults("ssspp"), expectedResults);
  });

  it("when given ' '", function() {
    const expectedResults = [
      "American Samoa",
      "District of Columbia",
      "North Carolina",
      "North Dakota",
      "New Hampshire",
      "New Jersey",
      "New Mexico",
      "New York",
      "Puerto Rico",
      "Rhode Island",
      "South Carolina",
      "South Dakota",
      "Virgin Islands",
      "West Virginia"
    ];

    assert.deepEqual(getFuzzyFindResults(" "), expectedResults);
  });
});

mocha.run();
