module.exports = {
  setupFilesAfterEnv: ['./src/setupTests.js'],
  modulePathIgnorePatterns: ['cypress'], // don't use jest with cypress
};
