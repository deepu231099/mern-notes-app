import * as NoteService from "../services/notes.js";

export const getNotes = async (req, res) => {
    try {
        const notes = await NoteService.getAllNotes();
        res.json(notes);
    } catch (err) {
        res.status(500).json({ error: "Failed to fetch notes" });
    }
};

export const getNote = async (req, res) => {
    try {
        const note = await NoteService.getNoteById(req.params.id);
        if (!note) return res.status(404).json({ error: "Note not found" });
        res.json(note);
    } catch (err) {
        res.status(500).json({ error: "Failed to fetch note" });
    }
};

export const addNote = async (req, res) => {
    try {
        const newNote = await NoteService.createNote(req.body);
        res.status(201).json(newNote);
    } catch (err) {
        res.status(400).json({ error: "Failed to create note" });
    }
};

export const updateNote = async (req, res) => {
    try {
        const updated = await NoteService.updateNote(req.params.id, req.body);
        if (!updated) return res.status(404).json({ error: "Note not found" });
        res.json(updated);
    } catch (err) {
        res.status(400).json({ error: "Failed to update note" });
    }
};

export const deleteNote = async (req, res) => {
    try {
        const deleted = await NoteService.deleteNote(req.params.id);
        if (!deleted) return res.status(404).json({ error: "Note not found" });
        res.json({ message: "Note deleted" });
    } catch (err) {
        res.status(400).json({ error: "Failed to delete note" });
    }
};