// const fs = require('fs');    //importing fs module

// const data = fs.readFileSync('./data.txt', 'utf-8');  //reading data from file
// console.log(data);
// if(data.match('H')){
//     const changedata = data.replace('H', 'ABES');
//     fs.writeFileSync('./data.txt', changedata);  //writing data to file

// }
// // fs.appendFileSync('./data.txt', 'Hello World Again!');  //writing data to file

// const data2 = fs.readFileSync('./data2.txt', 'utf-8');  //reading data from file

// const read = () => {
//     const data = fs.readFileSync('./data.txt', 'utf-8', (err, data) => {
//         if(err) throw err;
//         console.log(data);
//     });
// }

// module.exports = read;


const fs = require('fs/promises');

const read = async ()=>{
    console.log(fs.readFile("./data.txt", "utf-8"));
}

const write = async()=>{
    await fs.writeFile("./data.txt", "new data");
}