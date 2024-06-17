import React from 'react';
import Header from '../common/Header';
import { useNavigate, useLocation } from 'react-router-dom';

const ScanningImage = () => {
  const state = useLocation();
  return (
    <>
      <Header />
      {console.log('hhe', state)}
      <div className="flex flex-col items-center justify-center w-full p-4">
        {state.state.imageUrl ? (
          <img
            src={state.state.imageUrl}
            alt="Captured"
            className="w-full h-auto max-w-4xl rounded-lg shadow-lg"
          />
        ) : (
          <p className="text-xl text-gray-500">No image captured</p>
        )}
      </div>
    </>
  );
};

export default ScanningImage;
