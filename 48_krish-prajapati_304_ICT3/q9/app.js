const fs = require('fs');

console.log('Starting the application...');

fs.writeFileSync("demo.txt", "Hello Node.js");

const data = fs.readFileSync("demo.txt", "utf8");
console.log("File Content:", data);

fs.appendFileSync("demo.txt", "\nWelcome to FS Module");

console.log("\nAfter Append:");
console.log(fs.readFileSync("demo.txt", "utf8"));

fs.renameSync("demo.txt", "sample.txt");
console.log("\nFile Renamed Successfully");

if (fs.existsSync("sample.txt")) {
    console.log("File Exists");
}

const stats = fs.statSync("sample.txt");
console.log("File Size:", stats.size, "bytes");

fs.unlinkSync("sample.txt");
console.log("File Deleted Successfully");