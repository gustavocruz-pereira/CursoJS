const fs = require('fs').promises; // fs = file system
const path = require('path');


async function readdir(rootDir) {
    rootDit = rootDir || path.resolve(__dirname)
    const files = await fs.readdir(rootDir);
    walk(files)
}

function walk(files) {
    for (let file of files) {
        console.log(file);
    }
}

readdir();
// fs.readdir(path.resolve(__dirname))
//     .then(files => console.log(files))
//     .catch(e => console.log(e))