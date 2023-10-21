import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
    <div className="flex justify-around bg-[#f6a130] py-14">
        <div>
          <h1 className="text-[20px] font-extrabold">Profolio.in</h1>
          <h1 className="py-2">Showcase Your Code <br />
            Journey</h1>
          <h1>Stay in touch with us:</h1>
          <div className="flex">
            <a href='https://www.linkedin.com/posts/profilio-in_developerprofiles-launchingsoon-activity-7119044690343034880-e-c2?utm_source=share&utm_medium=member_desktop'><LinkedInIcon /></a>
    
          </div>
        </div>
        <div className="flex flex-wrap ">
          <div className="px-10">
            
           
            <h1>Home</h1>
            <h1>Protfolio</h1>
            <h1>About</h1>
            <h1>Quick Links</h1>
            
          </div>
         
        </div>
      </div>
  )
}

export default Footer