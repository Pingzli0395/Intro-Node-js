var fs = require('fs');
var readMe = fs.readFileSync('text.txt','utf8');
//console.log(readMe);
//fs.writeFileSync('HelloNodeJs.txt',readMe);
fs.mkdir('Project',function(){
    fs.writeFileSync('./Project/Readme.txt',readMe);
});