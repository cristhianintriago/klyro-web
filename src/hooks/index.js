// ─── HOOKS ────────────────────────────────────────────────────
// Reusable React hooks shared across all components.
// ─────────────────────────────────────────────────────────────

import { useState, useEffect, useRef } from "react";

/**
 * useInView — triggers once when the element enters the viewport.
 * Used for scroll-reveal animations throughout the page.
 */
export function useInView(options = {}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.1, ...options }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return [ref, visible];
}

/**
 * useHover — returns [isHovered, eventHandlers].
 * Spread the handlers onto any element: <div {...hov}>
 */
export function useHover() {
  const [hovered, set] = useState(false);
  return [
    hovered,
    {
      onMouseEnter: () => set(true),
      onMouseLeave: () => set(false),
    },
  ];
}

/**
 * useScrolled — returns true once the page scrolls past `threshold` px.
 * Used by Navbar to trigger the frosted-glass background.
 */
export function useScrolled(threshold = 40) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > threshold);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, [threshold]);

  return scrolled;
}
