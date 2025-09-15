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
            useESM: true,
            tsconfig: {
                module: 'esnext',
                target: 'es2020',
                moduleResolution: 'node'
            }
        }]
    },
    transformIgnorePatterns: [
        'node_modules/(?!(lit-element|lit-html|lit|@lit/|date-fns|@mdi|@material)/)'
    ],
    extensionsToTreatAsEsm: ['.ts'],
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
    testMatch: ['**/__tests__/**/*.test.ts'],
};