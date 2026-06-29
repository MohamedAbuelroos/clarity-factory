import { useEffect, useState } from "react";

interface CountUpOptions {
  start: number;
  end: number;
  duration?: number;
  delay?: number;
  startCounting: boolean;
}

export function useCountUp({
  start,
  end,
  duration = 1200,
  delay = 0,
  startCounting,
}: CountUpOptions) {
  const [value, setValue] = useState(start);

  useEffect(() => {
    if (!startCounting) return;

    let startTime: number | null = null;
    let rafId: number;

    const timeout = setTimeout(() => {
      const animate = (time: number) => {
        if (!startTime) startTime = time;
        const progress = Math.min((time - startTime) / duration, 1);

        setValue(Math.floor(progress * (end - start) + start));

        if (progress < 1) {
          rafId = requestAnimationFrame(animate);
        }
      };

      rafId = requestAnimationFrame(animate);
    }, delay);

    return () => {
      clearTimeout(timeout);
      cancelAnimationFrame(rafId);
    };
  }, [start, end, duration, delay, startCounting]);

  return value;
}
