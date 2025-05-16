import React from "react";

const CircularProgressBar = ({ point, size = 3, strokeWidth = 0.25 }) => {
  const radius = size / 2 - strokeWidth;
  const strokeDasharray = radius * Math.PI * 2;
  const strokeDashoffset = strokeDasharray - (point / 100) * strokeDasharray;
  const stroke = point >= 70 ? "green" : point >= 50 ? "yellow" : "red";
  return (
    <div>
      <svg width={`${size}vw`} height={`${size}vw`}>
        <circle
          r={`${radius}vw`}
          cx={`${size / 2}vw`}
          cy={`${size / 2}vw`}
          stroke="white"
          strokeWidth={`${strokeWidth}vw`}
        />
        <circle
          r={`${radius}vw`}
          cx={`${size / 2}vw`}
          cy={`${size / 2}vw`}
          stroke={stroke}
          strokeWidth={`${strokeWidth}vw`}
          fill="none"
          strokeDasharray={`${strokeDasharray}vw`}
          strokeDashoffset={`${strokeDashoffset}vw`}
          transform="rotate(-90)"
          style={{ transformOrigin: "center" }}
          strokeLinecap="round"
        />
        <text
          x={`${size / 2}vw`}
          y={`${size / 2}vw`}
          fill="white"
          fontSize="1.2vw"
          alignmentBaseline="middle"
          textAnchor="middle"
        >
          {point}
        </text>
      </svg>
    </div>
  );
};

export default CircularProgressBar;
