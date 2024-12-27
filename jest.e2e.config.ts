export default {
  moduleFileExtensions: ['js', 'json', 'ts'],
  testRegex: '.*\\.e2e-spec\\.ts$',
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest',
  },
  collectCoverageFrom: ['**/*.(t|j)s'],
  coverageDirectory: '../coverage',
  testEnvironment: 'node',
};
// package.json:
// "test:e2e": "jest --runInBand --config ./jest.e2e.config.ts" ->
// "test:e2e": "jest --config ./test/jest-e2e.json",
