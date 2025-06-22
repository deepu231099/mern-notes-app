import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import noteRoutes from "./routes/notes.js"

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/notes", noteRoutes);

const PORT = 5000;


mongoose
    .connect("mongodb://mongo:27017/notesdb")
    .then(() => {
        app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
    })
    .catch((error) => console.error("❌ MongoDB connection error:", error));
