/**
 * import {ESLint} from "eslint"
 * @type ESLint.Options
 */
module.exports = {
    ignorePatterns: ["node_modules"],
    parser: "@typescript-eslint/parser",
    plugins: ["@typescript-eslint"],
    parserOptions: {
        ecmaVersion: 11,
        sourceType: "module",
        ecmaFeatures: {
            jsx: true,
        },
    },
    rules: {
        "@typescript-eslint/explicit-module-boundary-types": 0,
        "@typescript-eslint/no-var-requires": 0,
        "@typescript-eslint/no-use-before-define": 0,
        "@typescript-eslint/no-explicit-any": 0,
        "@typescript-eslint/camelcase": 0,
        "no-var": 0,
        'react/prop-types': 0
    },
    settings: {
        react: {
            version: "detect",
        },
    },
    extends: [
        "plugin:@typescript-eslint/recommended",
        "plugin:react/recommended",
        "prettier",
        "prettier/@typescript-eslint",
    ],
};

