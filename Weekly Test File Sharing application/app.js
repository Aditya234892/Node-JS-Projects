// Import dependencies
require("dotenv").config();
const express = require("express");
const fileUpload = require("express-fileupload");
const crypto = require("crypto");
const fs = require("fs");
const jwt = require("jsonwebtoken");

// Initialize the app
const app = express();
app.use(express.json());
app.use(fileUpload());

// Middleware for authentication
function authenticateToken(req, res, next) {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];
    if (!token) return res.status(401).json({ message: "Token missing" });

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) return res.status(403).json({ message: "Invalid token" });
        req.user = user;
        next();
    });
}

// Routes
// User registration
app.post("/register", (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
        return res.status(400).json({ message: "Username and password required" });
    }

    // Simulate user registration
    const user = { username };
    const token = jwt.sign(user, process.env.JWT_SECRET, { expiresIn: "1h" });
    res.status(201).json({ message: "User registered successfully", token });
});

// User login
app.post("/login", (req, res) => {
    const { username, password } = req.body;
    if (username === "testuser" && password === "securepassword") {
        const user = { username };
        const token = jwt.sign(user, process.env.JWT_SECRET, { expiresIn: "1h" });
        res.status(200).json({ message: "Login successful", token });
    } else {
        res.status(403).json({ message: "Invalid credentials" });
    }
});

// File upload and encryption
app.post("/upload", authenticateToken, (req, res) => {
    if (!req.files || !req.files.file) {
        return res.status(400).json({ message: "No file uploaded" });
    }

    const file = req.files.file;
    const filePath = `./uploads/${file.name}`;
    const encryptedPath = `${filePath}.enc`;

    // Save file locally
    file.mv(filePath, (err) => {
        if (err) return res.status(500).json({ message: "File upload failed", error: err });

        // Encrypt the file
        const cipher = crypto.createCipher("aes-256-cbc", process.env.ENCRYPTION_KEY);
        const input = fs.createReadStream(filePath);
        const output = fs.createWriteStream(encryptedPath);

        input.pipe(cipher).pipe(output);
        output.on("finish", () => {
            res.status(200).json({
                message: "File uploaded and encrypted successfully",
                file: { originalName: file.name, encryptedName: `${file.name}.enc` },
            });
        });
    });
});

// File download
app.get("/download/:filename", authenticateToken, (req, res) => {
    const filePath = `./uploads/${req.params.filename}`;
    if (!fs.existsSync(filePath)) {
        return res.status(404).json({ message: "File not found" });
    }
    res.download(filePath);
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
