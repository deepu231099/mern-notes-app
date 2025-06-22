import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import NoteCard from "./components/NoteCard";

export default function Home() {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchNotes = async () => {
      setLoading(true);
      try {
        const res = await axios.get("http://localhost:5000/api/notes");
        setNotes(res.data);
      } catch (err) {
        console.error("Failed to fetch notes:", err);
        setNotes([]);
      } finally {
        setLoading(false);
      }
    };
    fetchNotes();
  }, []);

  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-gray-700">Your Notes</h2>
        <button
          onClick={() => navigate("/note/new")}
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold rounded-full shadow-md hover:from-indigo-600 hover:to-purple-600 transition-transform transform hover:scale-105"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4v16m8-8H4"
            />
          </svg>
          Add Note
        </button>
      </div>

      {loading ? (
        <p className="text-gray-500">Loading notes...</p>
      ) : notes.length === 0 ? (
        <div className="text-center text-gray-400 mt-10">
          No notes available.
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {notes.map((note) => (
            <NoteCard key={note._id} note={note} />
          ))}
        </div>
      )}
    </div>
  );
}
