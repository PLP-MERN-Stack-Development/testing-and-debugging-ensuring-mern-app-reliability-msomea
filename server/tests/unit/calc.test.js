const { add } = require("../../src/utils/calc");

test("adds 2 numbers", () => {
  expect(add(2, 3)).toBe(5);
});
