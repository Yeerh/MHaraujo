import { useState } from "react";

export default function ImageWithFallback({
  src,
  alt,
  className,
  placeholderText = "Adicione sua foto aqui",
  showIcon = true,
}) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div className={`placeholder ${className || ""}`}>
        {showIcon && (
          <span className="placeholder-icon" role="img" aria-label="Ícone de força">
            💪
          </span>
        )}
        <span>{placeholderText}</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setHasError(true)}
      loading="lazy"
    />
  );
}
