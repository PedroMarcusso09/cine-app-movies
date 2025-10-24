import { useFavorites } from "../../hooks/useFavorites";
import Button from "../ui/Button";
import { Film } from "lucide-react";

export default function FavoritesPanel() {
  const { favorites = [], remove, share, shareLink } = useFavorites();

  return (
    <aside
      className={`
        mx-8 my-8 rounded-2xl border border-gray-800
        bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a]
        p-6 shadow-[0_0_25px_rgba(229,9,20,0.1)] backdrop-blur-sm
        transition-all hover:shadow-[0_0_35px_rgba(229,9,20,0.25)]
      `}
    >
      <div className="mb-6 flex items-center justify-between">
        <h2
          className={`
            flex items-center gap-2 text-2xl font-semibold text-red-500 drop-shadow-sm
          `}
        >
          <Film className="h-6 w-6 text-red-500" />
          Meus Favoritos
        </h2>

        <Button color="red" onClick={share}>
          Compartilhar
        </Button>
      </div>

      {favorites.length === 0 ? (
        <p className="text-center italic text-gray-400">
          Nenhum filme favoritado ainda 🎬
        </p>
      ) : (
        <ul className="space-y-3">
          {favorites.map(fav => (
            <li
              key={fav.id}
              className={`
                flex items-center justify-between rounded-md border border-gray-700
                bg-gray-800/40 px-4 py-2 text-gray-100 shadow-inner transition
                hover:bg-gray-700/60
              `}
            >
              <span className="max-w-[70%] truncate font-medium">{fav.title}</span>

              <Button color="gray" onClick={() => remove(fav.id!)}>
                Remover
              </Button>
            </li>
          ))}
        </ul>
      )}

      {shareLink && (
        <div
          className={`
            mt-6 rounded-lg border border-gray-700 bg-gray-900/60 p-4 text-sm text-gray-300
            shadow-inner transition-all hover:border-red-500
          `}
        >
          <p className="mb-2 text-gray-400">🔗 Link gerado:</p>

          <a
            href={shareLink}
            target="_blank"
            rel="noopener noreferrer"
            className={`
              break-all font-medium text-red-400 underline hover:text-red-300
            `}
          >
            {shareLink}
          </a>
        </div>
      )}
    </aside>
  );
}

