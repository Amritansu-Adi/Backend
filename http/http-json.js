const http = require('http');
const fs = require('fs').promises;
const users = [
    { id: 1, "name": "John", "email": "abc@a.com" },
    { id: 2, "name": "Doe", "email": "cnjdnc@xni.com" },
    { id: 3, "name": "Smith", "email": "ncif.xoc.com" }
];

// const server = http.createServer((req,res) => {
//     res.setHeader('Content-Type', 'application/json');
//     const newData = users.map((user) => {
//         return user.name;
//     });
//     res.end(JSON.stringify(newData));
// });

// server.listen(3000, ()=>{
//     console.log("Server is listening on port 3000");
// })

const server = http.createServer(async (req, res) => {
    
    if(req.url === '/'){
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(users));
    }
    else if(req.url === '/home'){
        let page = await home();
        res.setHeader('Content-Type', 'text/html');
        res.end(page);
    }
    else{
        let page = await error();
        res.setHeader('Content-Type', 'text/html');
        res.end(page);
    }
});

async function home(){
    let page = await fs.readFile('./test/home.html', 'utf-8');
    return page;
}

async function error(){
    let page = await fs.readFile('./test/error.html', 'utf-8');
    return page;
}

server.listen(3000, ()=>{
    console.log("Server is listening on port 3000");
});