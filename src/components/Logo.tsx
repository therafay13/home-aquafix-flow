const Logo = ({ isDark = false }: { isDark?: boolean }) => {
  const textColor = isDark ? "text-white" : "text-primary";
  const strokeColor = isDark ? "#ffffff" : "hsl(240 6% 11%)";
  return (
    <div className="flex items-center gap-2.5">
      <div className="relative">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="44"
          height="44"
          viewBox="0 0 44 44"
          fill="none"
          aria-label="Cheshire Spray Specialists"
        >
          {/* Stencil-style hex shield */}
          <path
            d="M22 2 L40 12 V32 L22 42 L4 32 V12 Z"
            stroke={strokeColor}
            strokeWidth="2.5"
            fill="none"
          />
          {/* CSS stencil letters */}
          <text
            x="22"
            y="27"
            textAnchor="middle"
            fontFamily="'Bebas Neue', Impact, sans-serif"
            fontSize="14"
            letterSpacing="1"
            fill={strokeColor}
          >
            CSS
          </text>
          {/* Ember spray dot */}
          <circle cx="34" cy="10" r="3.2" fill="hsl(14 78% 57%)" />
          <circle cx="38" cy="7" r="1.2" fill="hsl(16 100% 65%)" opacity="0.85" />
          <circle cx="36" cy="14" r="1" fill="hsl(16 100% 65%)" opacity="0.7" />
        </svg>
      </div>
      <div className="flex flex-col leading-none">
        <span className={`font-bebas tracking-wider text-xl ${textColor}`}>CHESHIRE SPRAY</span>
        <span className="font-bebas tracking-[0.25em] text-[10px] text-tertiary mt-0.5">SPECIALISTS</span>
      </div>
    </div>
  );
};

export default Logo;
