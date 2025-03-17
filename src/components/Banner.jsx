import React from 'react';

function Banner({ backgroundColor, text, imageUrl }) {
  return (
    <div
      className="w-full p-6 text-center text-white m-1 rounded-md"
      style={{
        backgroundColor: backgroundColor || '#4A90E2', // Default color
        backgroundImage: imageUrl ? `url(${imageUrl})` : 'none',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <h1 className="text-4xl font-bold">{text || "I enjoy exploring open-source projects!"}</h1>
    </div>
  );
}

export default Banner;
