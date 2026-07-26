function getReply(question) {
    if (question === "hi") {
        return "Hello!";
    }
    else if (question === "how are you") {
        return "I am fine.";
    }
    else if (question === "course") {
        return "We provide Node.js, Java and Python courses.";
    }
    else if (question === "fees") {
        return "Course fee is ₹5000.";
    }
    else if (question === "bye") {
        return "Thank you! Visit again.";
    }
    else {
        return "I don't understand your question.";
    }
}

module.exports = getReply;