import { useEffect, useRef, useState } from "react";

const interactiveSelector = "a, button, input, select, textarea, label, [role='button'], [role='slider']";

export default function LogoCursor() {
  const cursorRef = useRef(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const pointerQuery = window.matchMedia("(hover: hover) and (pointer: fine)");
    const updatePreference = () => setEnabled(pointerQuery.matches);

    updatePreference();
    pointerQuery.addEventListener("change", updatePreference);
    return () => pointerQuery.removeEventListener("change", updatePreference);
  }, []);

  useEffect(() => {
    if (!enabled || !cursorRef.current) return undefined;

    const cursor = cursorRef.current;
    let animationFrame;
    let pointerX = 0;
    let pointerY = 0;

    const renderPosition = () => {
      cursor.style.transform = `translate3d(${pointerX}px, ${pointerY}px, 0)`;
      animationFrame = undefined;
    };

    const onPointerMove = (event) => {
      if (event.pointerType && event.pointerType !== "mouse") return;

      pointerX = event.clientX;
      pointerY = event.clientY;

      if (!animationFrame) animationFrame = requestAnimationFrame(renderPosition);

      const target = event.target instanceof Element ? event.target : null;
      cursor.classList.toggle("is-interactive", Boolean(target?.closest(interactiveSelector)));
      cursor.classList.add("is-visible");
      document.body.classList.add("custom-cursor-active");
    };

    const onPointerDown = () => cursor.classList.add("is-pressed");
    const onPointerUp = () => cursor.classList.remove("is-pressed");
    const onPointerOut = (event) => {
      if (event.relatedTarget) return;
      cursor.classList.remove("is-visible", "is-interactive", "is-pressed");
      document.body.classList.remove("custom-cursor-active");
    };
    const onWindowBlur = () => {
      cursor.classList.remove("is-visible", "is-interactive", "is-pressed");
      document.body.classList.remove("custom-cursor-active");
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("pointerdown", onPointerDown, { passive: true });
    window.addEventListener("pointerup", onPointerUp, { passive: true });
    window.addEventListener("pointerout", onPointerOut, { passive: true });
    window.addEventListener("blur", onWindowBlur);

    return () => {
      if (animationFrame) cancelAnimationFrame(animationFrame);
      document.body.classList.remove("custom-cursor-active");
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointerup", onPointerUp);
      window.removeEventListener("pointerout", onPointerOut);
      window.removeEventListener("blur", onWindowBlur);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div ref={cursorRef} className="logo-cursor" aria-hidden="true">
      <span className="logo-cursor-halo" />
      <img src="/images/hero-logo-matheus.png" alt="" />
      <span className="logo-cursor-point" />
    </div>
  );
}
