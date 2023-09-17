import React from "react";
import HomePic from "../src/img/Profile data-cuate.svg";
import { SignInWithGoogle } from './Firebase'
import { useNavigate} from 'react-router-dom'

  
  


const Home = () => {

  const navigate = useNavigate();

  const handleSignInWithGoogle = () =>{
      SignInWithGoogle().then(()=>{
          navigate("/dashboard");
      }).catch((error)=>{
          console.log(error);
      })
  }
  return (
    <div className="">
      <div className="flex justify-between items-center px-14 py-5 ">
        <h1 className="text-[30px] font-extrabold">Profilio.in</h1>
        <div className="border  border-[#323234] p-3">
          <h1>Try for free</h1>
        </div>
      </div>
      <div className="flex justify-between items-center  bg-[#fdebcf] px-14">
        <div>
          <h1 className="font-bold text-start text-[60px] text-[#323234] ">
            Showcase Your Code <br />
            Journey, All in one place !{" "}
          </h1>
          <h1 className="font-bold text-[30px] mt-5 text-[#323234]">
            We Unite your Coding Presence.
          </h1>
          <button onClick={()=>{
            handleSignInWithGoogle();
          }} className="p-3 mt-12 px-12 mt-3 rounded-sm bg-[#323234]  text-white text-[20px]">
            Sign up now
          </button>
        </div>
        <img src={HomePic} className="w-[500px]" />
      </div>
      <div className="p-5 justify-center text-center ">
        <h1 className="text-[20px]">
          "We love using Profilio.in . Our efficiency grew <br/>by 45% and that's amazing!"
        </h1>
        <div className="flex justify-center text-center">
          <img src="" />
          <h1>Mano Sundar , Company CEO</h1>
        </div>
      </div>
      <div className="flex justify-around bg-[#f6a130] py-14">
        <div>
          <h1 className="text-[20px] font-extrabold">Profolio.in</h1>
          <h1 className="py-2">Showcase Your Code <br />
            Journey</h1>
          <h1>Stay in touch with us:</h1>
          <div className="flex">

          </div>
        </div>
        <div className="flex ">
          <div className="px-10">
            <h1 className="">Company</h1>
            <h1>About</h1>
            <h1>Careers</h1>
            <h1>Training</h1>
          </div>
          <div className="px-10">
            <h1>Services</h1>
            <h1>Designing</h1>
            <h1>Development</h1>
            <h1>Security</h1>
          </div>
          <div className="px-10 f">
            <h1>Quick Links</h1>
            <h1>Home</h1>
            <h1>Protfolio</h1>
            <h1>Producs</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
