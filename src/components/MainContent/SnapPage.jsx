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
        <input type="file" accept="image/*" capture="environment"></input>
      </div>
    </>
  );
};

export default SnapPage;
