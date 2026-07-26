const fs = require("fs");
const util = require("util");

// Convert callback function into Promise
const unlinkFile = util.promisify(fs.unlink);

// Call the promisified function
unlinkFile("test.txt")
    .then(() => {
        console.log("File deleted successfully.");``
    })
    .catch((err) => {
        console.log("Error:", err.message);
    });