var http = require('http');
// var Date = require('date-and-time');

http.createServer(function (req, res) {
  var html = buildHtml(req);
  var t = buildTime(req);

  res.writeHead(200, {
    'Content-Type': 'text/html',
    'Content-Length': html.length,
    'Expires': new Date().toUTCString()
  });
  
  res.end(function(html, t) {
      http.get(html);
      t;
  });
}).listen(8080);

function buildHtml(req) {
  var header = 'HELLO';
  var body = '';

  // concatenate header string
  // concatenate body string
  return '<!DOCTYPE html>'
       + '<html><head>' + header + '</head><body>' + body;
};
function buildTime(req) {
    var time = '1/1';
  
    // concatenate header string
    // concatenate body string
    return time + '</body></html>';
  };