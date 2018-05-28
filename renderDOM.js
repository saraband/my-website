const fs = require('fs')

fs.writeFile('./public/index.html', `
  <!DOCTYPE html>
  <html>
    <head>
    </head>
    <body>
      <p>${Date.now()}</p>
    </body>
  </html>
  `, (err => {
    if(err)
      console.log('error')
}))