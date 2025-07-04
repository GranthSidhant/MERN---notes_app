 import express from "express";
// const express = require("express");

import notesRoutes from "./routes/notesRoutes.js"
import { connectDB } from "./config/db.js";


const app = express();

connectDB();

app.use("/api/notes", notesRoutes);

app.listen(5001,() => {
    console.log(`server is running on port 5001`);
})