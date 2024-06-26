import { useState, useEffect } from "react";
import {
  collection,

  getDocs,
 
} from "firebase/firestore";
import { auth, db } from "../Database/Firebase";

import gitimg from "../Assets/img/github.png";
import leetimg from "../Assets/img/leetcode.png"

import CircularIndeterminate from "../Components/Shimmer";

const ProfileSettings = () => {
  const [lastGithubUsername, setLastGithubUsername] = useState("");
  const [lastLeetcodeUsername, setLastLeetcodeUsername] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchLastUsernames = async () => {
      try {
        const user = auth.currentUser;

        if (user) {
          const userId = user.uid;

          // Fetch the last Github username
          const githubQuerySnapshot = await getDocs(
            collection(db, `users/${userId}/Github`)
          );
          if (!githubQuerySnapshot.empty) {
            const lastGithubUsername =
              githubQuerySnapshot.docs[0].data().content;
            setLastGithubUsername(lastGithubUsername);
          }

          // Fetch the last LeetCode username
          const leetcodeQuerySnapshot = await getDocs(
            collection(db, `users/${userId}/Leetcode`)
          );
          if (!leetcodeQuerySnapshot.empty) {
            const lastLeetcodeUsername =
              leetcodeQuerySnapshot.docs[0].data().content;
            setLastLeetcodeUsername(lastLeetcodeUsername);
          }
        } else {
          console.error("User not authenticated.");
        }

        setIsLoading(false); // Mark loading as complete
      } catch (e) {
        console.error("Error in fetching last usernames", e);
        setIsLoading(false); // Mark loading as complete in case of an error
      }
    };

    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        // User is authenticated, fetch the data
        fetchLastUsernames();
      } else {
        setIsLoading(false); // Mark loading as complete if the user is not authenticated
      }
    });

    return () => {
      unsubscribe(); // Clean up the subscription
    };
  }, []);

  if (isLoading) {
    return <CircularIndeterminate/>;
  }

  return (
    <div className="p-5 m-2">
      <h2 className="text-[24px]">Profile Settings</h2>
      <div className="flex flex-wrap justify-center ">
        <div className="flex items-center bg-slate-100 p-1 m-2 rounded-xl w-full">
          <img width={80} src={gitimg} />
          <div>
          <div className="flex items-center ">
              <h1 className="text-[16px]">{lastGithubUsername}</h1>
              <h2 className="text-[14px] text-blue-500 px-2">Edit</h2>
            </div>
            <h1 className="font-semibold text-[18px]">GitHub</h1>
          </div>
        </div>
        <div className="flex items-center bg-slate-100 p-1 m-2 rounded-xl w-full">
          <img width={90} src={leetimg} />
          <div>
            <div className="flex items-center ">
              <h1 className="text-[16px]">{lastLeetcodeUsername}</h1>
              <h2 className="text-[14px] text-blue-500 px-2">Edit</h2>
            </div>
            
            <h1 className="font-semibold text-[18px]">Leetcode</h1>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default ProfileSettings;
