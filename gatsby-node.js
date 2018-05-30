exports.onCreatePage = async ({ page, boundActionCreators }) => {
  const { createPage } = boundActionCreators

  // page.matchPath is a special key that's used for matching pages
  // only on the client.
  if (page.path.match(/^\/.*/)) {
    page.matchPath = `/index.html`

    // Update the page.
    createPage(page)
  }
}