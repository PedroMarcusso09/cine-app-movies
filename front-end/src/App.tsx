import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import FavoritesPage from "./pages/FavoritesPage";
import SharedListPage from "./pages/SharedListPage";

export default function App() {
  return (
    <div className="flex min-h-screen flex-col bg-gray-100">
      <Header />

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="/shared/:shareId" element={<SharedListPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
