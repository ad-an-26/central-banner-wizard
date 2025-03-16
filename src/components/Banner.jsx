// src/components/Banner.jsx
const Banner = ({ text, bgColor, image }) => {
  return (
    <div
      className={`w-full h-96 flex items-center justify-center text-white text-3xl text-center rounded-lg shadow-lg border-2 border-gray-800`}
      style={{
        backgroundColor: bgColor || '#4CAF50',
        backgroundImage: image ? `url(${image})` : 'none',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {text || 'I enjoy building cool web apps!'}
    </div>
  );
};

export default Banner;
