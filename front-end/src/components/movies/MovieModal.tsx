import type { Movie } from "../../types";

interface MovieModalProps {
  movie: Movie | null;
  onClose: () => void;
}

export default function MovieModal({ movie, onClose }: MovieModalProps) {
  if (!movie) return null;

  return (
    <div
      data-testid="modal"
      className={`
        fixed inset-0 z-50 flex animate-fadeIn items-center justify-center
        bg-black/80 backdrop-blur-sm
      `}
      onClick={onClose}
    >
      <div
        className={`
          relative mx-4 w-full max-w-xl animate-slideUp overflow-hidden rounded-2xl
          bg-[#0f172a] text-gray-100 shadow-xl
        `}
        onClick={e => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className={`
            absolute right-3 top-2 z-50 text-3xl text-gray-400 transition
            hover:text-red-500
          `}
        >
          ×
        </button>

        <div className="h-[320px] w-full overflow-hidden bg-black">
          <img
            src={movie.poster}
            alt={movie.title}
            className="h-full w-full object-cover object-center"
          />
        </div>

        <div
          className={`
            max-h-[250px] space-y-3 overflow-y-auto p-5
          `}
        >
          <h2 className="text-2xl font-bold text-red-500">{movie.title}</h2>

          <p className="text-sm text-gray-400">
            <strong>Data de lançamento:</strong>{" "}
            {movie.release_date || "Não informada"}
          </p>

          <p className="text-sm leading-relaxed text-gray-200">
            {movie.overview || "Sem descrição disponível."}
          </p>

          <div
            className={`
              inline-flex items-center gap-2 rounded-md bg-red-600 px-3 py-1.5
              text-sm font-semibold text-white shadow-md shadow-red-500/40
            `}
          >
            ⭐ {movie.rating.toFixed(1)} / 10
          </div>
        </div>
      </div>
    </div>
  );
}

