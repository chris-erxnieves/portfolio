module.exports = {
  testEnvironment: `jsdom`,
  setupFilesAfterEnv: ['<rootDir>/setup-test-env.js'],
  testMatch: ['<rootDir>/src/**/*.spec.{js,jsx,ts,tsx}'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
}
