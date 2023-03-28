import React, { useEffect, useRef } from "react";
import anime from "animejs/lib/anime.es.js";
import VirtualChara from "./logo.svg";

const SvgLineDrawing = () => {
  const svgRef = useRef(null);

  useEffect(() => {
    const svgEl = svgRef.current;
    const pathEls = svgEl.querySelectorAll("path");
    const pathLengths = [];

    pathEls.forEach((pathEl) => {
      const pathLength = pathEl.getTotalLength();
      pathLengths.push(pathLength);
      pathEl.setAttribute("stroke-dasharray", pathLength);
      pathEl.setAttribute("stroke-dashoffset", pathLength);
    });

    anime({
      targets: pathEls,
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: "easeInOutSine",
      duration: 1500,
      delay: (el, i) => i * 100,
    });
  }, []);

  return (
    <div>
      <svg
        ref={svgRef}
        viewBox="0 0 300 300"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d={VirtualChara}
          fill="none"
          stroke="#000"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export default SvgLineDrawing;
