import Note from "../models/Note.js";

export async function getAllNotes (req, res) {
    try {
        const notes = await Note.find();
        res.status(200).json(notes);
    } catch (error) {
        console.error("Error in getAllMethod",error);
        res.status(500).json({message:"internal server error"})
    }
};

export async function createNote (req, res) {
    res.status(201).json({ message: "Note created successfully" });
};

export async function updateNote (req, res) {
    res.status(200).json({ message: "Note updated successfully" });
};

export async function deleteNote (req, res) {
    res.status(200).json({ message: "Note deleted successfully" });
};