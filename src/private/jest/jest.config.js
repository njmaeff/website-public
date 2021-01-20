const path = require('path');
const root = path.resolve(__dirname, '../../../'); // Absolute path or null

exports.testMatch = [
    '**/__tests__/**/*.e2e.[jt]s?(x)',
    '**/__tests__/**/*.test.[jt]s?(x)',
    '**/__tests__/**/*.bench.[jt]s?(x)',
];
exports.modulePathIgnorePatterns = [
    '.tmp',
    'out',
];

exports.moduleNameMapper = {
    '^@njmaeff/private/(.*)': '<rootDir>/src/private/$1',
    "^@njmaeff/website-(.*)": `<rootDir>/src/website-$1`,
};

const esModules = [].join('|');
exports.transformIgnorePatterns = [
    `/node_modules/(?!${esModules})`,
    '\\.pnp\\.[^\\/]+$',
];
exports.rootDir = root;
exports.testEnvironment = 'node';
exports.testTimeout = 60 * 60 * 1000;
exports.testRunner = "jest-circus/runner";
