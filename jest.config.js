module.exports = {
    verbose: true,
    collectCoverage: true,
    coverageDirectory: 'coverage',
    testEnvironment: 'node',
    testMatch: ['**/__tests__/**/*.js?(x)', '**/?(*.)+(spec|test).js?(x)'],
    moduleFileExtensions: ['js', 'json', 'jsx', 'node'],
  };