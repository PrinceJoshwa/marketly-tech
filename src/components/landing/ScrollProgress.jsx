import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "motion/react";

/** Slim top-of-page reading-progress bar (bottle-green fill). */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const width = useSpring(scrollYProgress, { stiffness: 110, damping: 22, restDelta: 0.001 });
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 120);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.div
      className="fixed top-16 left-0 right-0 z-[60] h-[2px] origin-left bg-[#134E35]"
      style={{ scaleX: width, opacity: visible ? 1 : 0 }}
      data-testid="scroll-progress"
    />
  );
}
