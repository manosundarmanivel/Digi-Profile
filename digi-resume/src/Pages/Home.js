import React from "react";
import HomePic from "../Assets/img/home.svg";
import { SignInWithGoogle } from '../Database/Firebase'
import { useNavigate} from 'react-router-dom'
import Footer from "../Components/Footer";

  
  


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
      <div className="flex justify-between items-center px-3 lg:px-20 py-3 ">
        <h1 className="text-[30px] font-extrabold">Profilio<span className="text-[#f6a130]">.in</span></h1>
        <div className="border  border-[#323234] p-3">
         <button onClick={()=>{
            handleSignInWithGoogle();
          }}>
         <h1>Try for free</h1>
         </button>
        </div>
      </div>
      <div className=" justify-between items-center   flex bg-[#fdebcf] flex-wrap lg:px-20 py-5 lg:py-20">
      <div className="flex justify-center ">
        <img src={HomePic} className="w-[340px] lg:w-[400px] " />
        </div>
        <div className=" lg:p-1 p-5">
          <h1 className="font-bold text-centre text-[38px] lg:text-[60px] text-[#323234] ">
            Showcase Your Code 
            Journey,<br/> All in one place !
          </h1>
          <h1 className="font-bold text-[30px] mt-5 text-[#323234]">
            We Unite your Coding Presence.
          </h1>
          <div className="my-5">
          <button onClick={()=>{
            handleSignInWithGoogle();
          }} className="p-3 mt-12 px-12 mt-3 mx-2  border border-black   text-[20px]">
            SignUp
          </button>
          {/* <button onClick={()=>{
            handleSignInWithGoogle();
          }} className="p-3 mt-12 px-12 mt-3  mx-2 rounded-lg bg-[#323234]  text-white text-[20px]">
            Get in touch
          </button> */}
          </div>
          
        </div>
        
      </div>
      {/* <div className="p-5 justify-center text-center ">
        <h1 className="text-[20px]">
          "We love using Profilio.in . Our efficiency grew <br/>by 45% and that's amazing!"
        </h1>
        <div className="flex justify-center text-center">
          <img src="" />
          <h1>Mano Sundar , Company CEO</h1>
        </div>
      </div> */}
      <Footer/>
    </div>
  );
};

export default Home;
