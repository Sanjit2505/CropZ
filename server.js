const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.post("/api/auth/login", (req, res) => {
    console.log("LOGIN CALLED");
    res.json({
        success: true,
        message: "Login successful"
    });
});

app.post("/api/auth/register", (req, res) => {
    console.log("REGISTER CALLED");
    res.json({
        success: true,
        message: "Register successful"
    });
});

app.get("/", (req, res) => {
    res.send("Server working");
});

app.listen(PORT, () => {
    console.log("SERVER STARTED SUCCESSFULLY");
    console.log("http://localhost:3000");
});