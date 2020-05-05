fs = require("fs");
data = fs.readFileSync('text1.txt');
console.log(data.toString());
console.log("Finished");