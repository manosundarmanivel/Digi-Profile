
import { initializeApp } from "firebase/app";
import {getAuth , GoogleAuthProvider , signInWithPopup} from 'firebase/auth'
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAps9B-OlApspYdPyboxDnMQkVGz1_UCmc",
  authDomain: "profilio-9020e.firebaseapp.com",
  projectId: "profilio-9020e",
  storageBucket: "profilio-9020e.appspot.com",
  messagingSenderId: "3056216206",
  appId: "1:3056216206:web:41ca00b751d08a659241df",
  measurementId: "G-93E6TVL3W1"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();



export const SignInWithGoogle = () => {
    return new Promise((resolve, reject) => {
      signInWithPopup(auth, provider)
        .then((result) => {
          console.log(result);
          const name = result.user.displayName;
          const email = result.user.email;
          const photoURL = result.user.photoURL;
          localStorage.setItem("name", name);
          localStorage.setItem("email", email);
          localStorage.setItem("photoURL", photoURL);
  
          resolve(result); // Resolve the promise with the result
        })
        .catch((error) => {
          console.log(error);
          reject(error); // Reject the promise with the error
        });
    });
  };
  
  