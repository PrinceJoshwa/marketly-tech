import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";

/**
 * Animated count-up number — triggers once when scrolled into view.
 * Supports: plain numbers, +/x/% suffix, and currency prefix (₹).
 * Example:
 *   <CountUp value={50} suffix="+" />     → "50+"
 *   <CountUp value={4.8} suffix="×" decimals={1} />
 *   <CountUp value={42} prefix="₹" suffix="Cr+" />
 *   <CountUp value={94} suffix="%" />
 */
export default function CountUp({
  value,
  prefix = "",
  suffix = "",
  decimals = 0,
  duration = 1600,
  className = "",
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const from = 0;
    const to = Number(value) || 0;
    let raf;
    const step = (t) => {
      const p = Math.min(1, (t - start) / duration);
      // easeOutCubic
      const eased = 1 - Math.pow(1 - p, 3);
      setN(from + (to - from) * eased);
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [inView, value, duration]);

  return (
    <motion.span ref={ref} className={className} aria-label={`${prefix}${value}${suffix}`}>
      {prefix}
      {decimals > 0 ? n.toFixed(decimals) : Math.round(n)}
      {suffix}
    </motion.span>
  );
}
