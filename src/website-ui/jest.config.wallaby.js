const config = require("./jest.config");
delete config.testRunner
delete config.testTimeout

module.exports = {
    ...config,
    testMatch: [
        "**/__tests__/**/*.test.[jt]s?(x)"
    ]
}
