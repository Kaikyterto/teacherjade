export default function Button({ text, className = "", onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-xl bg-rose-700 px-6 py-3 font-bold text-white shadow-lg transition hover:scale-105 hover:bg-rose-800 ${className}`}
    >
      {text}
    </button>
  );
}
