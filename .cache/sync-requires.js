// prefer default export if available
const preferDefault = m => m && m.default || m


exports.layouts = {

}

exports.components = {
  "component---src-pages-index-js": preferDefault(require("/home/saraband/Desktop/DEV/my-website NEXT/src/pages/index.js"))
}

exports.json = {
  "index.json": require("/home/saraband/Desktop/DEV/my-website NEXT/.cache/json/index.json")
}