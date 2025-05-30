import React, { useEffect, useState } from "react";

const ImageComponent = ({ src, width, height, className }) => {
  const [currentSrc, setCurrentSrc] = useState(
    `https://placehold.co/${width}x${height}?text=loading...`,
  );

  useEffect(() => {
    const img = new Image();
    if (!src) {
      setCurrentSrc(`https://placehold.co/${width}x${height}?text=No Image`);
      return;
    }
    img.src = src;
    img.onload = () => {
      setCurrentSrc(src);
    };

    return () => {
      img.onload = null; // Clean up the onload event handler
    };
  }, [src, width, height]);
  return (
    <>
      <img
        src={currentSrc}
        alt=""
        className={
          currentSrc === src || !src ? className : `${className} blur-md`
        }
        width={width}
        height={height}
      />
    </>
  );
};

export default ImageComponent;
