// Button.jsx
export default function Button({
  children,
  size = "md", // "sm" | "md" | "lg"
  onClick,
  type = "button"
}) {
  const baseClasses =
    "px-6 py-3 font-bold text-base text-white rounded-md border-2 transition duration-150 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[${PRIMARY_COLOR}] whitespace-nowrap";

  const sizeClasses = {
    sm: "text-xs px-3 py-1.5",
    md: "text-sm px-5 py-2.5",
    lg: "text-lg px-6 py-3",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseClasses} ${sizeClasses[size]}`}
    >
      {children}
    </button>
  );
}
