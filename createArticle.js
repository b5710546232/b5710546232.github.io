
var fs = require('fs')
var path = require('path')

var TARGET = path.join(__dirname,'src/articles/')
let myDate = new Date()
myDate = myDate.toString('dddd, MMMM ,yyyy').substring(4,15).split(' ').join('-')
console.log(myDate)
let title = process.argv[2]

let fileName = myDate+'_'+title
fs.writeFile(TARGET+fileName+'.md','' , function (err) {
  if (err)
  return console.log(err);
})
