import React, { useRef, useState } from "react";

interface ImageMagnifierProps {
  src: string;
  alt?: string;
  width?: number | string;
  height?: number | string;
  zoom?: number; // magnification factor
  lensSize?: number; // diameter of the lens in px
  className?: string;
}

export const ImageMagnifier: React.FC<ImageMagnifierProps> = ({
  src,
  alt = "",
  width = "100%",
  height = "auto",
  zoom = 2,
  lensSize = 180,
  className = "",
}) => {
  const imgRef = useRef<HTMLImageElement>(null);
  const [showLens, setShowLens] = useState(false);
  const [lensPos, setLensPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const img = imgRef.current;
    if (!img) return;
    const rect = img.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setLensPos({ x, y });
  };

  return (
    <div
      style={{ position: "relative", width, height, display: "inline-block" }}
      onMouseEnter={() => setShowLens(true)}
      onMouseLeave={() => setShowLens(false)}
      onMouseMove={handleMouseMove}
      className={className}
    >
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        style={{ width: "100%", height: height, display: "block", borderRadius: "1rem" }}
        draggable={false}
      />
      {showLens && (
        <div
          style={{
            position: "absolute",
            left: lensPos.x - lensSize / 2,
            top: lensPos.y - lensSize / 2,
            width: lensSize,
            height: lensSize,
            borderRadius: "50%",
            boxShadow: "0 0 16px 2px #ff1493, 0 0 32px 8px #8a2be2",
            border: "2px solid #fff",
            background: `url(${src}) no-repeat`,
            backgroundSize: `${zoom * 100}% ${zoom * 100}%`,
            backgroundPosition: `-${lensPos.x * (zoom - 1)}px -${lensPos.y * (zoom - 1)}px`,
            pointerEvents: "none",
            zIndex: 10,
            transition: "box-shadow 0.2s",
          }}
        />
      )}
    </div>
  );
}; 