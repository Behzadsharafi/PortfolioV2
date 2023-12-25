import React from "react";

const StaticEffect = () => {
  return (
    <svg className={styles.svg}>
      <defs>
        <filter id="noise">
          <feTurbulence
            baseFrequency="0.7,0.8"
            numOctaves="1"
            seed="0"
            type="fractalNoise"
            result="static"
          >
            <animate
              attributeName="seed"
              values="0;100"
              dur="80ms"
              repeatCount="5"
              begin="card.mouseenter"
            />
          </feTurbulence>
          <feDisplacementMap in="SourceGraphic" in2="static">
            <animate
              attributeName="scale"
              values="0;40;0"
              dur="80ms"
              repeatCount="5"
              begin="card.mouseenter"
            />
          </feDisplacementMap>
        </filter>
      </defs>
    </svg>
  );
};

export default StaticEffect;
