import { Image } from 'antd';
import React, { useRef, useState } from 'react';
import Header from '../common/Header';
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
} from 'react-device-detect';
import { Camera } from 'react-camera-pro';
const SnapPage = () => {
  const [image, setImage] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
    }
  };
  return (
    <>
      <Header />
      <div>
        <BrowserView>
          <h1>This is rendered only in browser</h1>
        </BrowserView>
        <MobileView>
          <input
            type="file"
            accept="image/*"
            capture="environment"
            onChange={handleFileChange}
            className="file-input"
          />
          {image && (
            <div className="image-preview">
              <img src={image} alt="Captured or Selected" />
            </div>
          )}
        </MobileView>
      </div>
    </>
  );
};

export default SnapPage;
