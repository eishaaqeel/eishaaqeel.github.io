import http from 'http'
// access filesystem
import fs from 'fs'
import mime from 'mime-types'

const hostname = '127.0.0.1';
//if there is an enviorment PORT use that instead of 3000
const port = process.env.PORT || 3000;

let lookup = mime.lookup

const server = http.createServer((req, res) => {
//  res.statusCode = 200;
//  res.setHeader('Content-Type', 'text/plain');
//  res.end('Hello World');


    let path = req.url as string
    if (path == "/" || path == "/home"){
        path = "/index.html"
    }

    //look for mime-types
    let mimeType = lookup(path.substring(1)) as string

    fs.readFile(__dirname + path, (err, data) => {
        if (err){
            res.writeHead(404)
            res.end("Error 404 - File not Found!" + err.message)
            return
        }
        res.setHeader("X-Content-Type-Options", "nosniff")
        res.writeHead(200, {
            "Content-Type": mimeType
        })
        res.end(data)
    })

});

server.listen(port, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});