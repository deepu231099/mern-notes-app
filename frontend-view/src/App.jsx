import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Home from "./Home";
import NoteEditor from "./components/NoteEditor";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300">
        <Navbar />
        <div className="flex h-[calc(100vh-72px)] overflow-hidden">
          <aside className="w-64 hidden md:block border-r bg-white dark:bg-gray-800 dark:border-gray-700 shadow-sm">
            <Sidebar />
          </aside>
          <main className="flex-1 overflow-y-auto p-6 bg-gray-100 dark:bg-gray-900">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/note/:id" element={<NoteEditor />} />
            </Routes>
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
