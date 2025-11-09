module.exports = {
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: ["<rootDir>/src/tests/jest.setup.js"],
  moduleFileExtensions: ["js", "jsx", "json"],
  testMatch: ["<rootDir>/src/tests/**/*.(test|spec).(js|jsx)"],
  transform: {
    "^.+\\.(js|jsx)$": "babel-jest"
  }
};
