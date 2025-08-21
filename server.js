const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// In-memory "database"
let users = [];

// ---------------- REST API ----------------

// REGISTER API
app.post("/api/register", (req, res) => {
    const { firstName, lastName, designation, phone, email, password, age18 } = req.body;

    if (users.find(u => u.email === email)) {
        return res.status(400).json({ status: "error", message: "Email already registered" });
    }

    // Password: must be ≥ 8 chars, only letters or digits
    const passwordRegex = /^[A-Za-z0-9]{8,}$/;
    if (!passwordRegex.test(password)) {
        return res.status(400).json({ status: "error", message: "Password must be at least 8 characters long and contain only letters or digits" });
    }

    if (!age18 || age18 === "false") {
        return res.status(400).json({ status: "error", message: "You must be at least 18 years old" });
    }

    users.push({ firstName, lastName, designation, phone, email, password });
    res.json({ status: "success", message: "Account created successfully" });
});

// LOGIN API
app.post("/api/login", (req, res) => {
    const { email, password } = req.body;
    const user = users.find(u => u.email === email && u.password === password);

    if (!user) {
        return res.status(401).json({ status: "error", message: "Invalid email or password" });
    }

    res.json({
        status: "success",
        message: "Login successful",
        token: "mock-jwt-token-12345",
        user: {
            firstName: user.firstName,
            lastName: user.lastName,
            designation: user.designation,
            phone: user.phone,
            email: user.email
        }
    });
});

// ---------------- PAGE ROUTES ----------------

// Homepage
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

// Login page
app.get("/login", (req, res) => {
    res.sendFile(path.join(__dirname, "login.html"));
});

// Register page
app.get("/register", (req, res) => {
    res.sendFile(path.join(__dirname, "register.html"));
});

// ---------------- START SERVER ----------------
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`✅ Server running at http://localhost:${PORT}`);
});
