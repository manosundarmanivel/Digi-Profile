import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <div className="flex flex-wrap justify-around lg:justify-center px-5 bg-[#f6a130] py-14">
      <div className="p-5">
        <h1 className="text-[20px] font-extrabold">Contact Us</h1>
        

        <h1 className="pt-3 ">Erode ,Tamil Nadu ,India</h1>
        <h1 className="pt-3 ">profiliotechnologies@gmail.com</h1>
        <h1 className="pt-3 ">+91 6382072039</h1>
       
      </div>
      <div className="p-5 ">
        <h1 className="text-[20px] font-extrabold">Company</h1>
        <h1 className="py-1">Home</h1>
        <h1 className="py-1">About Us</h1>
        <h1 className="py-1">Blog</h1>
        <h1 className="py-1">Contact Us</h1>
      </div>
     
      <div className="p-5">
        <h1 className="text-[20px] font-extrabold">Follow Us</h1>
        
        <div className="flex pt-5">
          <a href="https://www.linkedin.com/posts/profilio-in_developerprofiles-launchingsoon-activity-7119044690343034880-e-c2?utm_source=share&utm_medium=member_desktop">
            <LinkedInIcon />
          </a>
          <h1 className="px-1">LinkedIn</h1>
        </div>
      </div>
      <div className="flex flex-wrap "></div>
    </div>
  );
};

export default Footer;
