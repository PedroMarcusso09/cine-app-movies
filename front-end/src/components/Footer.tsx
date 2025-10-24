export default function Footer() {
  return (
    <footer className="mt-10 border-t border-gray-700 bg-[#0f172a] py-6 text-center text-gray-300">
      <p className="text-sm">
        © {new Date().getFullYear()}{" "}
        <span className="font-semibold text-red-500">Verzel</span> |
        Desenvolvido por{" "}
        <span className="font-medium text-white">Pedro Marcusso</span>
      </p>
      <p className="mt-1 text-xs text-gray-500">Todos os direitos reservados</p>
    </footer>
  );
}
