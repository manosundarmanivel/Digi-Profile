
import { useState, useEffect } from 'react';
import { collection, addDoc, getDocs, query, orderBy, limit } from 'firebase/firestore';
import { auth, db } from "../Database/Firebase";

const ProfileSettings = () => {
  const [githubUsername, setGithubUsername] = useState('');
  const [leetcodeUsername, setLeetcodeUsername] = useState('');
  const [message, setMessage] = useState('');
  const [lastGithubUsername, setLastGithubUsername] = useState('');
  const [lastLeetcodeUsername, setLastLeetcodeUsername] = useState('');
  const [isLoading, setIsLoading] = useState(true);
 
  
  useEffect(() => {
    const fetchLastUsernames = async () => {
      try {
        const user = auth.currentUser;

        if (user) {
          const userId = user.uid;

          const githubQuery = query(
            collection(db, `users/${userId}/Github`),
            orderBy('createdAt', 'desc'),
            limit(1)
          );

          const githubQuerySnapshot = await getDocs(githubQuery);
          githubQuerySnapshot.forEach((doc) => {
            setLastGithubUsername(doc.data().content);
          });

          // Fetch the last LeetCode username
          const leetcodeQuery = query(
            collection(db, `users/${userId}/Leetcode`),
            orderBy('createdAt', 'desc'),
            limit(1)
          );
          

          const leetcodeQuerySnapshot = await getDocs(leetcodeQuery);
          leetcodeQuerySnapshot.forEach((doc) => {
          
            setLastLeetcodeUsername(doc.data().content);
          });
        } else {
          console.error("User not authenticated.");
        }

        setIsLoading(false); // Mark loading as complete
      } catch (e) {
        console.error("Error in fetching last usernames", e);
        setIsLoading(false); // Mark loading as complete in case of an error
      }
    }

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

  const handleSaveLeetcodeUsename = async () => {
    try {
      const user = auth.currentUser;
  
      if (user) {
        const userId = user.uid;
  
        const userCollection = collection(db, `users/${userId}/Leetcode`);
  
        const docRef = await addDoc(userCollection, {
          content: leetcodeUsername,
        });
  
        console.log("LeetCode Username added with ID: ", docRef.id);
      } else {
        console.error("User not authenticated.");
      }
    } catch (e) {
      console.error("Error in saving LeetCode username", e);
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
  
        console.log("GitHub Username added with ID: ", docRef.id);
      } else {
        console.error("User not authenticated.");
      }
    } catch (e) {
      console.error("Error in saving GitHub username", e);
    }
  };

  const handleGithubUsernameChange = (e) => {
    setGithubUsername(e.target.value);
  };

  const handleLeetcodeUsernameChange = (e) => {
    setLeetcodeUsername(e.target.value);
  };

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      {/* <h2>Profile Settings</h2>
      <div className='flex'>
        <div className='flex'>
          <img/>
          <div>
          <div className='flex'>
            <h1>{githubUsername||lastGithubUsername}</h1>
            <h1>edit</h1>
          </div>
          <h1>Hacker</h1>
          </div>
        </div>
        <div className='flex'></div>
        
      </div> */}
      <div>
        <label htmlFor="githubUsername">GitHub Username:</label>
        <input
          type="text"
          id="githubUsername"
          value={githubUsername || lastGithubUsername}
          onChange={handleGithubUsernameChange}
        />
        <button onClick={handleSaveGithubUsename}>Save GitHub Username</button>
      </div>
      <div>
        <label htmlFor="leetcodeUsername">LeetCode Username:</label>
        <input
          type="text"
          id="leetcodeUsername"
          value={leetcodeUsername || lastLeetcodeUsername}
          onChange={handleLeetcodeUsernameChange}
        />
        <button onClick={handleSaveLeetcodeUsename}>Save LeetCode Username</button>
      </div>
     
    </div>
  );
};

export default ProfileSettings;
