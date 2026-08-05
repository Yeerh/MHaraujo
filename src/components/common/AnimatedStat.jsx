import { useEffect, useMemo, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

function parseAnimatedValue(value) {
  const match = value.match(/^([+-]?)(\d+)(?:,(\d+))?$/);
  if (!match) return null;

  return {
    prefix: match[1],
    target: Number(`${match[2]}.${match[3] || "0"}`),
    decimals: match[3]?.length || 0,
  };
}

export default function AnimatedStat({ item, active = true }) {
  const ref = useRef(null);
  const parsedValue = useMemo(() => parseAnimatedValue(item.value), [item.value]);
  const reduceMotion = useReducedMotion();
  const isInView = useInView(ref, { once: true, margin: "-30px" });
  const [displayValue, setDisplayValue] = useState(parsedValue ? `${parsedValue.prefix}0` : item.value);

  useEffect(() => {
    if (!active || !parsedValue || !isInView || reduceMotion) {
      if (active && (isInView || reduceMotion)) setDisplayValue(item.value);
      return undefined;
    }

    let animationFrame;
    const startedAt = performance.now();
    const duration = 1450;

    const updateValue = (timestamp) => {
      const progress = Math.min((timestamp - startedAt) / duration, 1);
      const easedProgress = 1 - (1 - progress) ** 3;
      const currentValue = parsedValue.target * easedProgress;
      const formattedValue = currentValue.toLocaleString("pt-BR", {
        minimumFractionDigits: parsedValue.decimals,
        maximumFractionDigits: parsedValue.decimals,
      });

      setDisplayValue(`${parsedValue.prefix}${formattedValue}`);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(updateValue);
      } else {
        setDisplayValue(item.value);
      }
    };

    animationFrame = requestAnimationFrame(updateValue);
    return () => cancelAnimationFrame(animationFrame);
  }, [active, isInView, item.value, parsedValue, reduceMotion]);

  return (
    <div ref={ref} className="animated-stat-content">
      <span className="sr-only">{item.value} {item.label}</span>
      <strong aria-hidden="true">{displayValue}</strong>
      <span aria-hidden="true">{item.label}</span>
    </div>
  );
}
