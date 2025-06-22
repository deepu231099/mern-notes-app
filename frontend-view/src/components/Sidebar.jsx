import { Link } from "react-router-dom";

export default function Sidebar() {
  const tags = ["All Notes"];
  return (
    <aside className="w-64 bg-white border-r p-4">
      <h2 className="text-md font-semibold mb-4">Tags</h2>
      <ul className="space-y-2">
        {tags.map((tag) => (
          <li key={tag}>
            <Link
              to={tag === "All Notes" ? "/" : `/tags/${tag.toLowerCase()}`}
              className="text-indigo-600 hover:underline"
            >
              {tag}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
