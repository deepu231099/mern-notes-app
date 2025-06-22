export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 bg-white border-b shadow-sm px-6 py-4 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
      <h1 className="text-2xl font-extrabold text-indigo-600 tracking-tight">
        📝 MyNotes
      </h1>
      <input
        type="text"
        placeholder="Search notes..."
        className="w-full sm:w-72 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm shadow-sm transition"
      />
    </header>
  );
}
