module.exports = {
    plugins: [
        `@babel/plugin-proposal-dynamic-import`,
        `@babel/plugin-transform-modules-commonjs`,
        `@babel/plugin-proposal-optional-chaining`,
        `@babel/plugin-proposal-nullish-coalescing-operator`,
        [`@babel/plugin-proposal-class-properties`, {loose: true}],
    ],
    presets: [
        [
            "@babel/preset-env",
            {
                "targets": {
                    "node": 'current'
                }
            }
        ],
        `@babel/preset-typescript`,
    ],
    sourceMaps: true,
    ignore: ['out', "**/.pnp.js"],
};
