import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();

  return (
    <header className="flex items-center justify-between bg-[#111827] px-8 py-4 shadow-lg shadow-black/30 backdrop-blur-sm">
      <h1 className="text-2xl font-bold text-red-500">
        CineApp<span className="text-gray-200">Movies</span>
      </h1>

      <nav className="flex items-center space-x-6">
        <Link
          to="/"
          className={`transition ${
            location.pathname === "/"
              ? "font-semibold text-red-400"
              : "text-gray-300 hover:text-red-400"
          }`}
        >
          Início
        </Link>

        <Link
          to="/favorites"
          className={`transition ${
            location.pathname === "/favorites"
              ? "font-semibold text-red-400"
              : "text-gray-300 hover:text-red-400"
          }`}
        >
          Favoritos
        </Link>
      </nav>
    </header>
  );
}
