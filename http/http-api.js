const http = require('http');
const axios = require('axios');
const port = 3000

const server = http.createServer(async (req, res) => {
    console.log('req recieved');

    res.writeHead(200, {"content-type": 'text/html'});
    // const response = await fetch("https://dummyjson.com/products");
    // const data = await response.json();

    
    const response = await axios.get("https://dummyjson.com/products");
    const productData = response.data.products;
    let frontdata = '<html><head></head><body>';

    productData.forEach((product) => {
        // frontdata += `<h1>${product.name}</h1>`;
        // frontdata += `<p>${product.price}</p>`;
        frontdata += `<div><img src="${product.thumbnail}"></div>`;
    });
    frontdata += '</body></html>';
    res.end(frontdata);
    // res.end(JSON.stringify(data));
});

server.listen(port, ()=>{
    console.log('running');
});