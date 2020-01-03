module.exports = {
  moduleFileExtensions: ['js', 'ts', 'json'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  testRegex: '(/__tests__/.*|(\\.|/)(e2e))\\.ts$',
  testPathIgnorePatterns: ['/node_modules/'],
  setupFiles: [],
  preset: 'jest-puppeteer'
}
