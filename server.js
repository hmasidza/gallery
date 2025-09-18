// server.js
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const config = require('./_config');

// Define routes
let index = require("./routes/index");
let image = require("./routes/image");

// Determine environment (defaults to development)
const env = process.env.NODE_ENV || "development";
const mongoURI = config.mongoURI[env];

console.log(`Running in ${env} mode...`);
console.log(`Connecting to MongoDB: ${mongoURI}`);

// Connect to MongoDB
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

let db = mongoose.connection;
db.on("error", (err) => console.error("MongoDB connection error:", err));
db.once("open", () => console.log("Database connected successfully"));

// Initialize Express
const app = express();

// View Engine
app.set("view engine", "ejs");

// Public Folder
app.use(express.static(path.join(__dirname, "public")));

// Body Parser
app.use(express.json());

// Routes
app.use("/", index);
app.use("/image", image);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`Server is listening at http://localhost:${PORT}`)
);