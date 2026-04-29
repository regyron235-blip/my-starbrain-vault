export const LogoBrainrot = ({ className = "w-full" }: { className?: string }) => (
  <svg
    viewBox="0 0 900 280"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    preserveAspectRatio="xMidYMid meet"
  >
    <defs>
      <style>
        {`
          .brainrot-text {
            font-family: 'Arial Black', sans-serif;
            font-weight: 900;
            fill: #0c5a8e;
            letter-spacing: -2px;
          }
          .brainrot-main {
            font-size: 120px;
          }
          .brainrot-elite {
            font-size: 80px;
          }
        `}
      </style>
    </defs>

    {/* Top left star */}
    <g transform="translate(130, 30)">
      <polygon
        points="0,-20 5.86,-6.18 20,-6.18 11.76,2.36 17.64,18.54 0,9.18 -17.64,18.54 -11.76,2.36 -20,-6.18 -5.86,-6.18"
        fill="#f59e0b"
      />
    </g>

    {/* Top right star */}
    <g transform="translate(770, 30)">
      <polygon
        points="0,-20 5.86,-6.18 20,-6.18 11.76,2.36 17.64,18.54 0,9.18 -17.64,18.54 -11.76,2.36 -20,-6.18 -5.86,-6.18"
        fill="#f59e0b"
      />
    </g>

    {/* BRAINROT text */}
    <text x="450" y="120" textAnchor="middle" className="brainrot-text brainrot-main">
      BRAINROT
    </text>

    {/* ELITE text */}
    <text x="450" y="200" textAnchor="middle" className="brainrot-text brainrot-elite">
      ELITE
    </text>

    {/* Bottom left star */}
    <g transform="translate(180, 250)">
      <polygon
        points="0,-20 5.86,-6.18 20,-6.18 11.76,2.36 17.64,18.54 0,9.18 -17.64,18.54 -11.76,2.36 -20,-6.18 -5.86,-6.18"
        fill="#f59e0b"
      />
    </g>

    {/* Bottom right star */}
    <g transform="translate(720, 250)">
      <polygon
        points="0,-20 5.86,-6.18 20,-6.18 11.76,2.36 17.64,18.54 0,9.18 -17.64,18.54 -11.76,2.36 -20,-6.18 -5.86,-6.18"
        fill="#f59e0b"
      />
    </g>
  </svg>
);

export default LogoBrainrot;
