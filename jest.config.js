module.exports = {
  testEnvironment: "jest-environment-jsdom", // use full module name
  setupFilesAfterEnv: ["<rootDir>/client/src/tests/jest.setup.js"],
  coverageDirectory: "coverage",
};
