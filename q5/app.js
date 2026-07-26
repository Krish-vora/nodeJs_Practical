const fs = require("fs");
const unzipper = require("unzipper");

// Read the ZIP file
fs.createReadStream("data.zip")

    // Extract into "extracted" folder
    .pipe(unzipper.Extract({ path: "extracted" }))

    .on("close", () => {
        console.log("ZIP file extracted successfully!");
    });