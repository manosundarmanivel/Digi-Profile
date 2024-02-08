import React from 'react'
import {useNavigate } from "react-router-dom";

const PlatformCard = ({title , img , page}) => {
  const navigate = useNavigate();
  const handleNavigation = () => {
   
      navigate(page);
    
  };

  return (
    <div className="mx-5  mt-10  p-1 shadow-lg rounded-lg lg:w-[410px]  ">
            <img  src={img} className="rounded-lg  " />
            <h1 className="font-bold px-2 py-1 text-[24px]">{title} </h1>
            <button
                  type="button"
                  data-modal-target="authentication-modal"
                  onClick={() => {
                    handleNavigation();
                  }}
                  className="block mx-2   focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-yellow-400 dark:hover:bg-yellow-500 "
                >
                  View Profile
                </button>
           

  
            
          </div>
  )
}

export default PlatformCard