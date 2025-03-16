// src/App.jsx
import { useState } from 'react';
import Banner from './components/Banner';

function App() {
  const [bannerText, setBannerText] = useState('I enjoy building cool web apps!');
  const [bannerColor, setBannerColor] = useState('#4CAF50');
  const [bannerImage, setBannerImage] = useState('');

  return (
    <div>
      <Banner text={bannerText} bgColor={bannerColor} image={bannerImage} />
    </div>
  );
}

export default App;
