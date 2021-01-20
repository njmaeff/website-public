"use strict";
exports.__esModule = true;
exports.setup = void 0;
function setup(opts) {
    var conf = require('./jest.config');
    conf.roots = opts === null || opts === void 0 ? void 0 : opts.roots;
    return conf;
}
exports.setup = setup;
