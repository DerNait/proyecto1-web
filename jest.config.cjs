// jest.config.cjs
module.exports = {
  testEnvironment: 'jsdom',
  testMatch: ['<rootDir>/src/**/*.(test|spec).{js,jsx}'],
  moduleNameMapper: {
    // 1) Primero mockeamos TODO lo que termine en .css/.scss/.etc
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy',

    // 2) Después tus aliases normales
    '^@components/(.*)$': '<rootDir>/src/components/$1',
    '^@hooks/(.*)$': '<rootDir>/src/hooks/$1',
    '^@styles/(.*)$': '<rootDir>/src/styles/$1'
  },
  transform: {
    '^.+\\.[tj]sx?$': 'babel-jest'
  }
}
