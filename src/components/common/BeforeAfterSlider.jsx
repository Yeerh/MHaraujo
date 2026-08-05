import { useState } from "react";
import ImageWithFallback from "./ImageWithFallback";

export default function BeforeAfterSlider({ item }) {
  const [position, setPosition] = useState(50);
  const descriptionId = `comparison-${item.nome.toLowerCase()}-description`;

  return (
    <div
      className="before-after-slider"
      style={{ "--slider-position": `${position}%` }}
      role="group"
      aria-describedby={descriptionId}
    >
      <span id={descriptionId} className="sr-only">
        Comparação entre as fotos de antes e depois de {item.nome}. Use o controle deslizante para revelar as duas imagens.
      </span>

      <ImageWithFallback
        src={item.depois}
        alt=""
        className="result-image before-after-image"
        placeholderText="Depois"
        showIcon={false}
      />

      <div className="before-after-before" aria-hidden="true">
        <ImageWithFallback
          src={item.antes}
          alt=""
          className="result-image before-after-image"
          placeholderText="Antes"
          showIcon={false}
        />
      </div>

      <span className="result-image-label before-label" style={{ opacity: position > 12 ? 1 : 0 }} aria-hidden="true">Antes</span>
      <span className="result-image-label after-label" style={{ opacity: position < 88 ? 1 : 0 }} aria-hidden="true">Depois</span>

      <div className="before-after-divider" aria-hidden="true">
        <span className="before-after-handle">‹ ›</span>
      </div>

      <input
        className="before-after-range"
        type="range"
        min="0"
        max="100"
        value={position}
        aria-label={`Comparar fotos de antes e depois de ${item.nome}`}
        aria-describedby={descriptionId}
        aria-valuetext={`${position}% da foto de antes visível`}
        onChange={(event) => setPosition(Number(event.target.value))}
      />

      <span className="before-after-hint" aria-hidden="true">Arraste para comparar</span>
    </div>
  );
}
