const dotenv = require("dotenv").config({ path: "./ENV/.env" });
const express = require("express");
const axios = require("axios");
const app = express();
const cors = require("cors");

app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.json());

const API_KEY = process.env.API_KEY;
const port = process.env.PORT || 4000;
const nodeEnv = process.env.NODE_ENV;

const headers = {
    headers: {
        "Ocp-Apim-Subscription-Key": API_KEY,
        "Content-Type": "application/json",
    },
};

app.post("/search-result", async (req, res) =>{
    const { query } = req.body;
    try {
        const response = await axios.get(
            `https://api.bing.microsoft.com/v7.0/custom/search?q=${query}&customconfig=48719f86-4c1b-44ad-bcc1-133206b49a6d&mkt=en-US`,
            headers
        );
        res.send(response.data);
    } catch (error) {
        console.log(error);
    }
});



app.listen(port, () => {
  "Server listening on port", port;
});

