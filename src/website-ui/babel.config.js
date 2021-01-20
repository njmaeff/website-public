module.exports = {
    plugins: [
        'babel-plugin-styled-components',
        `@babel/plugin-proposal-optional-chaining`,
        `@babel/plugin-proposal-nullish-coalescing-operator`,
        [`@babel/plugin-proposal-decorators`, {legacy: true}],
        [`@babel/plugin-proposal-class-properties`, {loose: true}],
        'react-hot-loader/babel'
    ],
    presets: [
        '@babel/preset-react',
        ['@babel/preset-env', {targets: {node: 'current',}, modules: 'auto'}],
        `@babel/preset-typescript`,
    ],
    sourceMaps: true,
    ignore: ['out']
};

