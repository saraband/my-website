// prefer default export if available
const preferDefault = m => m && m.default || m


exports.layouts = {

}

exports.components = {
  "component---src-pages-es-index-js": preferDefault(require("/home/saraband/Desktop/DEV/my-website/src/pages/es/index.js")),
  "component---src-pages-fr-index-js": preferDefault(require("/home/saraband/Desktop/DEV/my-website/src/pages/fr/index.js")),
  "component---src-pages-index-js": preferDefault(require("/home/saraband/Desktop/DEV/my-website/src/pages/index.js"))
}

exports.json = {
  "es.json": require("/home/saraband/Desktop/DEV/my-website/.cache/json/es.json"),
  "fr.json": require("/home/saraband/Desktop/DEV/my-website/.cache/json/fr.json"),
  "index.json": require("/home/saraband/Desktop/DEV/my-website/.cache/json/index.json")
}