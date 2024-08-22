// src/components/CircleProgress.tsx
import React from "react";

interface CircleProgressProps {
  percentage: number;
}

const CircleProgress: React.FC<CircleProgressProps> = ({ percentage }) => {
  const radius = 50; // Raio do círculo
  const strokeWidth = 10; // Largura do traço
  const normalizedRadius = radius - strokeWidth * 0.5; // Ajuste para centralizar o traço
  const circumference = 2 * Math.PI * normalizedRadius; // Comprimento do círculo

  // Calcula o comprimento do arco baseado na porcentagem
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <svg
      width={radius * 2}
      height={radius * 2}
      viewBox={`0 0 ${radius * 2} ${radius * 2}`}
      style={{ transform: "rotate(-90deg)" }} // Rotaciona o SVG em 90 graus
    >
      <circle
        stroke="lightgray" // Cor do círculo de fundo
        fill="none"
        strokeWidth={strokeWidth}
        r={normalizedRadius}
        cx={radius}
        cy={radius}
      />
      <circle
        stroke="var(--primaria-color)" // Cor do círculo progressivo
        fill="none"
        strokeWidth={strokeWidth}
        strokeDasharray={circumference}
        strokeDashoffset={strokeDashoffset}
        r={normalizedRadius}
        cx={radius}
        cy={radius}
        style={{ transition: "stroke-dashoffset 0.5s ease" }}
      />
    </svg>
  );
};

export default CircleProgress;
