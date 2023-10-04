import { useState } from 'react';

import { doc, setDoc ,collection, addDoc } from 'firebase/firestore';
import { auth, db } from '../Database/Firebase'; 

const ProfileSettings = () => {
  const [githubUsername, setGithubUsername] = useState('');
  const [leetcodeUsername, setLeetcodeUsername] = useState('');
  const [message, setMessage] = useState('');

  

  const handleSaveLeetcodeUsename = async () => {
    try {
      const user = auth.currentUser;

      if (user) {
       
        const userId = user.uid;

        const userCollection = collection(db, `users/${userId}/Leetcode`);

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
  
  const handleSaveGithubUsename = async () => {
    try {
      const user = auth.currentUser;

      if (user) {
        
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

  const handleGithubUsernameChange = (e) => {
    setGithubUsername(e.target.value);
  };

  const handleLeetcodeUsernameChange = (e) => {
    setLeetcodeUsername(e.target.value);
  };

  return (
    <div>
      <h2>Profile Settings</h2>
      <div>
        <label htmlFor="githubUsername">GitHub Username:</label>
        <input
          type="text"
          id="githubUsername"
          value={githubUsername}
          onChange={handleGithubUsernameChange}
        />
        <button onClick={handleSaveGithubUsename}>Save GitHub Username</button>
      </div>
      <div>
        <label htmlFor="leetcodeUsername">LeetCode Username:</label>
        <input
          type="text"
          id="leetcodeUsername"
          value={leetcodeUsername}
          onChange={handleLeetcodeUsernameChange}
        />
        <button onClick={handleSaveLeetcodeUsename}>Save LeetCode Username</button>
      </div>
      {message && <p>{message}</p>}
    </div>
  );
};

export default ProfileSettings;
