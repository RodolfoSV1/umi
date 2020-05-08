const babelJest = require('babel-jest');

module.exports = babelJest.createTransformer({
  presets: [require.resolve('@rodolfosv1/babel-preset-umi/node')],
  babelrc: false,
  configFile: false,
});
