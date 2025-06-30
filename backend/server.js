 import express from "express";
// const express = require("express");

import notesRoutes from "./routes/notesRoutes"

const app = express();

app.use = ("/api/notes", notesRoutes);


app.listen(5001,() => {
    console.log(`server is running on port 5001`);
})