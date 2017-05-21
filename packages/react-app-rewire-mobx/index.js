const babelLoader = function (conf) {
  return conf.loader === 'babel-loader';
};

//webpack2
function rewireMobX(config, env) {
  const babelrc = config.module.loaders.find(babelLoader).options;
  babelrc.plugins = ['transform-decorators-legacy'].concat(babelrc.plugins || []);
  return config;
}

module.exports = rewireMobX;
