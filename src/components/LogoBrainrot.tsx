export const LogoBrainrot = ({ className = "h-12 w-12" }: { className?: string }) => (
  <svg
    viewBox="0 0 200 200"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={{
      filter: "drop-shadow(0 0 8px rgba(139, 92, 246, 0.6))",
    }}
  >
    {/* Outer rings */}
    <circle
      cx="100"
      cy="100"
      r="90"
      fill="none"
      stroke="white"
      strokeWidth="6"
      opacity="0.8"
    />
    <circle
      cx="100"
      cy="100"
      r="75"
      fill="none"
      stroke="url(#gradientRings)"
      strokeWidth="5"
      opacity="0.9"
      strokeDasharray="235.6 0"
      style={{ animation: "rotate 20s linear infinite" }}
    />

    {/* Planet sphere */}
    <defs>
      <radialGradient id="sphereGradient" cx="35%" cy="35%">
        <stop offset="0%" stopColor="#7dd3fc" />
        <stop offset="100%" stopColor="#0369a1" />
      </radialGradient>

      <linearGradient id="gradientRings" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#a78bfa" />
        <stop offset="50%" stopColor="#7dd3fc" />
        <stop offset="100%" stopColor="#a78bfa" />
      </linearGradient>

      <style>
        {`@keyframes rotate {
          from { transform: rotate(0deg); transform-origin: center; }
          to { transform: rotate(360deg); transform-origin: center; }
        }`}
      </style>
    </defs>

    {/* Main sphere */}
    <circle cx="100" cy="100" r="45" fill="url(#sphereGradient)" />

    {/* Shine effect */}
    <ellipse cx="85" cy="80" rx="15" ry="20" fill="white" opacity="0.3" />

    {/* Ring arcs - curved paths */}
    <path
      d="M 45 100 A 55 55 0 0 1 155 100"
      fill="none"
      stroke="white"
      strokeWidth="7"
      opacity="0.7"
      strokeLinecap="round"
    />

    {/* Second ring arc */}
    <path
      d="M 40 110 A 60 60 0 0 1 160 110"
      fill="none"
      stroke="url(#gradientRings)"
      strokeWidth="6"
      opacity="0.8"
      strokeLinecap="round"
    />

    {/* Third ring arc */}
    <path
      d="M 50 90 A 50 50 0 0 1 150 90"
      fill="none"
      stroke="white"
      strokeWidth="5"
      opacity="0.6"
      strokeLinecap="round"
    />
  </svg>
);

export default LogoBrainrot;
