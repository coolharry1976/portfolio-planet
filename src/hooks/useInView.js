import { useEffect, useRef, useState } from "react";

export default function useInView(options = { threshold: 0.15, rootMargin: "0px" }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => e.isIntersecting && setInView(true), options);
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, inView };
}
