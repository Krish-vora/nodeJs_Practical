const express = require("express");

const app = express();
const PORT = 3000;

app.get("/google", async (req, res) => {
    try {
        const response = await fetch("https://www.google.com");

        const data = await response.text();

        res.send(data);

    } catch (error) {
        res.status(500).send("Error: " + error.message);
    }
});

app.get("/search", async (req, res) => {
    const query = req.query.q;

    if (!query) {
        return res.status(400).send("Query parameter 'q' is required.");
    }

    try {
        const response = await fetch(`https://www.google.com/search?q=${encodeURIComponent(query)}`);

        const data = await response.text();

        res.send(data);

    } catch (error) {
        res.status(500).send("Error: " + error.message);
    }


});
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});