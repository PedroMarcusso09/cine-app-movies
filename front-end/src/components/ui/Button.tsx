import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  color?: "blue" | "red" | "green" | "gray";
  type?: "button" | "submit" | "reset";
  className?: string;
}

export default function Button({
  children,
  onClick,
  color = "blue",
  type = "button",
  className = "",
}: ButtonProps) {
  const base = `
    px-3 py-1 rounded-md font-medium transition
    focus:outline-none focus:ring-2 focus:ring-offset-2
  `;

  const colors = {
    blue: `
      bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500
    `,
    red: `
      bg-red-500 text-white hover:bg-red-600 focus:ring-red-500
    `,
    green: `
      bg-green-500 text-white hover:bg-green-600 focus:ring-green-500
    `,
    gray: `
      bg-gray-300 text-gray-800 hover:bg-gray-400 focus:ring-gray-400
    `,
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${base} ${colors[color]} ${className}`}
    >
      {children}
    </button>
  );
}

