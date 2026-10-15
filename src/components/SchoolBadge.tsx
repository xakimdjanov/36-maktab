import React, { useState } from 'react';

interface SchoolBadgeProps {
  className?: string;
  size?: number;
}

export const SchoolBadge: React.FC<SchoolBadgeProps> = ({ className = 'w-10 h-10', size = 44 }) => {
  const [imageError, setImageError] = useState(false);

  if (!imageError) {
    return (
      <img
        src="/logo.png"
        alt="Namangan shahar 36-sonli maktab rasmiy logotipi"
        width={size}
        height={size}
        onError={() => setImageError(true)}
        className={`shrink-0 rounded-full object-contain p-0.5 bg-white shadow-apple-sm border-2 border-[#4E724B]/30 ${className}`}
        style={{ width: size, height: size }}
      />
    );
  }

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 rounded-full shadow-apple-sm ${className}`}
      aria-label="Namangan shahar 36-sonli umumta'lim maktabi rasmiy nishoni"
    >
      <circle cx="50" cy="50" r="48" fill="#4E724B" stroke="#C8DCC6" strokeWidth="2.5" />
      <circle cx="50" cy="50" r="43" fill="#2A4328" stroke="#E2EDE1" strokeWidth="1" strokeDasharray="2 2" />
      <path
        d="M50 63V39C50 39 43 35 32 35C24 35 20 38 20 38V62C20 62 25 59 33 59C42 59 50 63 50 63Z"
        fill="#FFFFFF"
      />
      <path
        d="M50 63V39C50 39 57 35 68 35C76 35 80 38 80 38V62C80 62 75 59 67 59C58 59 50 63 50 63Z"
        fill="#FFFFFF"
      />
      <path d="M50 39V63" stroke="#8EA98B" strokeWidth="2" strokeLinecap="round" />
      <path
        d="M50 24L51.8 28.5L56.5 29.5L52.8 32.8L54 37.5L50 34.5L46 37.5L47.2 32.8L43.5 29.5L48.2 28.5L50 24Z"
        fill="#FFFFFF"
      />
      <path d="M24 74H76L71 83H29L24 74Z" fill="#4E724B" stroke="#E2EDE1" strokeWidth="1" />
      <text
        x="50"
        y="81"
        fill="#FFFFFF"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontSize="8"
        fontWeight="800"
        textAnchor="middle"
        letterSpacing="0.5"
      >
        36-MAKTAB
      </text>
    </svg>
  );
};
