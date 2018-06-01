exports.onCreatePage = async ({ page, boundActionCreators }) => {
  const { createPage } = boundActionCreators

  // page.matchPath is a special key that's used for matching pages
  // only on the client.
  if (page.path.match(/^\/fr/))
    page.matchPath = `/index.fr.html`
  else if(page.path.match(/^\/es/))
    page.matchPath = `/index.es.html`
  else
    page.matchPath = `/index.html`
  
    // Update the page.
    createPage(page)
}

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