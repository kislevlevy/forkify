module.exports = {
  plugins: [
    {
      name: 'preset-default',
      params: {
        overrides: {
          removeUselessStrokeAndFill: false,
          removeUnknownsAndDefaults: false,
          cleanupIds: false,
          removeUselessDefs: false,
          removeHiddenElems: false,
        },
      },
    },
  ],
};
