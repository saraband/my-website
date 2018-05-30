exports.onCreatePage = async ({ page, boundActionCreators }) => {
  const { createPage } = boundActionCreators

  // page.matchPath is a special key that's used for matching pages
  // only on the client.
  if (page.path.match(/^\/fr/))
    page.matchPath = `/fr/index.html`
  else if(page.path.match(/^\/es/))
    page.matchPath = `/es/index.html`
  else
    page.matchPath = `/index.html`
  
    // Update the page.
    createPage(page)
}