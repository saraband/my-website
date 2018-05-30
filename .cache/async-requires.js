// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-pages-index-es-js": require("gatsby-module-loader?name=component---src-pages-index-es-js!/home/saraband/Desktop/DEV/my-website/src/pages/index.es.js"),
  "component---src-pages-index-fr-js": require("gatsby-module-loader?name=component---src-pages-index-fr-js!/home/saraband/Desktop/DEV/my-website/src/pages/index.fr.js"),
  "component---src-pages-index-js": require("gatsby-module-loader?name=component---src-pages-index-js!/home/saraband/Desktop/DEV/my-website/src/pages/index.js")
}

exports.json = {
  "index-es.json": require("gatsby-module-loader?name=path---index-es!/home/saraband/Desktop/DEV/my-website/.cache/json/index-es.json"),
  "index-fr.json": require("gatsby-module-loader?name=path---index-fr!/home/saraband/Desktop/DEV/my-website/.cache/json/index-fr.json"),
  "index.json": require("gatsby-module-loader?name=path---index!/home/saraband/Desktop/DEV/my-website/.cache/json/index.json")
}

exports.layouts = {

}