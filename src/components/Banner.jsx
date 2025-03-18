import React, { useState } from "react";

function Banner({
  backgroundColor,
  text,
  htmlContent,
  textSize,
  textStyles,
  imageUrl,
  backgroundImageUrl,
  bannerHeight,
  bannerBorder,
}) {
  const sizeMap = {
    small: "text-sm",
    medium: "text-base",
    large: "text-lg",
  };

  const styleMap = {
    bold: "font-bold",
    italic: "italic",
    underline: "underline",
  };

  const combinedTextStyles = textStyles
    .map((style) => styleMap[style])
    .join(" ");

  // State for image position
  const [imageStyle, setImageStyle] = useState({
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)", // Center the image initially
  });

  // Dragging state
  const [isDragging, setIsDragging] = useState(false);

  // Handle mouse down (start dragging)
  const handleMouseDown = (e) => {
    setIsDragging(true);
  };

  // Handle mouse move (update image position with boundary checks)
  const handleMouseMove = (e) => {
    if (isDragging) {
      const bannerRect = e.currentTarget.getBoundingClientRect();
      const imageRect = e.currentTarget.querySelector("img").getBoundingClientRect();

      // Calculate the mouse position relative to the banner
      const offsetX = e.clientX - bannerRect.left;
      const offsetY = e.clientY - bannerRect.top;

      // Ensure the image stays within the banner boundaries
      const minX = 0;
      const minY = 0;
      const maxX = bannerRect.width - imageRect.width;
      const maxY = bannerRect.height - imageRect.height;

      const newLeft = Math.min(Math.max(offsetX - imageRect.width / 2, minX), maxX);
      const newTop = Math.min(Math.max(offsetY - imageRect.height / 2, minY), maxY);

      setImageStyle({
        top: `${newTop}px`,
        left: `${newLeft}px`,
        transform: "none", // Remove transform when dragging
      });
    }
  };

  // Handle mouse up (stop dragging)
  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div
      className={`relative w-full text-center text-white m-1 rounded-md flex items-center justify-center 
        ${bannerBorder ? "border-black border-2" : ""}`}
      style={{
        backgroundColor: backgroundColor || "#940000",
        backgroundImage: backgroundImageUrl ? `url(${backgroundImageUrl})` : "none",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: bannerHeight || "200px",
      }}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      {imageUrl && (
        <img
          src={imageUrl}
          alt="Banner"
          className="absolute w-20 h-20 cursor-pointer"
          style={imageStyle}
          onMouseDown={handleMouseDown}
        />
      )}

      {htmlContent ? (
        <div
          className={`${sizeMap[textSize]} ${combinedTextStyles} text-center`}
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        />
      ) : (
        <h1 className={`${sizeMap[textSize]} ${combinedTextStyles}`}>
          {text || "I love making websites"}
        </h1>
      )}
    </div>
  );
}

export default Banner;