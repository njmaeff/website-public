export interface SetupOpts {
    roots?: []
}

export function setup(opts?: SetupOpts) {
    const conf = require('./jest.config');
    conf.roots = opts?.roots;
    return conf;
}
