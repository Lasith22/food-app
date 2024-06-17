import React from 'react';
import { useNavigate } from 'react-router-dom';
const MainContent = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex justify-center items-center mt-10">
        <button
          onClick={() => {
            navigate('/snap');
          }}
          type="button"
          class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        >
          Try Food-App Snap
        </button>
      </div>
    </>
  );
};

export default MainContent;
