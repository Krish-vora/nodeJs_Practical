const readline = require('readline');
const getReply = require('./chatbot');

const rl = readline.createInterface({

    input: process.stdin,
    output: process.stdout
});

rl.question('ask your question: ', (que) => {
    const ans = getReply(que);

    console.log("Bot :", ans);
    rl.close();
});