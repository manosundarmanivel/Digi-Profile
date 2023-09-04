import React from "react";
import LogPic from "../src/img/App data-cuate.svg";

const SignUp = () => {
  return (
    <div className="flex bg-[#fdebcf]  p-24 pl-48">
      <div>
        <img className="pt-28" width={420} src={LogPic} />
      </div>
      <div className="p-10 pl-48 text-center">
        <h1 className="text-[50px] font-bold text-start p-3 text-[#253238]">
          Sign Up
        </h1>

        <div className="">
          <h1 className="text-start pl-5">
            Email <span className="text-red-500">*</span>{" "}
          </h1>
          <input
            className="p-3 m-3 w-[350px] rounded-xl"
            placeholder="Enter your email"
          />
        </div>
        <div>
          <h1 className="text-start pl-5">
            Password <span className="text-red-500">*</span>
          </h1>
          <input
            className="p-3 m-3 w-[350px] rounded-xl"
            placeholder="Enter your password"
          />
        </div>
        <div>
          <h1 className="text-start pl-5">
            Confirm Password <span className="text-red-500">*</span>
          </h1>
          <input
            className="p-3 m-3 w-[350px] rounded-xl"
            placeholder="Enter your confirm password"
          />
        </div>
        
        <button className="text-white bg-[#253238] p-3 w-[350px] rounded-lg mt-5">
          Sign Up        </button>
        <h1 className="mt-5">
          Already have an account?{" "}
          <span className="text-[#5d5fef]"> SignIn </span>
        </h1>
        <h1>Or</h1>
        <div className="flex items-center justify-center border border-[#253238] p-2 m-3 rounded-xl">
    <img src="https://freesvg.org/img/1534129544.png" className="w-8" />
    <h1 className="pl-5">SignUp with Google</h1>
        </div>
       
      </div>
    </div>
  );
};

export default SignUp;
