const fs = require('fs')
console.log('started')
// fs.readFile('text.txt', 'utf8', (err, data)=>{
//     if(err){
//         console.log(err)
//     }
//     else{
//         console.log(data.toString)
//     }

// })
try{
    const data = fs.readFileSync('text.txt')
    console.log('reading the file'),
    console.log(data.toString())
}
catch(err){
    console.log(err)
}

console.log('ended')