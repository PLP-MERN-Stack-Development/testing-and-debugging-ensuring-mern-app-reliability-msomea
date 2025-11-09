function add(a, b) { return a + b; }
module.exports = { add };

// server/tests/unit/calc.test.js
const { add } = require("../../src/utils/calc");

test("adds 2 numbers", () => {
  expect(add(2, 3)).toBe(5);
});
