exports.modifyWebpackConfig = function({config, env}) {
  config.merge({
    resolve: {
      alias: {
        Components: __dirname + '/src/components',
        Actions: __dirname + '/src/store/actions',
        Reducers: __dirname + '/src/store/reducers',
        Utils: __dirname + '/src/utils',
        AppsComponents: __dirname + '/src/components/apps',
        AppsReducers: __dirname + '/src/store/reducers/apps',
        AppsActions: __dirname + '/src/store/actions/apps'
      }
    }
  });
  return config;
}