import Note from "../models/notes.js";

export const getAllNotes = async () => await Note.find().sort({ createdAt: -1 });
export const getNoteById = async (id) => await Note.findById(id);
export const createNote = async (data) => await Note.create(data);
export const updateNote = async (id, data) => await Note.findByIdAndUpdate(id, data, { new: true });
export const deleteNote = async (id) => await Note.findByIdAndDelete(id);