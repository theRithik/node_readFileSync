const fs = require('fs')
console.log('started')

try{
    const data = fs.readFileSync('text.txt')
    console.log('reading the file'),
    console.log(data.toString())
}
catch(err){
    console.log(err)
}

console.log('ended')
