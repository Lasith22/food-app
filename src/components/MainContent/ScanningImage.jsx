import React, { useEffect, useState } from 'react';
import Header from '../common/Header';
import { useLocation } from 'react-router-dom';

import { MdOutlineQrCodeScanner } from 'react-icons/md';

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
      <div className="flex flex-col items-center justify-center w-full p-4 mt-10">
        <MdOutlineQrCodeScanner size={40} />
        <h1 className="mt-2 text-[#8B98A6] text-[14px] font-sans font-semibold">
          Doing Magic.
        </h1>
        <h1 className=" text-[#8B98A6] text-[14px] font-sans font-semibold">
          Identifying food to track from your photo{' '}
        </h1>
      </div>
    </>
  );
};

export default ScanningImage;
