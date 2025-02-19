const http = require('http');

http.createServer((req, res) => {
    // res.end('Hello, world!');
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.write();
    res.end();
    }).listen(3000, () => {
    console.log('Server is listening on port 3000');
});