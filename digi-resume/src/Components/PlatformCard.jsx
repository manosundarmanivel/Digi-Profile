import React from 'react'

const PlatformCard = ({title , img }) => {

  return (
    <div className="mx-5   p-1 shadow-lg rounded-lg w-[450px] ">
            <img  src={img} className="rounded-lg  " />
            <h1 className="font-bold px-2 py-1 text-[24px]">{title} </h1>

           

  
            
          </div>
  )
}

export default PlatformCard