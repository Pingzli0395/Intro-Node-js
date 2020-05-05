fs = require("fs");
fs.readFile('text1.txt',  (err, data) => {
   if (err)
       return console.error(err);
   console.log(data.toString());
});
console.log("Finished");