import { Image, Tag, Card } from 'antd';
import React, { useRef, useState } from 'react';
import { GrGallery } from 'react-icons/gr';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import Header from '../common/Header';
import { BrowserView, MobileView } from 'react-device-detect';
import { FaCamera } from 'react-icons/fa';
import BackgroundImage from '../../assets/foot-cam.jpg';

const SnapPage = () => {
  const [image, setImage] = useState(null);

  const navigate = useNavigate();

  const fileInputRef = useRef(null);
  const galleryInputRef = useRef(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
      navigate('/scanning', { state: { imageUrl } });
    }
  };

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const handleCardClick = () => {
    galleryInputRef.current.click();
  };

  return (
    <>
      <Header />
      <div>
        <BrowserView>
          <div className="flex flex-col items-center justify-center h-screen">
            <div
              className="relative w-72 h-72 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center cursor-pointer overflow-hidden bg-cover bg-center"
              style={{ backgroundImage: `url(${BackgroundImage})` }}
              onClick={handleImageClick}
            >
              <input
                type="file"
                accept="image/*"
                capture="environment"
                onChange={handleFileChange}
                ref={fileInputRef}
                className="hidden"
              />
              {image ? (
                <img
                  src={image}
                  alt="Captured or Selected"
                  className="w-full h-full object-cover rounded-lg"
                />
              ) : (
                <div className="flex flex-col items-center justify-center text-white">
                  <FaCamera size={50} className="mb-2" />
                  <p>Click a Snap and Track</p>
                </div>
              )}
            </div>
          </div>
        </BrowserView>
        <MobileView>
          <div className="flex flex-col items-center justify-start ">
            <div className="flex flex-col items-start justify-start w-full max-w-md p-4">
              <h1 className="mb-2 text-left text-[#181F26] text-[14px] font-sans font-bold">
                Track in Less than 5 Seconds
              </h1>

              <div
                className="relative w-full h-64 sm:h-72 md:h-96 lg:h-1/2 border-2 border-gray-300 rounded-lg flex items-center justify-center cursor-pointer overflow-hidden bg-cover bg-center"
                style={{ backgroundImage: `url(${BackgroundImage})` }}
                onClick={handleImageClick}
              >
                <input
                  type="file"
                  accept="image/*"
                  capture="environment"
                  onChange={handleFileChange}
                  ref={fileInputRef}
                  className="hidden"
                />
                {image ? (
                  <img
                    src={image}
                    alt="Captured or Selected"
                    className="w-full h-full object-cover rounded-lg"
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center text-white">
                    <FaCamera size={50} className="mb-2" />
                    <p>Click a Snap</p>
                  </div>
                )}
              </div>

              <div className="mt-10 w-full">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  ref={galleryInputRef}
                  className="hidden"
                />
                <Card className="w-full bg-[#F7F9FA]" onClick={handleCardClick}>
                  <div className="flex justify-between items-center">
                    <div className="flex justify-between items-center gap-4">
                      <GrGallery size={20} />
                      <h1 className="text-[#181F26] font-sans text-[12px] font-bold leading-tight tracking-custom">
                        Or Add from Your Gallery
                      </h1>
                    </div>
                    <MdOutlineKeyboardArrowRight size={30} />
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </MobileView>
      </div>
    </>
  );
};

export default SnapPage;
