module.exports = {
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.spec.json',
      stringifyContentPathRegex: '\\.html$',
    },
  },
  transform: {
    '^.+\\.(ts|js|html)$': 'ts-jest'
   // '^.+\\.html$': 'jest-transform-html',
  },
  moduleNameMapper: {
    '^@app/(.*)$': '<rootDir>/src/app/$1',
    '^@environments/(.*)$': '<rootDir>/src/environments/$1'
    //'\\.html$': 'jest-transform-html',
  },
  moduleFileExtensions: ['ts', 'html', 'js', 'json'],
  collectCoverage: true,
  coverageReporters: ['html'],
  coverageDirectory: '<rootDir>/coverage/',
};