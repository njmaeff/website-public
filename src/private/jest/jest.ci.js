const path = require('path');

module.exports = {
  ...require('./jest.config'),
  rootDir: path.resolve(__dirname, '../'),
  reporters: ['default', 'jest-junit'],
  collectCoverage: true,
};
