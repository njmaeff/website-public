import base from "../webpack.config"

export default {
    stories: [
        '../components/**/*.stories.tsx',
        "../index.stories.tsx"
    ],
    addons: [
        '@storybook/addon-actions/register',
        '@storybook/addon-viewport/register',
        '@storybook/addon-knobs/register'
    ],
    webpackFinal: (config) => {
        const common = base({});
        config.resolve.extensions = common.resolve.extensions;
        config.resolveLoader = common.resolveLoader
        config.module.rules = common.module.rules;
        return config;
    }
};
