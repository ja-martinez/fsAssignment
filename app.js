var fs = require('fs');

const files = fs.readdirSync('./challenge6/', 'utf-8');

for (let file of files) {
    let ext = file.slice(-3, file.length);
    if (ext === 'txt') {
        console.log(fs.readFileSync(`./challenge6/${file}`, 'utf-8'));
    }
}