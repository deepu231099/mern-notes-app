import { useNavigate } from "react-router-dom";

export default function NoteCard({ note }) {
  const navigate = useNavigate();

  const formattedDate = new Date(note.createdAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <div
      onClick={() => navigate(`/note/${note._id}`)}
      className="group bg-white border border-gray-200 hover:border-indigo-400 p-5 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-200 cursor-pointer relative overflow-hidden"
    >
      <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-indigo-600 transition-colors">
        {note.title}
      </h3>
      <p className="text-sm text-gray-600 line-clamp-3 mb-3">{note.content}</p>
      <div className="flex justify-between items-center text-xs text-gray-400">
        <span>📅 {formattedDate}</span>
        <span className="text-[10px] bg-indigo-100 text-indigo-600 px-2 py-0.5 rounded-full uppercase tracking-wide">
          note
        </span>
      </div>
    </div>
  );
}
