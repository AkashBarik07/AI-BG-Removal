import "dotenv/config.js";
import cors from "cors";
import express from "express";
import connectDB from "./Config/mongodb.js";


// App config
const PORT = process.env.PORT || 4000;
const app = express();

// Connect to MongoDB
await connectDB

// Initialize middleware
app.use(express.json());
app.use(cors());

// API router
app.get("/", (req, res) => res.send("API working"));

// Start the server
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
