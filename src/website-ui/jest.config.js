const base = require("@njmaeff/private/jest").setup({roots: [__dirname]})

module.exports = {
    ...base,
    testEnvironment: 'jsdom',
    moduleFileExtensions: [
        "js",
        "json",
        "jsx",
        "ts",
        "tsx",
        "node",
        'mdx'
    ],
    setupFilesAfterEnv: [
        require.resolve("@njmaeff/website-ui/util/react-setup")
    ],
    moduleNameMapper: {
        "\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": require.resolve('./__mocks__/img-mock.ts'),
        ...base.moduleNameMapper,
    },
    transform: {
        "^.+\\.(md|mdx)$": "@njmaeff/website-ui/util/transformer-md.js",
        "^.+\\.(ts|tsx|js|jsx)$": 'babel-jest'
    },
    collectCoverageFrom: [
        "!**/*.test.ts?(x)",
        "!**/*.e2e.ts?(x)",
        "!**/*.mock.ts?(x)",
        "!**/webpack.config.babel.ts?(x)",
        "!**/task.config.ts?(x)",
        "!**/__datashots__/**",
        "!**/out/**",
        "!**/__mocks__/**",
        "**/*.ts?(x)",
    ]
};
