import React, { useState } from "react";
import Banner from "./components/Banner";
import ControlPanel from "./components/ControlPanel";
import './styles/editor.css'

const App = () => {
  const [backgroundColor, setBackgroundcolor] = useState("");
  const [text, setText] = useState("");
  const [htmlContent, setHtmlContent] = useState("I love making websites");
  const [imageUrl, setImageUrl] = useState(null);
  const [backgroundImageUrl, setBackgroundImageUrl] = useState(null);
  const [bannerHeight, setBannerHeight] = useState("");
  const [textSize, setTextSize] = useState("medium");
  const [textStyles, setTextStyles] = useState([]);
  const [imagePosition, setImagePosition] = useState("center");
  const [bannerBorder, setBannerBorder] = useState(false);

  const resetBanner = () => {
    setBackgroundcolor("");
    setText("");
    setHtmlContent("");
    setImageUrl(null);
    setBackgroundImageUrl(null);
    setBannerHeight("");
    setTextSize("medium");
    setTextStyles([]);
    setImagePosition("center");
    setBannerBorder(false); 
  };

  return (
    <div className="min-h-screen">
      <Banner
        backgroundColor={backgroundColor}
        text={text}
        htmlContent={htmlContent}
        textSize={textSize}
        textStyles={textStyles}
        imageUrl={imageUrl}
        backgroundImageUrl={backgroundImageUrl}
        bannerHeight={bannerHeight}
        imagePosition={imagePosition}
        bannerBorder={bannerBorder} 
      />

      <ControlPanel
        setBannerHeight={setBannerHeight}
        setBackgroundcolor={setBackgroundcolor}
        setBackgroundImageUrl={setBackgroundImageUrl}
        setText={setText}
        htmlContent={htmlContent}
        setHtmlContent={setHtmlContent}
        currentHtmlContent={htmlContent} 
        setTextSize={setTextSize}
        setTextStyles={setTextStyles}
        setImageUrl={setImageUrl}
        setImagePosition={setImagePosition}
        setBannerBorder={setBannerBorder} 
        resetBanner={resetBanner}
      />
    </div>
  );
};

export default App;