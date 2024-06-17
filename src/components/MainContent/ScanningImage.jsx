import React from 'react';
import Header from '../common/Header';
import { useNavigate, useLocation } from 'react-router-dom';

const ScanningImage = () => {
  const state = useLocation();
  return (
    <>
      <Header />
      {console.log('hhe', state)}
      <img
        src={state.state.imageUrl}
        alt="Image"
        className="w-full h-full object-cover rounded-lg"
      />
    </>
  );
};

export default ScanningImage;
