// Global Object: console
console.log("=== Global Objects Demo ===");


console.log("Current Directory:");
console.log(__dirname);


console.log("\nCurrent File:");
console.log(__filename);


console.log("\nNode Version:");
console.log(process.version);


console.log("\nPlatform:");
console.log(process.platform);

// Read Command Line Arguments
console.log("\nCommand Line Arguments:");

const args = process.argv.slice(2);

if (args.length === 0) {
    console.log("No arguments passed.");
} else {
    args.forEach((arg, index) => {
        console.log(`Argument ${index + 1}: ${arg}`);
    });
}


setTimeout(() => {
    console.log("\nProgram Finished.");
}, 2000);