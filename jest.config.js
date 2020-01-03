module.exports = {
  moduleFileExtensions: ['js', 'ts', 'json', 'vue'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/app/$1',
    '^~/(.*)$': '<rootDir>/app/$1'
  },
  transform: {
    '.*\\.(vue)$': 'vue-jest',
    '^.+\\.tsx?$': 'ts-jest',
    '^.+\\.jsx?$': 'babel-jest'
  },
  testRegex: '(/__tests__/.*|(\\.|/)(spec))\\.ts$',
  testPathIgnorePatterns: ['/node_modules/', '/e2e/'],
  setupFiles: [],
  snapshotSerializers: ['jest-serializer-vue'],
  collectCoverage: true,
  collectCoverageFrom: [
    '<rootDir>/app/**/*.{ts,vue}',
    '!<rootDir>/app/tests/*.*',
    '!<rootDir>/app/e2e/*.*',
    '!<rootDir>/**/*.d.ts'
  ]
}
