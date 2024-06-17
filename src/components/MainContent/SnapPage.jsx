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
  const camera = useRef(null);
  const [image, setImage] = useState(null);
  const [isCameraOpen, setIsCameraOpen] = useState(false);

  return (
    <>
      <Header />
      <div>
        {/* <BrowserView>
          <h1>This is rendered only in browser</h1>
        </BrowserView>
        <MobileView>
          <h1>This is rendered only on mobile</h1>
        </MobileView> */}
        {!isCameraOpen && (
          <button
            onClick={() => setIsCameraOpen(true)}
            className="open-camera-button"
          >
            Open Camera
          </button>
        )}
        {isCameraOpen && (
          <div>
            <Camera ref={camera} />
            <button onClick={() => setImage(camera.current.takePhoto())}>
              Take photo
            </button>
            {image && <img src={image} alt="Taken photo" />}
            <button onClick={() => setIsCameraOpen(false)}>Close Camera</button>
          </div>
        )}
      </div>
    </>
  );
};

export default SnapPage;
