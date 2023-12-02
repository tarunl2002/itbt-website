import React, { useState } from 'react';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import { Link } from 'react-router-dom';

const Commitee = () => {
  const [popupVisible, setPopupVisible] = useState(false);

  
  
    const data = [
      {
        image_url: "../Images/venue3.jpg",
        link: "",
        overlayText: "Proceedings 2017"
      },
      {
        image_url: "../Images/venue3.jpg",
        link: "",
        overlayText: "Proceedings 2018"
      },
      {
        image_url: "../Images/venue3.jpg",
        link: "",
        overlayText: "Proceedings 2019"
      },
      {
        image_url: "../Images/venue3.jpg",
        link: "",
        overlayText: "Proceedings 2020"
      },
      {
        image_url: "../Images/venue3.jpg",
        link: "",
        overlayText: "Proceedings 2021"
      },
      {
        image_url: "../Images/venue3.jpg",
        link: "",
        overlayText: "Proceedings 2022"
      },
      {
        image_url: "../Images/venue3.jpg",
        link: "",
        overlayText: "Proceedings 2023"
      }
    ];

  const openPopup = () => {
    setPopupVisible(true);
    document.body.style.overflow = 'hidden';
  };

  const closePopup = () => {
    setPopupVisible(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <>
      <Navbar />
      <div className="text-center">
            <h2 className="text-4xl pt-16 font-bold text-indigo-800">
            Proceeding
            </h2>
            <div className="border-b-4 border-indigo-800 w-1/2 sm:w-1/4 mx-auto my-3"></div>
          </div>
          <div className="flex flex-wrap flex-col sm:flex-row  justify-around p-5 w-full relative">
  {data.map((item, index) => (
    <div key={index} className={`relative text-white rounded-md hover:cursor-pointer shadow-md mx-2 my-4 ${index < 7 ? 'sm:w-1/4' : 'w-1/4'}`} onClick={openPopup}>
      <img className='rounded-lg' src={item.image_url} alt="" />
      <div className="overlay absolute top-0 left-0 w-full h-full bg-black opacity-30"></div>
      <div className="text-overlay absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <p className=' text-white text-2xl font-bold'>{item.overlayText}</p>
      </div>
    </div>
  ))}
</div>


      {popupVisible && (
        <div className="fixed top-[12%] left-[10%] transform -translate-x-1/2 -translate-y-1/2   z-50">
          <div className="popup-overlay rounded-xl h-[80vh] shadow-2xl bg-[#e3e3e4] w-[80vw] absolute">
            <div className="popup-content text-center">
              <p className=' text-black text-2xl mt-20 font-medium'>Your link goes here</p>
              <button className='right-2 top-0 absolute text-5xl' onClick={closePopup}>×</button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
};

export default Commitee;
