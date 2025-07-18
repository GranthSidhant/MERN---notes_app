import dotenv from "dotenv";
dotenv.config(); 
 
 import express from "express";
// const express = require("express");

import notesRoutes from "./routes/notesRoutes.js"
import { connectDB } from "./config/db.js";


export const app = express();
const PORT = process.env.PORT || 5001
connectDB();


// middleware
app.use(express.json());
app.use("/api/notes", notesRoutes);

app.listen(PORT,() => {
    console.log(`server is running on PORT:`,PORT);
})