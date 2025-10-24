import { useFavorites } from "../../hooks/useFavorites";
import toast from "react-hot-toast";
import { handleApiError } from "../../utils/handleApiError";
import type { Movie } from "../../types";

interface MovieCardProps extends Movie {
  onClick?: () => void;
  readOnly?: boolean;
}

export default function MovieCard({
  id,
  title,
  poster,
  rating,
  overview,
  release_date,
  onClick,
  readOnly = false,
}: MovieCardProps) {
  const { add } = useFavorites();

  const handleFavorite = async (e: React.MouseEvent) => {
    e.stopPropagation();
    try {
      await add({ id, title, poster, rating, overview, release_date });
      toast.success("🎬 Filme adicionado aos favoritos!");
    } catch (error) {
      handleApiError(error, "Erro ao adicionar favorito 😕");
    }
  };

  return (
    <div
      className={`
        relative overflow-hidden rounded-xl bg-[#1e293b] shadow-lg
        transition-all duration-300
        ${
          readOnly
            ? "cursor-default"
            : "cursor-pointer hover:scale-[1.03] hover:shadow-red-500/30"
        }
        animate-fadeIn
      `}
      onClick={onClick}
    >
      <img
        src={poster}
        alt={title}
        className={`
          h-80 w-full object-cover brightness-90 transition duration-300
          hover:brightness-100
        `}
      />

      <div
        className={`
          absolute right-3 top-3 rounded-md bg-red-600 px-3 py-1 text-sm
          font-semibold text-white shadow-md
        `}
      >
        ⭐ {rating?.toFixed(1) ?? "N/A"}
      </div>

      <div className="p-4 text-gray-100">
        <h3
          className={`
            line-clamp-2 text-lg font-semibold leading-snug text-white
          `}
          title={title}
        >
          {title}
        </h3>

        {!readOnly && (
          <button
            onClick={handleFavorite}
            className={`
              mt-3 w-full rounded-md bg-red-600 px-4 py-2 font-medium text-white
              shadow-md transition hover:scale-105 hover:bg-red-700
              focus:outline-none focus:ring-2 focus:ring-red-500
              focus:ring-offset-1 focus:ring-offset-[#1e293b]
            `}
          >
            ❤️ Favoritar
          </button>
        )}
      </div>
    </div>
  );
}