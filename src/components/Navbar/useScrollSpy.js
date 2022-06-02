// https://dev.to/rgolawski/highlight-active-menu-item-with-scrollspy-hook-1gpp

import { useState, useLayoutEffect } from 'react';

// Restrict value to be between the range [0, value]
const clamp = (value) => Math.max(0, value);

// Check if number is between two values
const isBetween = (value, floor, ceil) =>
  value >= floor && value <= ceil;

export default function useScrollspy(ids) {
  const [activeId, setActiveId] = useState("");
  
  useLayoutEffect(() => {
    const isBrowser = typeof window !== 'undefined'
    if (!isBrowser) return false

    const listener = () => {
      const offset = window.screen.height/2
      const scroll = window.pageYOffset;

      const position = ids
        .map((id) => {
          const element = document.getElementById(id);

          if (!element) return { id, top: -1, bottom: -1 };

          const rect = element.getBoundingClientRect();
          const top = clamp(rect.top + scroll - offset);
          const bottom = clamp(rect.bottom + scroll - offset);

          return { id, top, bottom };
        })
        .find(({ top, bottom }) => isBetween(scroll, top, bottom));

      setActiveId(position?.id || "");
    };

    listener();

    window.addEventListener("resize", listener);
    window.addEventListener("scroll", listener);

    return () => {
      window.removeEventListener("resize", listener);
      window.removeEventListener("scroll", listener);
    };
  }, [ids]);

  return activeId;
};
