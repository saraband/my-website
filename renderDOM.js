import fs from 'fs'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './src/browser/components/App'

fs.writeFile('./public/test.html', `
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