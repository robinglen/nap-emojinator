const http = require('http');
const fs = require('fs');
const server = http.createServer(serve);

const html = fs.readFileSync('./static/index.html');

function serve(req, res) {
  if (/trendinator/.test(req.url)) {
    res.statusCode = 200;
    return res.end(html);
  }
}

server.listen(8080);
console.log('Trendinating on: http://localhost:8080/trendinator');
