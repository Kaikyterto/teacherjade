export default function Link({ text, href = "#", className = "" }) {
  return (
    <a
      href={href}
      className={`btn-primary inline-block rounded-full px-5 py-3 font-semibold transition hover:scale-105 ${className}`}
    >
      {text}
    </a>
  );
}
