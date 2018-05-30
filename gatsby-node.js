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