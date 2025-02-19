const http = require('http');
const axios = require('axios');
const port = 3000;

const server = http.createServer(async (req, res) => {
    res.writeHead(200, { "content-type": 'text/html' });
    const users = await axios.get("https://api.github.com/search/users?q=location:ghaziabad");
    let frontdata = '<html><head></head><body>';
    users.forEach((user) => {
        // frontdata += `<h1>${user.login}</h1>`;
        frontdata += `<img src="${user.avatar_url}">`;
    });
    frontdata += '</body></html>';
    res.end(frontdata);
});

server.listen(port, () => {
    console.log('running');
});