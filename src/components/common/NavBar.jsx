import React, { useState } from 'react';
import MainLogo from '../../assets/MainLogo.jpeg';
import { Button, Drawer } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import { TiThMenuOutline } from 'react-icons/ti';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
  const [isDrawerVisible, setIsDrawerVisible] = useState(false);

  const navigate = useNavigate();

  const showDrawer = () => {
    setIsDrawerVisible(true);
  };

  const closeDrawer = () => {
    setIsDrawerVisible(false);
  };

  return (
    <>
      <div className="flex justify-between items-center mx-auto">
        {/* log and other things */}
        <div className="flex justify-between items-center">
          <img
            src={MainLogo}
            alt="Food Logo"
            className="h-16 w-auto object-contain p-2"
          />

          <div className=" hidden md:flex justify-between items-center gap-5 text-[#181F26] text-[20px] font-sans font-semibold">
            <h1>Menu</h1>
            <h1>Rwards</h1>
            <h1>Gift Cards</h1>
          </div>
        </div>

        {/* sign up buttons */}
        <div className="hidden md:flex mr-10 gap-3">
          <button
            onClick={() => {
              navigate('/account/signin');
            }}
            type="button"
            class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            Sign in
          </button>
          <button
            type="button"
            onClick={() => {
              navigate('/account/create');
            }}
            class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
          >
            Join Now
          </button>
        </div>
        <div className="flex md:hidden mr-5">
          <Button
            type="text"
            icon={
              isDrawerVisible ? (
                <CloseOutlined />
              ) : (
                <TiThMenuOutline size={24} />
              )
            }
            onClick={isDrawerVisible ? closeDrawer : showDrawer}
          />
        </div>
        <Drawer
          title="Food-App"
          placement="right"
          onClose={closeDrawer}
          open={isDrawerVisible}
          width={300}
        >
          <div className="flex flex-col gap-5">
            <div className="mt-6 flex flex-col gap-10 text-[#181F26] text-[20px] font-sans font-semibold">
              <h1 className="">Menu</h1>
              <h1>Rewards</h1>
              <h1>Gift Cards</h1>
            </div>

            <div className="border-t border-gray-300 shadow-lg shadow-black mx-5 my-5"></div>

            <button
              onClick={() => {
                navigate('/account/signin');
              }}
              class="text-gray-900 bg-gray-100 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center  items-center dark:focus:ring-gray-500 me-2 mb-2"
            >
              Sign in
            </button>
            <button
              onClick={() => {
                navigate('/account/create');
              }}
              class="text-white bg-[#050708] hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center  items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30 me-2 mb-2"
            >
              Join Now
            </button>
          </div>
        </Drawer>
      </div>

      <div className="border-t border-gray-300 shadow-lg shadow-black"></div>
    </>
  );
};

export default NavBar;
