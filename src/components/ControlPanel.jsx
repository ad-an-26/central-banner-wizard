import React, { useState } from "react";
import RichTextEditor from "./RichTextEditor";

const ControlPanel = ({
  setBannerHeight,
  setBackgroundcolor,
  setBackgroundImageUrl,
  setImageUrl,
  htmlContent,
  setHtmlContent,
  setTextStyles,
  setBannerBorder,
  resetBanner,
  currentHtmlContent
}) => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [textStyles, setTextStylesState] = useState({
    bold: false,
    italic: false,
    underline: false,
  });

  const toggleDropdown = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  const handleBannerHeight = (e) => {
    const value = e.target.value.trim();
    setBannerHeight(value && !isNaN(value) ? `${value}px` : value);
  };

  const handleBackgroundChange = (e) => setBackgroundcolor(e.target.value);

  const handleBackgroundImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setBackgroundImageUrl(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setImageUrl(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleTextChange = (e) => {
    setText(e.target.value);
    setHtmlContent(""); // Clear rich text content when using simple text
  };  const handleTextSizeChange = (e) => setTextSize(e.target.value);

  const handleStyleToggle = (style) => {
    const updatedStyles = {
      ...textStyles,
      [style]: !textStyles[style],
    };
    setTextStylesState(updatedStyles);

    const activeStyles = Object.keys(updatedStyles).filter(
      (key) => updatedStyles[key]
    );
    setTextStyles(activeStyles);
  };

  const handleBorderToggle = (e) => {
    setBannerBorder(e.target.checked);
  };

  return (
    <div className="p-4 border rounded-md shadow-md">
      <div className="flex gap-4 mb-4">
        <button
          className="bg-gray-100 border border-black px-4 py-2 rounded-sm hover:bg-gray-300"
          onClick={() => toggleDropdown("height")}
        >
          Height
        </button>

        <button
          className="bg-gray-100 border border-black px-4 py-2 rounded-sm hover:bg-gray-300"
          onClick={() => toggleDropdown("background")}
        >
          Background
        </button>

        <button
          className="bg-gray-100 border border-black px-4 py-2 rounded-sm hover:bg-gray-300"
          onClick={() => toggleDropdown("text")}
        >
          Text
        </button>

        <button
          className="bg-gray-100 border border-black px-4 py-2 rounded-sm hover:bg-gray-300"
          onClick={() => toggleDropdown("image")}
        >
          Image
        </button>
      </div>

      {openDropdown === "height" && (
        <div className="p-4 border rounded-md mb-2">
          <label htmlFor="bannerHeight" className="font-semibold">
            Banner Height:
          </label>
          <input
            type="text"
            id="bannerHeight"
            onChange={handleBannerHeight}
            placeholder="e.g., 300px"
            className="border rounded px-2 py-1 w-full"
          />
        </div>
      )}

      {openDropdown === "background" && (
        <div className="p-4 border rounded-md mb-2">
          <label className="font-semibold">Background Color:</label>
          <input
            type="color"
            onChange={handleBackgroundChange}
            className="cursor-pointer"
          />

          <label className="font-semibold block mt-2">Background Image:</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleBackgroundImageUpload}
            className="border rounded px-2 py-1 w-full"
          />
        </div>
      )}

{openDropdown === "text" && (
        <div className="p-4 border rounded-md mb-2">
          <div className="mb-4">
            <label className="font-semibold block mb-2">Text Editor:</label>
            <RichTextEditor
              setHtmlContent={setHtmlContent}
              initialHtml={currentHtmlContent} // Pass existing content here
            />
          </div>
        </div>
      )}
      
      {openDropdown === "image" && (
        <div className="p-4 border rounded-md mb-2">
          <label className="font-semibold">Upload Image:</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="border rounded px-2 py-1 w-full mb-2"
          />
          <p className="text-sm text-gray-600">
            Drag the image to position it anywhere in the banner.
          </p>
        </div>
      )}
      
      <div className="mt-4 flex items-center justify-between">
        <div>
          <input
            type="checkbox"
            id="bannerBorder"
            onChange={handleBorderToggle}
            className="mr-2"
          />
          <label htmlFor="bannerBorder">Show Border</label>
        </div>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          onClick={resetBanner}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default ControlPanel;
