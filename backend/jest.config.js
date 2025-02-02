module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    // Optionally, specify the root directory if needed:
    // rootDir: './',
    // Specify file extensions to be tested:
    moduleFileExtensions: ['ts', 'js', 'json', 'node'],
    // Tell Jest where to find test files:
    testMatch: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[tj]s?(x)'],
    transform: {
        '^.+\\.(ts|tsx)$': 'ts-jest'
    }
};
