import React from 'react';
import FoodLogo from '../../assets/food0logo.png';
const Header = () => {
  return (
    <div>
      <img src={FoodLogo} alt="" className="w-24 h-24" />
      <div className="border-t border-gray-300 shadow-lg shadow-black mx-5 my-5"></div>
    </div>
  );
};

export default Header;
