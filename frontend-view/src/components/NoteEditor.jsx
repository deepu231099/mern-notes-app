import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

export default function NoteEditor() {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEditMode = id !== "new";

  const [loading, setLoading] = useState(false);
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  useEffect(() => {
    if (isEditMode) {
      setLoading(true);
      axios
        .get(`http://localhost:5000/api/notes/${id}`)
        .then((res) => setNote(res.data))
        .catch(() => alert("Failed to load note"))
        .finally(() => setLoading(false));
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNote((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = async () => {
    try {
      if (isEditMode) {
        await axios.put(`http://localhost:5000/api/notes/${id}`, note);
      } else {
        await axios.post("http://localhost:5000/api/notes", note);
      }
      navigate("/");
    } catch (err) {
      alert("Failed to save note");
    }
  };

  const handleDelete = async () => {
    if (!isEditMode) return navigate("/");

    const confirmed = window.confirm(
      "Are you sure you want to delete this note?"
    );
    if (!confirmed) return;

    try {
      await axios.delete(`http://localhost:5000/api/notes/${id}`);
      navigate("/");
    } catch {
      alert("Failed to delete note");
    }
  };

  return (
    <div className="max-w-3xl mx-auto bg-white p-6 rounded-2xl shadow-md mt-6">
      {loading ? (
        <p className="text-gray-500 text-center">Loading...</p>
      ) : (
        <>
          <input
            name="title"
            className="w-full text-3xl font-bold border-b border-gray-300 focus:border-indigo-500 focus:outline-none pb-2 mb-4 transition-colors"
            placeholder="Title"
            value={note.title}
            onChange={handleChange}
          />
          <textarea
            name="content"
            className="w-full h-64 border border-gray-300 rounded-md p-4 resize-none text-sm leading-relaxed focus:outline-none focus:border-indigo-500 transition-colors"
            placeholder="Write your note..."
            value={note.content}
            onChange={handleChange}
          />
          <div className="mt-6 flex gap-4 justify-end">
            <button
              onClick={handleSave}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-6 py-2 rounded-full font-semibold hover:from-indigo-600 hover:to-purple-600 transition"
            >
              💾 Save
            </button>
            {isEditMode && (
              <button
                onClick={handleDelete}
                className="inline-flex items-center gap-2 text-red-600 border border-red-500 px-6 py-2 rounded-full font-medium hover:bg-red-50 transition"
              >
                🗑️ Delete
              </button>
            )}
          </div>
        </>
      )}
    </div>
  );
}
