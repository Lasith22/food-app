import { Image } from 'antd';
import React, { useRef, useState } from 'react';
import Header from '../common/Header';
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
} from 'react-device-detect';
import { FaCamera } from 'react-icons/fa';
import BackgroundImage from '../../assets/foot-cam.jpg';
const SnapPage = () => {
  const [image, setImage] = useState(null);
  const fileInputRef = useRef(null);
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
    }
  };

  const handleImageClick = () => {
    fileInputRef.current.click();
  };
  return (
    <>
      <Header />
      <div>
        <BrowserView>
          <h1>This is rendered only in browser</h1>
        </BrowserView>
        <MobileView>
          <div className="flex flex-col items-center justify-center h-screen">
            <div
              className="relative w-72 h-72 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center cursor-pointer overflow-hidden bg-cover bg-center"
              style={{ backgroundImage: `url(${BackgroundImage})` }}
              onClick={handleImageClick}
            >
              <input
                type="file"
                accept="image/*"
                capture="environment"
                onChange={handleFileChange}
                ref={fileInputRef}
                className="hidden"
              />
              {image ? (
                <img
                  src={image}
                  alt="Captured or Selected"
                  className="w-full h-full object-cover rounded-lg"
                />
              ) : (
                <div className="flex flex-col items-center justify-center text-white">
                  <FaCamera size={50} className="mb-2" />
                  <p>Click a Snap and Track</p>
                </div>
              )}
            </div>
          </div>
        </MobileView>
      </div>
    </>
  );
};

export default SnapPage;
