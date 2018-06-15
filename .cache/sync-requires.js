// prefer default export if available
const preferDefault = m => m && m.default || m


exports.layouts = {

}

exports.components = {
  "component---src-pages-chitchat-index-js": preferDefault(require("/home/saraband/Desktop/DEV/my-website/src/pages/chitchat/index.js")),
  "component---src-pages-deliver-index-js": preferDefault(require("/home/saraband/Desktop/DEV/my-website/src/pages/deliver/index.js")),
  "component---src-pages-findimo-index-js": preferDefault(require("/home/saraband/Desktop/DEV/my-website/src/pages/findimo/index.js")),
  "component---src-pages-index-es-js": preferDefault(require("/home/saraband/Desktop/DEV/my-website/src/pages/index.es.js")),
  "component---src-pages-index-fr-js": preferDefault(require("/home/saraband/Desktop/DEV/my-website/src/pages/index.fr.js")),
  "component---src-pages-index-js": preferDefault(require("/home/saraband/Desktop/DEV/my-website/src/pages/index.js"))
}

exports.json = {
  "chitchat.json": require("/home/saraband/Desktop/DEV/my-website/.cache/json/chitchat.json"),
  "deliver.json": require("/home/saraband/Desktop/DEV/my-website/.cache/json/deliver.json"),
  "findimo.json": require("/home/saraband/Desktop/DEV/my-website/.cache/json/findimo.json"),
  "index-es.json": require("/home/saraband/Desktop/DEV/my-website/.cache/json/index-es.json"),
  "index-fr.json": require("/home/saraband/Desktop/DEV/my-website/.cache/json/index-fr.json"),
  "index.json": require("/home/saraband/Desktop/DEV/my-website/.cache/json/index.json")
}