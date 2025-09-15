module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jest-environment-jsdom',
    setupFiles: [],
    moduleNameMapper: {
        '^lit/(.*)$': ['<rootDir>/node_modules/lit/$1'],
        '^date-fns/esm/(.*)$': '<rootDir>/node_modules/date-fns/$1',
        '^date-fns$': '<rootDir>/node_modules/date-fns',
    },
    transform: {
        '^.+\\.(js|ts)x?$': ['ts-jest', {
            tsconfig: {
                module: 'commonjs',
                target: 'es2020',
                moduleResolution: 'node'
            }
        }]
    },
    transformIgnorePatterns: [
        'node_modules/(?!(lit-element|lit-html|lit|@lit/|date-fns|@mdi|@material|@formatjs|@humanwhocodes|abab|domexception|glob|inflight|rimraf|sourcemap-codec)/)'
    ],
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
    testMatch: ['**/__tests__/**/*.test.ts'],
    clearMocks: true,
    resetMocks: true,
    restoreMocks: true,
    modulePathIgnorePatterns: ['<rootDir>/dist/'],
    testPathIgnorePatterns: ['<rootDir>/src/__tests__/energy-period-selector-plus-base.test.ts']
};