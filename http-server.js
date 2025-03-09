const http = require('http')
const fs = require('fs')


http.createServer((req, res) => {
  if(req.method === 'POST' && req.url === '/') {
    // console.log(req.on('data', (chunk) => console.log(chunk)))

    req.on('data', (chunk) => {
      fs.writeFile('./pst-data.json', chunk, (err) => {
        if(err) {
          throw err
        }
      })
    })
    // console.log(req)
    return res.end("I am here")
  }
}).listen(3000)