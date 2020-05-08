module.exports = function (api, opts) {
  const { nodeEnv } = opts;
  delete opts['nodeEnv'];

  return {
    presets: [
      [
        require('./lib').default,
        require('@rodolfosv1/utils').deepmerge(
          {
            env: {
              useBuiltIns: 'entry',
              corejs: 3,
              modules: false,
            },
            transformRuntime: {},
          },
          opts,
        ),
      ],
    ],
  };
};
