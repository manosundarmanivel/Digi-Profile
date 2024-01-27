import React, { useState } from "react";
import HomePic from "../Assets/img/home.svg";
import Benfit from "../Assets/img/Swipe Profiles-cuate.svg";
import { SignInWithGoogle } from "../Database/Firebase";
import { useNavigate } from "react-router-dom";
import Footer from "../Components/Footer";
import git from "../Assets/img/git.png";
import leet from "../Assets/img/leetcode.png";
import LeetCode from './LeetCode';

const DialogBox = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 z-50 p-10">
      <div className="flex justify-center items-center h-full">
        <div className="bg-white p-8 rounded-lg">
          <h1 className="text-2xl font-bold mb-4">Under Development</h1>
          <p className="text-gray-700 mb-4">
            We are still working on this feature. Stay tuned!
          </p>
          <button
            onClick={onClose}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

const Home = () => {
  const [showDialog, setShowDialog] = useState(false);

  const handleOpenDialog = () => {
    setShowDialog(true);
  };

  const handleCloseDialog = () => {
    setShowDialog(false);
  };

  const navigate = useNavigate();

  const handleSignInWithGoogle = () => {
    SignInWithGoogle()
      .then(() => {
        navigate("/dashboard");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="w-full">
      <div className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
        <div className="flex justify-between items-center px-3 lg:px-20 py-3">
          <div className="flex items-baseline">
            <h1 className="text-[30px] font-extrabold">
              Profilio<span className="text-[#f6a130]">.in</span>
            </h1>
            <div className="mx-1 px-1 bg-green-400 rounded-lg">
              <h1 className="text-[10px] p-[2px] text-white">beta</h1>
            </div>
          </div>

          <div className="flex justify-between items-center">
            <div className=" hidden lg:block flex px-5">
              <button>
                <h1 className="px-10 py-3 font-extrabold hover:text-yellow-500 ">
                  Home
                </h1>
              </button>
              <button>
                <h1 className="px-10 py-3 font-extrabold hover:text-yellow-500 ">
                  About Us
                </h1>
              </button>
              <button>
                <h1 className="px-10 py-3 font-extrabold hover:text-yellow-500 ">
                  Blog
                </h1>
              </button>
              <button>
                <h1 className="px-10 py-3 font-extrabold hover:text-yellow-500 ">
                  Contact Us
                </h1>
              </button>
            </div>
            <div className="">
              <button
                onClick={() => {
                  handleOpenDialog();
                  // handleSignInWithGoogle();
                }}
                className="border border-[#323234] p-3 hover:text-yellow-500 hover:border-yellow-500"
              >
                <h1>Try for free</h1>
              </button>
              {showDialog && <DialogBox onClose={handleCloseDialog} />}
            </div>
          </div>
        </div>
      </div>

      <div className=" justify-center items-center   flex bg-gradient-to-b from-[#fcd18c] via-[#fdebcf] to-[#ffffff] flex-wrap lg:px-20 py-32 lg:py-32">
        <div className="text-center justify-center items-center lg:p-1 lg:px-32 p-5">
          <h1 className="font-bold text-[34px] lg:text-[42px] text-[#323234]">
            Summarize your coding journey into a unified showcase, all in one
            central place!
          </h1>
          <h1 className="font-bold text-[20px] mt-5 text-[#323234]">
            Curate, Collaborate, Code – Your Comprehensive Showcase of Mastery!
          </h1>
          <div className="my-5">
            <button
              onClick={() => {
                // handleOpenDialog()
                handleSignInWithGoogle();
              }}
              className="p-3 py-4 mt-12 px-12 mt-3 mx-2 hover:bg-black bg-[#323234] text-white rounded-full text-[18px]"
            >
              Let's Get Started
            </button>
          </div>
          <div className="flex justify-center p-5 ">
            <img src={HomePic} className="w-[300px] lg:w-[450px] " />
          </div>
        </div>
      </div>

      <div className="px-5 pb-16 justify-center text-center  ">
        <h1 className="text-[16px] text-yellow-500">/ INTRODUCTION /</h1>
        <h1 className="text-[44px] p-5">Welcome to Profilio.in</h1>
        <div className="flex justify-center text-center">
          <img src="" />
          <h1 className="lg:px-60 px-1 leading-7">
            Whether you're a coding enthusiast or seasoned developer, managing
            profiles on platforms like GitHub and LeetCode can be challenging.
            Profilio.in is your all-in-one solution, offering a comprehensive
            platform to showcase your skills and achievements. Join us as we
            simplify your online journey and elevate your visibility in the tech
            community. Welcome to Profilio.in – where your developer profile
            takes center stage!
          </h1>
        </div>
      </div>
      <div className="flex  text-center  lg:px-32 py-10 bg-gradient-to-b from-[#ffffff] via-[#fdebcf] to-[#ffffff]">
        <div className=" hidden lg:block justify-center p-5  ">
          <img src={Benfit} className="w-[300px] lg:w-[700px] " />
        </div>
        <div className=" lg:w-1/2 prose">
          <h1 className="text-[16px] text-yellow-500">
            / BENEFITS OF PROFILIO /
          </h1>
          <h1 className="text-[44px] p-5">Streamline Your Digital Identity</h1>
          <p className="leading-7 px-5 py-5">
            Elevate your online presence with Profilio – a unified platform
            simplifying the showcase of your coding expertise. Our innovative
            solution offers a single profile link to seamlessly display your
            accomplishments, projects, and skills from various coding platforms
            like GitHub, LeetCode, and more. Save time, make an impact, and
            present your best self digitally with Profilio – where your coding
            journey finds its unified home.
          </p>
        </div>
      </div>
      <div className="px-5 pb-16 justify-center text-center bg-gradient-to-b from-[#ffffff] via-[#ffffff] to-[#fdebcf] ">
        <h1 className="text-[16px] text-yellow-500">/ WHY WE /</h1>
        <h1 className="text-[44px] p-5">Why Choose Profilio</h1>
        <div className="flex flex-wrap justify-center ">
          <div className="text-center p-3">
            <div className="bg-red-200 rounded-full p-3 w-[54px] mx-auto">
              <h1 className="text-[20px]">01</h1>
            </div>
            <h1 className="text-[22px] p-3 font-extrabold">
              Centralized Showcase
            </h1>
            <p className="prose w-[400px] text-gray-500">
              Simplify your online identity with Profilio.in. Showcase your
              coding journey and achievements from various platforms in one
              central hub.
            </p>
          </div>
          <div className="text-center p-3">
            <div className="bg-green-200 rounded-full p-3 w-[54px] mx-auto">
              <h1 className="text-[20px]">02</h1>
            </div>
            <h1 className="text-[22px] p-3 font-extrabold">
              Time-Efficient Profile Management
            </h1>
            <p className="prose w-[400px] text-gray-500">
              Streamline profile management. Profilio.in saves you time by
              consolidating multiple profiles into one, ensuring an always
              up-to-date digital presence.
            </p>
          </div>
          <div className="text-center p-3">
            <div className="bg-blue-200 rounded-full p-3 w-[54px] mx-auto">
              <h1 className="text-[20px]">03</h1>
            </div>
            <h1 className="text-[22px] p-3 font-extrabold">
              Holistic Skill Highlight
            </h1>
            <p className="w-[400px] prose text-gray-500">
              Highlight skills comprehensively. Profilio.in allows you to
              showcase projects and accomplishments, not just from GitHub and
              LeetCode.
            </p>
          </div>
          <div className="text-center p-3">
            <div className="bg-yellow-200 rounded-full p-3 w-[54px] mx-auto">
              <h1 className="text-[20px]">04</h1>
            </div>
            <h1 className="text-[22px] p-3 font-extrabold">
              Seamless Online Visibility
            </h1>
            <p className="w-[400px] prose text-gray-500">
              Boost online presence effortlessly. Profilio.in provides a single
              profile link, making it convenient for others to discover your
              expertise across coding platforms.
            </p>
          </div>
          <div className="text-center p-3">
            <div className="bg-orange-200 rounded-full p-3 w-[54px] mx-auto">
              <h1 className="text-[20px]">05</h1>
            </div>
            <h1 className="text-[22px] p-3 font-extrabold">
              Accelerate Your Career
            </h1>
            <p className="prose w-[400px] text-gray-500">
              Share your coding journey effectively. Profilio.in empowers you to
              present a cohesive digital story, making a strong impact in the
              tech community. Choose Profilio.in for a unified home for your
              coding achievements.
            </p>
          </div>
        </div>
      </div>
      <div className="px-5 py-10 pb-16 justify-center text-center bg-gradient-to-b from-[#fdebcf] via-[#ffffff] to-[#f7ecdb]  ">
        <h1 className="text-[16px] text-yellow-500">/ WE HAVE /</h1>
        <h1 className="text-[44px] p-5">Integrated Your Profile </h1>
        <div className="flex  flex-wrap justify-evenly  text-center">
          <div className="p-5 ">
            <img src={git} className="w-[250px] lg:w-[250px] pt-6 " />
          </div>
         
          <div className="flex items-center p-5 mx-10 ">
          <img src={leet} className="w-[90px] lg:w-[90px] " />
          <h1 className="text-[34px] font-extrabold">LeetCode</h1>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
