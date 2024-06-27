module.exports = {
  presets: [
    ['@babel/preset-env', {
      targets: {
        node: 'current',  // Cela cible la version de Node.js que vous utilisez actuellement
      },
    }],
  ],
};
