import React from 'react';
import MainLogo from '../../assets/MainLogo.jpeg';
const Header = () => {
  return (
    <div>
      <img src={MainLogo} alt="" className="h-16 w-auto object-contain p-2" />
      <div className="border-t border-gray-300 shadow-lg shadow-black mb-5"></div>
    </div>
  );
};

export default Header;
