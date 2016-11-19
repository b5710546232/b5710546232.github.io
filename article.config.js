// var glob = require('glob-fs')({ gitignore: true })
// var files = glob.readdirSync('/src/articles/*.md')
// for (let i=0 ;i<files.length;i++){
//   files[i] = path.join(__dirname,files[i])
//   console.log(files[i]);
// }
// console.log(files)
// var files = glob.readdirSync(path.join(__dirname,'/src/articles/*.md'))
// console.log(files)
var fs = require('fs')
var path = require("path")

//
// if (process.argv.length <= 2) {
//     console.log("Usage: " + __filename + "");
//     process.exit(-1);
// }

// var path = process.argv[3];
// console.log(process.argv);
// console.log(__dirname+'/');
let results = []
var TARGET = path.join(__dirname,"src/articles/")
fs.readdir(TARGET, function(err, items) {
    console.log(items);
    let arr = []
    for (let i=0; i<items.length; i++) {
        console.log(path.join(TARGET,items[i]))
        if(items[i].endsWith(".md")){
        arr.push(path.join("",items[i]))
        console.log('i',items[i]);
      }
    }
    for(let i =0;i<arr.length;i++){
    result = {
      path:arr[i],
      title:arr[i].split('_')[1].substr(0,arr[i].split('_')[1].length-3),
      date:arr[i].split('_')[0]
    }
    results.push(result)
    }
    // console.log(results);
    // console.log('\n result =>'  ,JSON.stringify(results));
    // console.log('\n');
    fs.writeFile('/Users/Nattapat/Learning/Vue/t01/safe-vue/src/articles/config.json', JSON.stringify(results) , function (err) {
        if (err)
            return console.log(err);
    })

})
