module.exports = {
    ...require('./jest.config'),
    testEnvironment: 'jsdom',
    moduleFileExtensions: [
        "js",
        "json",
        "jsx",
        "ts",
        "tsx",
        "node"
    ],
};
