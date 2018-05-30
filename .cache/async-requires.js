// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-pages-es-index-js": require("gatsby-module-loader?name=component---src-pages-es-index-js!/home/saraband/Desktop/DEV/my-website/src/pages/es/index.js"),
  "component---src-pages-fr-index-js": require("gatsby-module-loader?name=component---src-pages-fr-index-js!/home/saraband/Desktop/DEV/my-website/src/pages/fr/index.js"),
  "component---src-pages-index-js": require("gatsby-module-loader?name=component---src-pages-index-js!/home/saraband/Desktop/DEV/my-website/src/pages/index.js")
}

exports.json = {
  "es.json": require("gatsby-module-loader?name=path---es!/home/saraband/Desktop/DEV/my-website/.cache/json/es.json"),
  "fr.json": require("gatsby-module-loader?name=path---fr!/home/saraband/Desktop/DEV/my-website/.cache/json/fr.json"),
  "index.json": require("gatsby-module-loader?name=path---index!/home/saraband/Desktop/DEV/my-website/.cache/json/index.json")
}

exports.layouts = {

}