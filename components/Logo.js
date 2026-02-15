export default function Logo() {
  return (
    <svg viewBox="0 0 900 200" className="w-48 fill-black">
      <text x="0" y="140" fontSize="140" fontWeight="700">
        Linktree
      </text>
      <g transform="translate(760,20)">
        <rect x="50" y="0" width="20" height="120" />
        <rect x="0" y="50" width="120" height="20" />
        <rect x="15" y="15" width="90" height="20" transform="rotate(45 60 60)" />
        <rect x="15" y="15" width="90" height="20" transform="rotate(-45 60 60)" />
      </g>
    </svg>
  );
}
