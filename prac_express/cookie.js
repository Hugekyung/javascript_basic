const http = require('http');

http.createServer((req, res) => {
    console.log(req.url, req.headers.cookie);
    res.writeHead(200, {'Set-Cookie': 'first-cookie=test'});
    res.end("This is Demo Page.")
}).listen(3000, () => {
    console.log("started web server!")
})