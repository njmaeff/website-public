const mdx = require("@mdx-js/mdx");
const babelJest = require('babel-jest');
const {createHash} = require('crypto');
const config = require('../babel.config');

module.exports = {
    getCacheKey(fileData, filename, ...rest) {
        const babelCacheKey = babelJest.getCacheKey(fileData, filename, ...rest);

        return createHash('md5')
            .update(babelCacheKey)
            .digest('hex');
    },
    process(src, filename, ...rest) {
        const jsx = mdx.sync(src);
        const toTransform = `import {mdx} from '@mdx-js/react';${jsx}`;
        return babelJest.process(toTransform, filename, {
            ...rest,
            plugins: config.plugins,
            presets: config.presets
        }).code;
    },
};
