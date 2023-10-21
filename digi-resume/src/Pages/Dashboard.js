import React, { useEffect, useState } from "react";
import leetimg from "../Assets/img/leetimg.png";
import gitimg from "../Assets/img/gitpng.png";
import topcoderimg from "../Assets/img/topcoderthumb.png"
import hackerrank from "../Assets/img/HackerRanktumb.png";
import SendIcon from "@mui/icons-material/Send";
import { Link, useNavigate } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";
import commingSoonImg from "../Assets/img/comming-fotor.png";
import leetlogo from "../Assets/img/leetcode.png";
import githublogo from "../Assets/img/github.png";
import CloseIcon from "@mui/icons-material/Close";
// import Bg from "./img/bg.jpg";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import { auth, db } from "../Database/Firebase";
import {
  addDoc,
  collection,
  query,
  orderBy,
  limit,
  getDocs,
} from "firebase/firestore";
import Footer from "../Components/Footer";
import PlatformCard from "../Components/PlatformCard";

const Dashboard = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const [isLeetModalOpen, setIsLeetModalOpen] = useState(false);
  const [isGitModalOpen, setIsGitModalOpen] = useState(false);

  const toggleLeetModal = () => {
    setIsLeetModalOpen(!isLeetModalOpen);
  };
  const toggleGitModal = () => {
    setIsGitModalOpen(!isGitModalOpen);
  };

  const closeLeetModal = () => {
    setIsLeetModalOpen(false);
  };
  const closeGitModal = () => {
    setIsGitModalOpen(false);
  };

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };
  const [leetcodeUsername, setLeetcodeUsername] = useState("");
  console.log(leetcodeUsername);
  const [githubUsername, setGithubUsername] = useState("");
  console.log(githubUsername);
  console.log(githubUsername);
  const displayName = localStorage.getItem("name");
  const photoURL = localStorage.getItem("photoURL");
  const email = localStorage.getItem("email");
  const [userStatus, setUserStatus] = useState(false);
  const navigate = useNavigate();
  const handelLogOut = () => {
    localStorage.clear();
    navigate("/");
  };
  const handleleetcodeNavigation = () => {
    if (leetcodeUsername) {
      navigate(`/leetcode?v=${leetcodeUsername}`);
    } else {
      toggleLeetModal();
    }
  };
  const handleGithubNavigation = () => {
    if (githubUsername) {
      navigate(`/github?v=${githubUsername}`);
    } else {
      toggleGitModal();
    }
  };

  const handleSaveLeetcodeUsename = async () => {
    try {
      const user = auth.currentUser;

      if (user) {
        closeLeetModal();
        const userId = user.uid;

        const userCollection = collection(db, `users/${userId}/Leetcode`);

        const docRef = await addDoc(userCollection, {
          content: leetcodeUsername,
        });

        console.log("Username added with ID: ", docRef.id);
      } else {
        console.error("User not authenticated.");
      }
    } catch (e) {
      console.error("Error in saving username", e);
    }
  };

  const handleSaveGithubUsename = async () => {
    try {
      const user = auth.currentUser;

      if (user) {
        closeGitModal();
        const userId = user.uid;

        const userCollection = collection(db, `users/${userId}/Github`);

        const docRef = await addDoc(userCollection, {
          content: githubUsername,
        });

        console.log("Username added with ID: ", docRef.id);
      } else {
        console.error("User not authenticated.");
      }
    } catch (e) {
      console.error("Error in saving username", e);
    }
  };

  const getLeetcodeData = async () => {
    try {
      const user = auth.currentUser;
      if (user) {
        const userId = user.uid;
        const userCollectionLeetcode = collection(
          db,
          `users/${userId}/Leetcode`
        );
        const querySnapshotLeetcode = await getDocs(userCollectionLeetcode);

        const allLeetcodeData = [];

        querySnapshotLeetcode.forEach((doc) => {
          allLeetcodeData.push(doc.data());
        });

        // Set the LeetCode username in state
        if (allLeetcodeData.length > 0) {
          console.log(allLeetcodeData[0].content);
          setLeetcodeUsername(allLeetcodeData[0].content);
        }
      } else {
        console.error("User not authenticated.");
      }
    } catch (e) {
      console.error("Error in fetching LeetCode data", e);
    }
  };

  const getGithubData = async () => {
    try {
      const user = auth.currentUser;
      if (user) {
        const userId = user.uid;
        const userCollectiongithub = collection(db, `users/${userId}/Github`);
        const querySnapshotgithub = await getDocs(
          userCollectiongithub,
          orderBy("content", "asc")
        );

        const allGithubData = [];

        querySnapshotgithub.forEach((doc) => {
          allGithubData.push(doc.data());
        });

        // Set the GitHub username in state
        if (allGithubData.length > 0) {
          setGithubUsername(allGithubData[0].content);
        }
      } else {
        console.error("User not authenticated.");
      }
    } catch (e) {
      console.error("Error in fetching Github data", e);
    }
  };

  useEffect(() => {
    console.log("1st");

    const loggedInUser = localStorage.getItem("name");
    if (loggedInUser) {
      setUserStatus(true);
    }
  }, []);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setIsAuthenticated(true);
        // Fetch GitHub and LeetCode data when authenticated
        getLeetcodeData();
        getGithubData();
      } else {
        setIsAuthenticated(false);
      }
    });

    return () => {
      // Unsubscribe from the auth state listener when the component unmounts
      unsubscribe();
    };
  }, []);

  return userStatus ? (
    <div className="">
      <div className="fixed top-0 left-0 right-0 z-50 bg-white shadow-lg bg-opacity-100 text-white p-3 flex justify-between lg:px-28 sm:px-2">
        <div className="flex items-baseline">
          <h1 className=" text-[30px]  text-black font-extrabold">
            Profilio<span className="text-[#f6a130]">.in</span>
          </h1>
          <div className="mx-1 px-1 bg-green-400 rounded-lg ">
            <h1 className="text-[10px] p-[2px] text-white">beta</h1>
          </div>
        </div>

        <div className="flex items-center">
          <div className="px-4">
            <NotificationsNoneIcon sx={{ fontSize: "28px", color: "black" }} />
          </div>
          <div className="relative inline-block text-left">
            <button
              id="avatarButton"
              type="button"
              onClick={toggleDropdown}
              className="w-10 h-10 rounded-full cursor-pointer"
            >
              <img
                className=" rounded-full"
                src={photoURL}
                alt="User dropdown"
              />
            </button>

            {isDropdownOpen && (
              <div
                id="userDropdown"
                className="z-10  absolute  right-0 mt-6 shadow-lg bg-white divide-y divide-gray-100 rounded-lg shadow w-[350px] "
                onClick={closeDropdown}
              >
                <div className="text-end p-1 pr-2">
                  <button>
                    <CloseIcon sx={{ color: "black" }} />
                  </button>
                </div>
                <div className="px-4 py-3 text-sm  flex items-center">
                  <img
                    className=" m-2 rounded-full w-20"
                    src={photoURL}
                    alt="User dropdown"
                  />
                  <div>
                    <div className="font-bold text-[20px] text-black">
                      {displayName}
                    </div>
                    <div className="text-[12px] my-1 truncate text-black">
                      {email}
                    </div>
                  </div>
                </div>
                <ul className="py-2 text-md">
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-black hover:bg-gray-100 "
                    >
                      Dashboard
                    </a>
                  </li>
                  <li>
                    <a
                      href="/settings"
                      className="block px-4 py-2 text-black hover:bg-gray-100 "
                    >
                      Settings
                    </a>
                  </li>
                </ul>
                <div className="py-1 text-md text-black">
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 "
                    onClick={() => {
                      handelLogOut();
                    }}
                  >
                    Sign out
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div>
        <div className="lg:m-20">
          <div className="mt-20 px-28"></div>
          <div className="flex flex-wrap justify-around ">
            <div className="mx-5 mt-10  p-1 shadow-lg rounded-lg lg:w-[410px] ">
              <img src={leetimg} className="rounded-lg" />
              <div className="flex p-2 justify-around">
                <div className="flex items-center">
                  <img src={leetlogo} className="h-12" />
                  <h1 className="font-bold px-2 py-1 text-[20px]">LeetCode </h1>
                </div>

                <button
                  type="button"
                  data-modal-target="authentication-modal"
                  onClick={() => {
                    handleleetcodeNavigation();
                  }}
                  className="block mx-2   focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-yellow-400 dark:hover:bg-yellow-500 "
                >
                  View Profile
                </button>
              </div>

              {/* Main modal */}
              {isLeetModalOpen && (
                <div
                  id="authentication-modal"
                  tabIndex="-1"
                  aria-hidden="true"
                  className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center h-screen bg-gray-700 bg-opacity-50"
                >
                  <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    <button
                      type="button"
                      className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                      onClick={closeLeetModal}
                    >
                      <svg
                        className="w-3 h-3"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 14"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                        />
                      </svg>
                      <span className="sr-only">Close modal</span>
                    </button>
                    <div className="px-6 py-6 lg:px-8">
                      <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
                        Get your profile
                      </h3>
                      <form className="space-y-6" action="#">
                        <div>
                          <label
                            htmlFor="email"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                          >
                            Username
                          </label>
                          <input
                            type="text"
                            name="email"
                            id="email"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                            placeholder="Your username"
                            required
                            value={leetcodeUsername}
                            onChange={(e) =>
                              setLeetcodeUsername(e.target.value)
                            }
                          />
                        </div>

                        <button
                          onClick={() => {
                            handleSaveLeetcodeUsename();
                          }}
                          type="submit"
                          className="w-full text-whitefocus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-yellow-400 dark:hover:bg-yellow-500"
                        >
                          ADD
                        </button>
                        
                      </form>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="mx-5  mt-10 p-1 shadow-lg  rounded-lg lg:w-[410px]">
              <img src={gitimg} className="rounded-lg" />
              <div className="flex p-2 justify-around">
                <div className="flex">
                  <img src={githublogo} className="h-10 items-center" />
                  <h1 className="font-bold px-2 py-1 text-[24px]">GitHub </h1>
                </div>
                <button
                  type="button"
                  data-modal-target="authentication-modal"
                  onClick={() => {
                    handleGithubNavigation();
                  }}
                  className="block mx-2   focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-yellow-400 dark:hover:bg-yellow-500 "
                >
                  View Profile
                </button>
              </div>

              {/* Main modal */}
              {isGitModalOpen && (
                <div
                  id="authentication-modal"
                  tabIndex="-1"
                  aria-hidden="true"
                  className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center h-screen bg-gray-700 bg-opacity-50"
                >
                  <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    <button
                      type="button"
                      className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                      onClick={closeGitModal}
                    >
                      <svg
                        className="w-3 h-3"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 14"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                        />
                      </svg>
                      <span className="sr-only">Close modal</span>
                    </button>
                    <div className="px-6 py-6 lg:px-8">
                      <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
                        Get your profile
                      </h3>
                      <form className="space-y-6" action="#">
                        <div>
                          <label
                            htmlFor="email"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                          >
                            Username
                          </label>
                          <input
                            type="text"
                            name="email"
                            id="email"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                            placeholder="Your username"
                            required
                            value={githubUsername}
                            onChange={(e) => setGithubUsername(e.target.value)}
                          />
                        </div>

                        <button
                          onClick={() => {
                            handleSaveGithubUsename();
                          }}
                          type="submit"
                          className="w-full text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center  dark:bg-yellow-400 dark:hover:bg-yellow-500"
                        >
                          ADD
                        </button>
                       
                      </form>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <PlatformCard title={"...."} img={hackerrank} />
            <PlatformCard title={"...."} img={topcoderimg} />
            <PlatformCard title={"...."} img={commingSoonImg} />
           
          </div>
          {/* <div className="mt-[160px]">
            <div className="flex justify-around bg-[#f6a130] py-14">
              <div>
                <h1 className="text-[20px] font-extrabold">Profolio.in</h1>
                <h1 className="py-2">
                  Showcase Your Code <br />
                  Journey
                </h1>
                <h1>Stay in touch with us:</h1>
                <div className="flex"></div>
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
          </div> */}
        </div>
      </div>

      {/* Your content */}
    </div>
  ) : (
    <h1>Not Logged In</h1>
  );
};

export default Dashboard;
