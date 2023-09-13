import React, { useState } from "react";
import leetimg from "./img/leetimg.png";
import gitimg from "./img/gitpng.png";
import SendIcon from "@mui/icons-material/Send";
import { Link } from "react-router-dom";

const Start = () => {
  const [leetcodeUsername, setLeetcodeUsername] = useState("");
  const [githubUsername, setGithubUsername] = useState("");

  return (
    <div className="">
      <div className="bg-[#252b32] h-[400px]">
        <h1>Get All Your Profiles</h1>
      </div>
      <div className="">
        <div className="absolute inset-1 shadow-lg rounded-lg bg-white opacity-100 my-64 mx-72">
          <div className="flex">
            <div className="m-1 p-1 border rounded-lg">
              <img src={leetimg} className="rounded-lg" />
              <h1 className="font-bold px-2 py-1 text-[20px]">LeetCode </h1>

              <div class="flex p-2">
                <span class="inline-flex items-center px-3 text-sm border border-r-0 rounded-l-md">
                  <svg
                    class="w-4 h-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                  </svg>
                </span>
                <input
                  type="text"
                  id="website-admin"
                  class="rounded-none rounded-r-lg bg-gray-50 border focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Username"
                  value={leetcodeUsername}
                  onChange={(e) => setLeetcodeUsername(e.target.value)}
                />

                <Link to={"/leetcode?v=" + leetcodeUsername} className="p-2">
                  <div>
                    <SendIcon />
                  </div>
                </Link>
              </div>
            </div>
            <div className="m-1 border p-1  rounded-lg">
              <img src={gitimg} className="rounded-lg" />
              <h1 className="font-bold px-2 py-1 text-[20px]">GitHub</h1>

              <div class="flex p-2">
                <span class="inline-flex items-center px-3 text-sm border border-r-0 rounded-l-md">
                  <svg
                    class="w-4 h-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                  </svg>
                </span>
                <input
                  type="text"
                  id="website-admin"
                  class="rounded-none rounded-r-lg bg-gray-50 border focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Username"
                  value={githubUsername}
                  onChange={(e) => {
                    setGithubUsername(e.target.value);
                  }}
                />
                <Link to={"/github?v=" + githubUsername} className="p-2">
                  <SendIcon />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Your content */}
      </div>
    </div>
  );
};

export default Start;
