import React from 'react'
import { SignInWithGoogle } from './Firebase'
import { useNavigate} from 'react-router-dom'
const Googleauth = () => {
    const navigate = useNavigate();

    const handleSignInWithGoogle = () =>{
        SignInWithGoogle().then(()=>{
            navigate("/dashboard");
        }).catch((error)=>{
            console.log(error);
        })
    }
  return (
    <div>
        <button onClick={()=>{
            handleSignInWithGoogle();
        }}> Sign in With Google</button>
    </div>
  )
}

export default Googleauth