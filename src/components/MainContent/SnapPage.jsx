import { Image } from 'antd';
import React, { useState } from 'react';
import Camera from 'react-html5-camera-photo';
import Header from '../common/Header';
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
} from 'react-device-detect';

const SnapPage = () => {
  const [dataUri, setDataUri] = useState('');
  const [isCameraOpen, setIsCameraOpen] = useState(false);
  function handleTakePhotoAnimationDone(dataUri) {
    console.log('takePhoto');
    setDataUri(dataUri);
  }
  const openCamera = () => {
    setIsCameraOpen(true);
  };
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
          <button onClick={openCamera} className="open-camera-button">
            Open Camera
          </button>
        )}
        {isCameraOpen && (
          <Camera
            onTakePhoto={(dataUri) => {
              handleTakePhoto(dataUri);
            }}
          />
        )}
      </div>
    </>
  );
};

export default SnapPage;
