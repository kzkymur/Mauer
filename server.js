const http = require('http');
const url = require('url');
const fs = require('fs');

const server = http.createServer();
const port = 8081;

const Response = (res) => ({
  modern: () => {
    fs.readFile('./modern/dist/index.html', 'utf-8', (_, data) => {
      res.writeHead(200, { 'content-Type': 'text/html' });
      res.write(data);
      res.end();
    });
  },
  bundle: () => {
    fs.readFile('./modern/dist/bundle.js', 'utf-8', (_, data) => {
      res.writeHead(200, { 'content-Type': 'text/javascript' });
      res.write(data);
      res.end();
    });
  },
  png: (name) => {
    fs.readFile(`./modern/dist${name}.png`, (_, data) => {
      res.writeHead(200, { 'content-Type': 'image/png' });
      res.write(data);
      res.end();
    });
  },
  modern: () => {
    fs.readFile('./ancient.html', 'utf-8', (_, data) => {
      res.writeHead(200, { 'content-Type': 'text/html' });
      res.end('It does not support your browser.');
    }) }
});
const isModernBrowser = (ua) => {
  // if( ua.indexOf( "msie" ) != -1
  //   || ua.indexOf( "trident" ) != -1 ) {
  //   ret = "Internet Explorer" ;
  // }
  ua = ua.toLowerCase();
  const modernList = [
    "edge",
    "chrome",
    "safari",
    "firefox",
    "opera",
  ];
  for (const modernAgent of modernList) {
    if (ua.indexOf(modernAgent) !== -1) {
      return true;
    }
  }
  return false;
}

server.on('request', function (req, res) {
  const ua = req.headers['user-agent'];

	const uri = url.parse(req.url).pathname;
	if (uri === "/") {
    if (isModernBrowser(ua)) {
      Response(res).modern(); 
    } else {
      Response(res).ancient(); 
    }
		return;
	}
  if (uri === "/bundle.js") {
    Response(res).bundle(); 
		return;
	};
  const [name, ext] = uri.split('.');
  if (ext === "png") {
    Response(res).png(name);
		return;
	};
});

server.listen(port)
console.log('Server running at http://localhost:'+port);
